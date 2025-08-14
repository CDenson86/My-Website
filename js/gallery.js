/* JavaScript for the week 8 index.html file. The images that the script should cycle through
   are images/banner1.jpg, images/banner2.jpg, and images/banner3.jpg
 */

// Array to hold the image file names
let images = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
let currentImageIndex = 0;

// Add function to preload the images
function preloadImages() {
    // Create an array to store preloaded image objects
    let preloadedImages = [];
    
    // Loop through each image filename and preload it
    for (let i = 0; i < images.length; i++) {
        preloadedImages[i] = new Image();
        preloadedImages[i].src = 'images/' + images[i];
    }
    
    return preloadedImages;
}

// Add function to switch the image

function switchImage() {
    // Get the main image element
    let mainImage = document.querySelector('#main-image img');
    // Move to the next image in the array
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Update the src attribute to show the new image
    mainImage.src = 'images/' + images[currentImageIndex];
}

// This will run when the page is done loading
window.onload = function() {
    /* Complete this code to get the list/array of images to cycle through. Preload the images
        and then start the process of switching the image every 3 seconds.  */
    
    // Preload all images for smooth transitions
    preloadImages();
    
    // Start the image switching process - switch every 3 seconds (3000 milliseconds)
    setInterval(switchImage, 3000);
}