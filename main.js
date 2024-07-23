document.addEventListener('DOMContentLoaded', function() {
    // Select all images in the gallery
    const images = document.querySelectorAll('#gallery img');

    images.forEach((image, index) => {
        // Add focus event listener
        image.addEventListener('focus', function() {
            image.style.border = '2px solid blue';
            console.log(`Image ${index + 1} focused: ${image.alt}`);
        });

        // Add blur event listener
        image.addEventListener('blur', function() {
            image.style.border = '2px solid #ddd';
            console.log(`Image ${index + 1} blurred: ${image.alt}`);
        });

        // Add mouseover event listener
        image.addEventListener('mouseover', function() {
            image.style.opacity = '0.7';
            console.log(`Mouse over image ${index + 1}: ${image.alt}`);
        });

        // Add mouseout event listener
        image.addEventListener('mouseout', function() {
            image.style.opacity = '1';
            console.log(`Mouse out of image ${index + 1}: ${image.alt}`);
        });

        // Set tabindex attribute
        image.setAttribute('tabindex', '0');
    });

    // Confirm that the page is fully loaded
    window.addEventListener('load', function() {
        console.log('Page fully loaded');
    });
});