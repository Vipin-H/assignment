// Array of random movie image URLs
const images = [
    'https://via.placeholder.com/600x400?text=Movie+1',
    'https://via.placeholder.com/600x400?text=Movie+2',
    'https://via.placeholder.com/600x400?text=Movie+3',
    'https://via.placeholder.com/600x400?text=Movie+4',
    'https://via.placeholder.com/600x400?text=Movie+5'
];

// Select the image element where the slideshow will display
const slideshowElement = document.getElementById('slideshow');

// Index to keep track of the current image
let currentIndex = 0;

// Function to update the slideshow image
function updateSlideshow() {
    slideshowElement.src = images[currentIndex];
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Reset to the first image after the last one
    }
}

// Start the slideshow by setting the first image and using setInterval
updateSlideshow(); // Set the first image immediately
setInterval(updateSlideshow, 2000); // Change image every 2000ms (2 seconds)
