from flask import Flask, render_template, request, make_response, jsonify
import base64
import os
from random import randint
import filter_fun as fn
from Filters import *
from Frequency import *
app = Flask(__name__)


def modify_path(path):
    new_path = './'+'/'.join(path.split('/')[3::])
    return new_path


def handle_filter(img_path, filter_name):
    new_path_img = ''
    if filter_name == 'gaussian_noise':
        new_path_img = fn.add_gaussian_noise(img_path, 0.05)
    elif filter_name == 'average_filter':
        new_path_img = fn.add_average_filter(img_path, 9)
    elif filter_name == 'gaussian_filter':
        new_path_img = fn.add_gaussian_filter(img_path)
    elif filter_name == 'median_filter':
        new_path_img = fn.add_median_filter(img_path, 9)
    elif filter_name == 'uniform_noise':
        new_path_img = uniform_noise(img_path)
    elif filter_name == 'salt_pepper_noise':
        new_path_img = salt_pepper_noise(img_path,0.05)
    return new_path_img


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/recieve_hybrid', methods=['GET', 'POST'])
def get_hybrid_imgs():
    if request.method == 'POST':
        list_imgs_d = os.listdir('./static/download/hybrid')
        list_imgs_up = os.listdir('./static/upload/hybrid')
        for img in list_imgs_d:
            path = './static/download/hybrid/'+img
            os.remove(path)
        for img in list_imgs_up:
            path = './static/upload/hybrid/'+img
            os.remove(path)

        req = request.get_json()
        upld_img1 = base64.b64decode(req["img1"].split(',')[1])
        upld_img2 = base64.b64decode(req["img2"].split(',')[1])

        upld_img1_file = './static/upload/hybrid/upld_hyb_img1.png'
        upld_img2_file = './static/upload/hybrid/upld_hyb_img2.png'

        with open(upld_img1_file, 'wb') as f:
            f.write(upld_img1)
        with open(upld_img2_file, 'wb') as f:
            f.write(upld_img2)

        res = make_response(
            jsonify({'Message': "Transformation has been done successfully"}), 200)
        return res


@app.route('/recieve_img', methods=['GET', 'POST'])
def get_img():
    if request.method == 'POST':
        list_imgs_d = os.listdir('./static/download/edit')
        list_imgs_up = os.listdir('./static/upload/edit')
        for img in list_imgs_d:
            path = './static/download/edit/'+img
            os.remove(path)
        for img in list_imgs_up:
            path = './static/upload/edit/'+img
            os.remove(path)

        req = request.get_json()
        upld_img = base64.b64decode(req["img"].split(',')[1])

        upld_img_file = f'./static/upload/edit/{randint(0,99999999999999999)}_upld_edit_img.png'

        with open(upld_img_file, 'wb') as f:
            f.write(upld_img)
        # print(fn.add_median_filter(upld_img_file, 9))
        # print(fn.add_average_filter(upld_img_file, 9))
        # print(fn.add_gaussian_filter(upld_img_file))

        res = make_response(
            jsonify({'Message': "Transformation has been done successfully", 'img': upld_img_file}), 200)
        return res


@app.route('/apply_filter', methods=['POST', 'GET'])
def apply_filter():
    if request.method == 'POST':
        req = request.get_json()
        print(modify_path(req['img']))
        res = make_response(
            jsonify({'Message': "Transformation has been done successfully", 'img': handle_filter(modify_path(req['img']), req['value'])}), 200)
        return res


if __name__ == "__main__":
    app.run()
