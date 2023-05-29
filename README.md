# Image_Vision

<p align="center">
    <img src="https://user-images.githubusercontent.com/87495750/236040797-9c173952-8ff7-4e60-89e9-75eaa9163c89.jpg"> 
    
    

## Basic Overview
#### It is a web page that uses image processing analysis using computer vision theories.


## Task(4) feautures
### Thresholding
#### 1. Otsu Thresholding
##### It is a technique that automatically determines the optimal threshold value for image segmentation based on the variance of pixel intensities in the image.
![cat256](https://user-images.githubusercontent.com/87495750/236043388-54d971c8-dd1c-4ea6-ac3b-37da070f55f2.jpg)
![Picture1](https://user-images.githubusercontent.com/87495750/236044748-a65d27c4-a288-4b88-b5b8-cc1b8c9ae537.png)

#### 2. Optimal Thresholding
##### It is a technique that involves selecting a threshold value to segment an image into foreground and background regions based on some predefined criteria
![cat256](https://user-images.githubusercontent.com/87495750/236043388-54d971c8-dd1c-4ea6-ac3b-37da070f55f2.jpg)
![Picture1](https://user-images.githubusercontent.com/87495750/236044009-1a2029fa-071b-402f-ba5b-ae0c2af3155a.png)
    
    
#### 3. Spectral Thresholding
##### It is a technique that involves segmenting an image based on the eigenvalues and eigenvectors of its spectral matrix.
![cat256](https://user-images.githubusercontent.com/87495750/236043388-54d971c8-dd1c-4ea6-ac3b-37da070f55f2.jpg)
![Picture4](https://user-images.githubusercontent.com/87495750/236045005-90df8969-eaa5-486b-b85d-4cadf782f83b.png)

### 4. Local Thresholding
##### It is a technique that involves selecting a threshold value for each pixel in an image based on its local neighborhood.
![cat256](https://user-images.githubusercontent.com/87495750/236043388-54d971c8-dd1c-4ea6-ac3b-37da070f55f2.jpg)
![Picture3](https://user-images.githubusercontent.com/87495750/236044883-027603c1-2da3-4a87-a5e7-26faadfee928.png)
    
    
    
### Segmentation
#### Mapping RGB into LUV domain
##### At first, we implemented the rgb to luv maping by applying the mathematical equations and matrices.
![demo_image](https://user-images.githubusercontent.com/87495750/236045527-3d120176-23b1-4e92-bcae-7bec03f3627e.jpg)
![7778798814341632_luv](https://user-images.githubusercontent.com/87495750/236045829-b73b1055-736c-4fc9-b7de-09d45574ef33.png)

### 1. KMeans Segmentation
##### KMeans Segmentation is a technique that involves clustering pixels in an image based on their similarity in color and texture.(It is applied on LUV input image)
![demo_image](https://user-images.githubusercontent.com/87495750/236045527-3d120176-23b1-4e92-bcae-7bec03f3627e.jpg)
![98524944549759589922786367326_kmeans_segmentation](https://user-images.githubusercontent.com/87495750/236046925-da79a4d8-8135-4964-9a2b-52f9df1954f2.png)
    

### 2. Mean Shift Segmentation
##### The mean shift algorithm involves shifting each pixel in the image towards the direction of the highest density, which results in the formation of clusters that correspond to different objects or regions in the image.(It is applied on LUV input image)
![demo_image](https://user-images.githubusercontent.com/87495750/236045527-3d120176-23b1-4e92-bcae-7bec03f3627e.jpg)
![2540806749834198715441851_mean_shift](https://user-images.githubusercontent.com/87495750/236046796-f718131a-e863-4ef5-b9fa-b438b595e5eb.png)
    

#### 3. Agglomerative Segmentation
##### It is a technique that involves recursively merging adjacent pixels or regions based on their similarity in color and texture.(It is applied on RGB input image)
![cat256](https://user-images.githubusercontent.com/87495750/236043388-54d971c8-dd1c-4ea6-ac3b-37da070f55f2.jpg)
![Picture5](https://user-images.githubusercontent.com/87495750/236048029-8f0ad0ba-e2d3-4137-942b-bd60af9fa5dd.png)
    
    
#### 4. Region Growing Segmentation
##### It is a technique that involves iteratively growing regions of pixels in an image based on some predefined criteria, such as similarity in color or texture.(It is applied on RGB input image)
![cat256](https://user-images.githubusercontent.com/87495750/236043388-54d971c8-dd1c-4ea6-ac3b-37da070f55f2.jpg)
![Picture6](https://user-images.githubusercontent.com/87495750/236048098-b5bc9115-65ce-485f-a20c-e176c27992b7.png)

### Finally, you can see more details and each function code explaination in the report file attached with the project.



