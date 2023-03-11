let menuBtn = document.querySelector('.toggle-menu'),
    mainConatiner = document.querySelector('.container'),
    tryNowBtn = mainConatiner.querySelector('.hero .button'),
    descriptionContainer = document.querySelector('.description-container'),
    closeDescriptionContainerBtn = descriptionContainer.querySelector('.close'),
    proccessWindow = document.querySelector('.process-image-container'),
    viewImage = document.querySelector('.view-image-container .img-view'),
    editPanel = document.querySelector('.img-edit-panel'),
    loader = document.querySelector('.loader-rgn'),
    analyticWindow = document.querySelector('.analytics'),
    clsBtnAnalyticsWindow = analyticWindow.querySelector('span.cls'),
    graphs_menu = document.querySelector('.graphs-menu'),
    eqCmlWindow = document.querySelector('.cml-eq-diagrams');
let editImgOriginal;
menuBtn.addEventListener("click", _ => {
    menuBtn.classList.toggle('active');
    document.querySelector('.menu-list').classList.toggle("active");
    document.querySelectorAll('.menu-list li').forEach(ele => {
        ele.addEventListener("click", _ => {
            document.querySelector('.menu-list li.active').classList.remove('active');
            ele.classList.add('active');
        });
    });
});
clsBtnAnalyticsWindow.addEventListener('click', _ => {
    analyticWindow.classList.contains('inactive') ? "" : analyticWindow.classList.add('inactive');
    proccessWindow.classList.add('active');
    document.querySelector('.graphs-menu').classList.remove('active');
    analyticWindow.querySelector('.grph_btn').classList.remove('active');
    document.querySelector('.graphs-menu p.active').classList.remove('active');
    document.querySelectorAll('.graphs-menu p')[0].classList.add('active');
});
tryNowBtn.addEventListener('click', _ => {
    mainConatiner.classList.add('inactive');
    descriptionContainer.classList.add('active');
});
closeDescriptionContainerBtn.addEventListener('click', _ => {
    mainConatiner.classList.remove('inactive');
    descriptionContainer.classList.remove('active');
});
desBtns = document.querySelectorAll('.description-container .buttons .btn');
desBtns[0].addEventListener('click', _ => {
    descriptionContainer.classList.remove('active');
    proccessWindow.classList.add('active');
    proccessWindow.querySelector('.logo-cancel span').addEventListener('click', _ => {
        proccessWindow.classList.remove('active');
        descriptionContainer.classList.add('active');
    });
    viewBtns = proccessWindow.querySelectorAll('.nav-edit-view p');
    viewBtns[0].addEventListener('click', _ => {
        viewBtns.forEach(ele => ele.classList.contains('active') ? ele.classList.remove('active') : "");
        viewBtns[0].classList.add('active');
        proccessWindow.classList.contains('process') ? proccessWindow.classList.remove('process') : proccessWindow.classList.add('');
        editPanel.classList.add('inactive');
        viewImage.classList.remove('inactive');
        clearActive();
    });
    viewBtns[1].addEventListener('click', _ => {
        sendImg();
    });
});


// imgs
let viewImg = document.querySelector('.img-view img'),
    upldImgBtn = document.querySelector('.img-view span.add'),
    upldImg = document.querySelector('.img-view input'),
    rmvImgBtn = viewImage.querySelector('.remove'),
    wrkSpcImg = document.querySelector('.img-edit-panel .work-space-img img'),
    panelElments = document.querySelectorAll('.panel .main p');
let optionsList = [{
    value: 'add_noise', options: [
        '<p value="uniform_noise"><span class="material-symbols-outlined">view_compact</span><span>Uniform Noise</span></p>',
        '<p value="gaussian_noise"><span class="material-symbols-outlined">filter_hdr</span><span>Gaussian Noise</span></p>',
        '<p value="salt_Papper_noise"><span class="material-symbols-outlined">grain</span><span>Salt & Papper Noise</span></p>',
    ]
}, {
    value: 'filter_noise', options: [
        '<p value="average_filter"><span class="material-symbols-outlined">leak_add</span><span>Average Filter</span></p>',
        '<p value="gaussian_filter"><span class="material-symbols-outlined">gradient</span><span>Gaussian Filter</span></p>',
        '<p value="median_filter"><span class="material-symbols-outlined">hdr_weak</span><span>Median Filter</span></p>',
    ]
}, {
    value: 'edge_detection', options: [
        '<p value="sobel_filter"><span class="material-symbols-outlined">filter_1</span></span><span>Sobel Filter</span></p>',
        '<p value="roberts_filter"><span class="material-symbols-outlined">filter_2</span><span>Roberts Filter</span></p>',
        '<p value="prewitt_filter"><span class="material-symbols-outlined">filter_3</span></span><span>Prewitt Filter</span></p>',
        '<p value="canny_filter"><span class="material-symbols-outlined">filter_4</span><span>Canny Filter</span></p>',
    ]
}, {
    value: 'analytics', options: [
        '<p value="show_histogram"><span class="material-symbols-outlined">leaderboard</span><span>Show Histogram</span></p>',
        '<p value="show_distribution_curve"><span class="material-symbols-outlined">waterfall_chart</span><span>Show Distribution Curve</span></p>',
    ]
}, {
    value: 'equalizer', options: [
        '<p value="show_equalizes_histogram"><span class="material-symbols-outlined">full_stacked_bar_chart</span><span>Show Equalizes Histogram</span></p>',
        '<p value="show_cumulative_curve"><span class="material-symbols-outlined">process_chart</span><span>Show Cumulative Curve</span></p>'
    ]
}, {
    value: 'normalizer', options: [
        '<p value="show_cumulative_curve"><span class="material-symbols-outlined">process_chart</span><span>Show Cumulative Curve</span></p>'
    ]
}, {
    value: 'thresholding', options: [
        '<p  value="local_thresholding"><span class="material-symbols-outlined">local_florist</span></span><span>Local Thresholding</span></p>',
        '<p value="gloabal_thresholding"><span class="material-symbols-outlined">wallpaper</span><span>Gloabal Thresholding</span></p>',
    ]
}, { value: 'transformation', options: [] }, {
    value: 'filtering', options: [
        '<p value="low_pass_filter"><span class="material-symbols-outlined">filter_drama</span></span><span>Low Pass Filter</span></p>',
        '<p value="high_pass_filter"><span class="material-symbols-outlined">filter_vintage</span><span>High Pass Filter</span></p>',
    ]
}],
    imgData = {};




upldImgBtn.addEventListener('click', _ => upldImg.click());
upldImg.addEventListener('input', _ => {
    let file = upldImg.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = _ => {
            let result = reader.result;
            console.log(result);
            viewImg.classList.add('active');
            viewImg.src = result;
            imgData.img = result;
            rmvImgBtn.classList.add('active');
            viewBtns[1].classList.remove('disabled');
        }
        rmvImgBtn.addEventListener('click', _ => {
            viewImg.classList.remove('active');
            viewImg.src = '';
            wrkSpcImg.src = viewImg.src;
            upldImg.value = '';
            rmvImgBtn.classList.remove('active');
            viewBtns[1].classList.add('disabled');
        });
        reader.readAsDataURL(file);
    };
});
panelElments.forEach(ele => {
    ele.addEventListener('click', _ => {
        document.querySelector('.panel .main p.active')?.classList.remove('active');
        ele.classList.add('active');
        addToOptions(ele.getAttribute('value'))
        if (ele.getAttribute('value') == 'normalizer' || ele.getAttribute('value') == 'equalizer' || ele.getAttribute('value') == 'convert_to_grayscale') {
            let filter = {};
            filter.value = ele.getAttribute('value');
            filter.img = editImgOriginal;
            applyFilter(filter);
        }
    });
});




// hybrid 
let hybridWindow = document.querySelector('.hybrid-imgs-container'),
    hybridControlBtns = hybridWindow.querySelectorAll('.control-btns p'),
    upldImgsBtns = hybridWindow.querySelectorAll('.img span.add'),
    upldImg1 = document.getElementById('img-one'),
    upldImg2 = document.getElementById('img-two'),
    img1 = hybridWindow.querySelector('.img.img-1 .img-container img'),
    img2 = hybridWindow.querySelector('.img.img-2 .img-container img'),
    rmvBtns = hybridWindow.querySelectorAll('.img .remove'),
    rsllImgContainer = hybridWindow.querySelector('.img.rslt-img');
let img1Stat = false,
    img2Stat = false,
    imgsObj = {};
desBtns[1].addEventListener('click', _ => {
    hybridWindow.classList.add('active');
    descriptionContainer.classList.remove('active');
    hybridWindow.querySelector('.logo-cancel span').addEventListener('click', _ => {
        hybridWindow.classList.remove('active');
        descriptionContainer.classList.add('active');
    });
});
upldImgsBtns[0].addEventListener('click', _ => upldImg1.click());
upldImgsBtns[1].addEventListener('click', _ => upldImg2.click());
upldImg1.addEventListener('input', _ => {
    let file = upldImg1.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = _ => {
            let result = reader.result;
            console.log(result);
            img1.classList.add('active');
            img1.src = result;
            imgsObj.img1 = result;
            img1Stat = true;
            activeCombineClearBtns();
            rmvBtns[0].classList.add('active');
            rsllImgContainer.classList.contains('inactive') ? '' : rsllImgContainer.classList.add('inactive');
        };
        rmvBtns[0].addEventListener('click', _ => {
            img1.src = '';
            img1Stat = false;
            upldImg1.value = '';
            rmvBtns[0].classList.remove('active');
            img1.classList.remove('active');
            rsllImgContainer.classList.contains('inactive') ? '' : rsllImgContainer.classList.add('inactive');
            hybridControlBtns[1].classList.contains('process') ? hybridControlBtns[1].classList.remove('process') : '';
            activeCombineClearBtns();
        });
        reader.readAsDataURL(file);
    };
});
upldImg2.addEventListener('input', _ => {
    let file = upldImg2.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = _ => {
            let result = reader.result;
            console.log(result);
            img2.classList.add('active');
            img2.src = result;
            imgsObj.img2 = result;
            img2Stat = true;
            activeCombineClearBtns();
            rmvBtns[1].classList.add('active');
            rsllImgContainer.classList.contains('inactive') ? '' : rsllImgContainer.classList.add('inactive');
        }
        rmvBtns[1].addEventListener('click', _ => {
            img2.src = '';
            img2Stat = false;
            upldImg2.value = '';
            rmvBtns[1].classList.remove('active');
            img2.classList.remove('active');
            rsllImgContainer.classList.contains('inactive') ? '' : rsllImgContainer.classList.add('inactive');
            hybridControlBtns[1].classList.contains('process') ? hybridControlBtns[1].classList.remove('process') : '';
            activeCombineClearBtns();
        });
        reader.readAsDataURL(file);
    };
});

hybridControlBtns[0].addEventListener('click', _ => {
    img1.src = '';
    img2.src = '';
    upldImg1.value = '';
    upldImg2.value = '';
    img1.classList.remove('active');
    img2.classList.remove('active');
    rmvBtns[0].classList.contains('active') ? rmvBtns[0].classList.remove('active') : '';
    rmvBtns[1].classList.contains('active') ? rmvBtns[1].classList.remove('active') : '';
    rsllImgContainer.classList.contains('inactive') ? '' : rsllImgContainer.classList.add('inactive');
    hybridControlBtns[1].classList.contains('process') ? hybridControlBtns[1].classList.remove('process') : '';
    img1Stat = false, img2Stat = false;
    activeCombineClearBtns();
});
hybridControlBtns[1].addEventListener('click', _ => {
    sendHybridImgs();
});
function activeCombineClearBtns() {
    img1Stat && img2Stat ? hybridControlBtns[1].classList.remove('inactive') : hybridControlBtns[1].classList.contains('inactive') ? '' : hybridControlBtns[1].classList.add('inactive');
    img1Stat || img2Stat ? hybridControlBtns[0].classList.remove('inactive') : hybridControlBtns[0].classList.contains('inactive') ? '' : hybridControlBtns[0].classList.add('inactive');
};

function addToOptions(value) {
    optionsList.forEach(option => {
        if (option.value == value) {
            let optionsContainer = document.querySelector('.main-options .options');
            optionsContainer.innerHTML = '';
            option.options.forEach(op => {
                optionsContainer.innerHTML += op;
            });
            let panelMainOptions = document.querySelectorAll('.panel .main-options .options p');
            panelMainOptions.forEach(ele => {
                ele.addEventListener('click', _ => {
                    document.querySelector('.panel .main-options p.active')?.classList.remove('active');
                    ele.classList.add('active');
                    console.log(ele.getAttribute('value'));
                    if (ele.getAttribute('value') == 'gaussian_noise' || ele.getAttribute('value') == 'average_filter' || ele.getAttribute('value') == 'median_filter' || ele.getAttribute('value') == 'gaussian_filter' || ele.getAttribute('value') == 'uniform_noise' || ele.getAttribute('value') == 'salt_Papper_noise' || ele.getAttribute('value') == "sobel_filter" || ele.getAttribute('value') == "roberts_filter" || ele.getAttribute('value') == "prewitt_filter" || ele.getAttribute('value') == "canny_filter" || ele.getAttribute('value') == "low_pass_filter" || ele.getAttribute('value') == "high_pass_filter" || ele.getAttribute('value') == 'local_thresholding' || ele.getAttribute('value') == 'gloabal_thresholding') {
                        let filter = {};
                        filter.value = ele.getAttribute('value');
                        filter.img = wrkSpcImg.src;
                        applyFilter(filter);
                    }
                    else if (ele.getAttribute('value') == "show_histogram") {
                        let histogramData = {}
                        histogramData.img = editImgOriginal;
                        rescieveHistograam(histogramData);
                    }
                    else if (ele.getAttribute('value') == "show_distribution_curve") {
                        let distData = {}
                        distData.img = editImgOriginal;
                        recieveDistData(distData);
                    }
                    else if (ele.getAttribute('value') == 'show_equalizes_histogram') {
                        let eqData = {};
                        eqData.img = wrkSpcImg.src;
                        eqData.value = 'grayscale';
                        recieveEqHistogram(eqData);
                        eqCmlWindow.querySelector('.cls').addEventListener('click', _ => {
                            eqCmlWindow.classList.add('inactive');
                            proccessWindow.classList.add('active');
                        });
                    }
                    else if (ele.getAttribute('value') == 'show_cumulative_curve') {
                        let cmlData = {};
                        cmlData.img = wrkSpcImg.src;
                        recieveCmlCurve(cmlData);
                        eqCmlWindow.querySelector('.cls').addEventListener('click', _ => {
                            eqCmlWindow.classList.add('inactive');
                            proccessWindow.classList.add('active');
                        });
                    }
                });
            });
        };
    });
};

function clearActive() {
    document.querySelector('.panel .main-options .options p.active')?.classList.remove('active');
    document.querySelector('.panel .main p.active')?.classList.remove('active');
    document.querySelector('.main-options .options').innerHTML = '';
}
function sendHybridImgs() {
    loader.classList.add('active');
    fetch(`${window.origin}/recieve_hybrid`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(imgsObj),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            document.querySelector('.img.rslt-img img').src = ''
            console.log(data['Message']);
            console.log(data['img']);
            console.log(document.querySelector('.img.rslt-img img'));
            document.querySelector('.img.rslt-img img').src = data['img'];
            loader.classList.remove('active');
            hybridControlBtns[1].classList.add('process');
            rsllImgContainer.classList.remove('inactive');
            document.querySelector('.img.rslt-img img').classList.add('active');
        });
    });
};
function sendImg() {
    loader.classList.add('active');
    fetch(`${window.origin}/recieve_img`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(imgData),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            loader.classList.remove('active');
            wrkSpcImg.src = data['img'];
            editImgOriginal = wrkSpcImg.src;
            viewBtns.forEach(ele => ele.classList.contains('active') ? ele.classList.remove('active') : "");
            viewBtns[1].classList.add('active');
            proccessWindow.classList.add('process');
            editPanel.classList.remove('inactive');
            viewImage.classList.add('inactive');
        });
    });
}
function applyFilter(filter) {
    loader.classList.add('active');
    fetch(`${window.origin}/apply_filter`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(filter),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            wrkSpcImg.src = data['img'];
            loader.classList.remove('active');
        });
    });
}

// result pic from cimbination

// console.log(document.querySelectorAll('.dwn'));
document.querySelectorAll('.dwn').forEach(ele => {
    ele.addEventListener('click', _ => {
        downloadElement(ele.parentElement.querySelector('img').src, ele.parentElement.querySelector('img').src.split('/').pop())
    });
});

function rescieveHistograam(histo) {
    loader.classList.add('active');
    fetch(`${window.origin}/recieve_histogram`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(histo),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            console.log(data['values']);
            loader.classList.remove('active');
            addHistogram(data['values'][0], data['values'][1])
            analyticWindow.querySelector('.dis_graph').classList.contains('inactive') ? '' : analyticWindow.querySelector('.dis_graph').classList.add('inactive');
            analyticWindow.querySelector('.histo').classList.contains('inactive') ? analyticWindow.querySelector('.histo').classList.remove('inactive') : '';
            analyticWindow.classList.remove('inactive');
            proccessWindow.classList.remove('active');
        });
    });
};
function recieveEqHistogram(histo) {
    loader.classList.add('active');
    fetch(`${window.origin}/recieve_rgb`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(histo),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            console.log(data['values']);
            loader.classList.remove('active');
            addEqHistogram(data['values'][0], data['values'][1])
            eqCmlWindow.querySelector('.eq').classList.contains('inactive') ? eqCmlWindow.querySelector('.eq').classList.remove('inactive') : '';
            eqCmlWindow.querySelector('.cml').classList.contains('inactive') ? '' : eqCmlWindow.querySelector('.cml').classList.add('inactive');
            eqCmlWindow.classList.contains('inactive') ? eqCmlWindow.classList.remove('inactive') : '';
            proccessWindow.classList.remove('active');
        });
    });
};
function recieveDistData(dist) {
    loader.classList.add('active');
    fetch(`${window.origin}/recieve_distribution_curve`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(dist),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            console.log(data['values']);
            loader.classList.remove('active');
            addDistriubtionGraph(data['values'][0], data['values'][1])
            analyticWindow.querySelector('.histo').classList.contains('inactive') ? '' : analyticWindow.querySelector('.histo').classList.add('inactive');
            analyticWindow.querySelector('.dis_graph').classList.contains('inactive') ? analyticWindow.querySelector('.dis_graph').classList.remove('inactive') : '';
            analyticWindow.classList.remove('inactive');
            proccessWindow.classList.remove('active');
        });
    });
};
function recieveCmlCurve(dist) {
    loader.classList.add('active');
    fetch(`${window.origin}/recieve_cml_curve`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(dist),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            console.log(data['values']);
            addCmlCurve(data['values'][0], data['values'][1])
            loader.classList.remove('active');
            eqCmlWindow.classList.contains('inactive') ? eqCmlWindow.classList.remove('inactive') : '';
            proccessWindow.classList.remove('active');
            eqCmlWindow.querySelector('.cml').classList.contains('inactive') ? eqCmlWindow.querySelector('.cml').classList.remove('inactive') : '';
            eqCmlWindow.querySelector('.eq').classList.contains('inactive') ? '' : eqCmlWindow.querySelector('.eq').classList.add('inactive');
        });
    });
};
function downloadElement(fileUrl, fileName) {
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    downloadLink.click();
}


function addDistriubtionGraph(x, y) {
    const config = { responsive: true };
    let trace1 = {
        type: "scatter",
        mode: 'lines',
        x: x,
        y: y,
        line: { color: "#24b5ff" }
    },
        new_data = [trace1],
        new_layout = {
            paper_bgcolor: '#00010000',
            plot_bgcolor: "#00010000",
            showlegend: false,
            margin: {
                l: 30, r: 30, b: 30, t: 30, pad: 1,
            },
            xaxis: {
                range: ['2016-07-01', "2017-02-01"],
                type: "data",
                title: 'Values',
                showgrid: false,
            },
            yaxis: {
                autorange: true,
                type: 'linear',
                title: 'Number of Pixels',
                showgrid: false,
            },
            height: 400,
            width: 750,
            font: { color: "#24b5ff", size: "7" },
        };
    Plotly.newPlot("distrobution_graph", new_data, new_layout, config);
}
function addHistogram(x, y) {
    const config = { responsive: true };
    barChartTrace1 = {
        x: x,
        y: y,
        type: 'bar',
        marker: {
            color: "#24b5ff",
        },
    },
        barChartData = [barChartTrace1],
        layout = {
            barmode: "stack",
            paper_bgcolor: '#00010000',
            plot_bgcolor: "#00010000",
            showlegend: false,
            margin: {
                l: 30, r: 30, b: 30, t: 30, pad: 1,
            },
            font: { color: "#24b5ff" },
            xaxis: {
                type: "data",
                title: 'Values',
                showgrid: false,
            },
            yaxis: {
                autorange: true,
                type: 'linear',
                title: 'Number of Pixels',
                showgrid: false,
            },
            height: 400,
            width: 750,
            font: { color: "#24b5ff", size: "7" },
        };
    Plotly.newPlot("histogram", barChartData, layout, config);
}

function addEqHistogram(x, y) {
    const config = { responsive: true };
    barChartTrace1 = {
        x: x,
        y: y,
        type: 'bar',
        marker: {
            color: "#24b5ff",
        },
    },
        barChartData = [barChartTrace1],
        layout = {
            barmode: "stack",
            paper_bgcolor: '#00010000',
            plot_bgcolor: "#00010000",
            showlegend: false,
            margin: {
                l: 30, r: 30, b: 30, t: 30, pad: 1,
            },
            font: { color: "#24b5ff" },
            xaxis: {
                type: "data",
                title: 'Values',
                showgrid: false,
            },
            yaxis: {
                autorange: true,
                type: 'linear',
                title: 'Number of Pixels',
                showgrid: false,
            },
            height: 400,
            width: 750,
            font: { color: "#24b5ff", size: "7" },
        };
    Plotly.newPlot("eq-histogram", barChartData, layout, config);
}
function addCmlCurve(x, y) {
    const config = { responsive: true };
    let trace1 = {
        type: "scatter",
        mode: 'lines',
        x: x,
        y: y,
        line: { color: "#24b5ff" }
    },
        new_data = [trace1],
        new_layout = {
            paper_bgcolor: '#00010000',
            plot_bgcolor: "#00010000",
            showlegend: false,
            margin: {
                l: 30, r: 30, b: 30, t: 30, pad: 1,
            },
            xaxis: {
                range: ['2016-07-01', "2017-02-01"],
                type: "data",
                title: 'Values',
                showgrid: false,
            },
            yaxis: {
                autorange: true,
                type: 'linear',
                title: 'Number of Pixels',
                showgrid: false,
            },
            height: 400,
            width: 750,
            font: { color: "#24b5ff", size: "7" },
        };
    Plotly.newPlot("cml-curve", new_data, new_layout, config);
}

//  graphs Menu
let grphsBtn = analyticWindow.querySelector('.grph_btn'),
    graphMenuList = graphs_menu.querySelectorAll('p');
grphsBtn.addEventListener('click', _ => {
    graphs_menu.classList.toggle('active');
    grphsBtn.classList.toggle('active');
});
graphMenuList.forEach(ele => {
    ele.addEventListener('click', _ => {
        graphs_menu.querySelector('p.active').classList.remove('active');
        ele.classList.add('active');
        let data = {}
        data.img = editImgOriginal;
        data.value = ele.getAttribute('value');
        if (analyticWindow.querySelector('.dis_graph').classList.contains('inactive'))
            recieveRGBGrayDataHisto(data);
        else if (analyticWindow.querySelector('.histo').classList.contains('inactive'))
            recieveRGBGrayDataDistGraph(data);
    });
});

function recieveRGBGrayDataHisto(data) {
    loader.classList.add('active');
    fetch(`${window.origin}/recieve_rgb`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            console.log(data['values']);
            loader.classList.remove('active');
            addHistogram(data['values'][0], data['values'][1])
            console.log(data['values'][0])
            analyticWindow.querySelector('.dis_graph').classList.contains('inactive') ? '' : analyticWindow.querySelector('.dis_graph').classList.add('inactive');
            analyticWindow.querySelector('.histo').classList.contains('inactive') ? analyticWindow.querySelector('.histo').classList.remove('inactive') : '';
            analyticWindow.classList.remove('inactive');
            proccessWindow.classList.remove('active');
        });
    });
};
function recieveRGBGrayDataDistGraph(data) {
    loader.classList.add('active');
    fetch(`${window.origin}/recieve_rgb`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        cache: 'no-cache',
        headers: new Headers({
            'content-type': "application/json",
        }),
    }).then(response => {
        if (response.status !== 200) {
            console.log(`Response status was not 200: ${response.status}`);
            return;
        }
        response.json().then(data => {
            console.log(data['Message']);
            console.log(data['values']);
            loader.classList.remove('active');
            addDistriubtionGraph(data['values'][0], data['values'][1])
            analyticWindow.querySelector('.histo').classList.contains('inactive') ? '' : analyticWindow.querySelector('.histo').classList.add('inactive');
            analyticWindow.querySelector('.dis_graph').classList.contains('inactive') ? analyticWindow.querySelector('.dis_graph').classList.remove('inactive') : '';
            analyticWindow.classList.remove('inactive');
            proccessWindow.classList.remove('active');
        });
    });
}