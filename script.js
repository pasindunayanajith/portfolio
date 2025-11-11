document.addEventListener('DOMContentLoaded', () => {
    const profilePhoto = document.getElementById('profile-photo');
    
    // **IMPORTANT:** Replace these with the actual paths to your images
    const engineerPhotoPath = 'engineer_photo.jpg';
    const violinPhotoPath = 'violin_photo.jpg';

    // Function to swap the photo and trigger a small animation
    function swapPhoto() {
        // Get the current state (engineer or violin)
        const currentState = profilePhoto.getAttribute('data-photo-state');

        // Apply a visual transformation (like a quick fade/scale)
        profilePhoto.style.transform = 'scale(0.9)';
        profilePhoto.style.opacity = '0.5';

        // Wait briefly for the animation to start, then swap the source
        setTimeout(() => {
            if (currentState === 'engineer') {
                profilePhoto.src = violinPhotoPath;
                profilePhoto.setAttribute('data-photo-state', 'violin');
                profilePhoto.alt = 'Pasindu Hathurusinghe - Violin Player';
            } else {
                profilePhoto.src = engineerPhotoPath;
                profilePhoto.setAttribute('data-photo-state', 'engineer');
                profilePhoto.alt = 'Pasindu Hathurusinghe - Software Engineer';
            }

            // Restore the visual transformation
            profilePhoto.style.transform = 'scale(1)';
            profilePhoto.style.opacity = '1';
        }, 500); // Swap after 500ms 
    }

    // Set the automatic swap interval (e.g., every 5 seconds)
    // You can adjust the 5000ms value (5 seconds) as needed.
    setInterval(swapPhoto, 5000); 

    // Optional: Allow manual swap on click
    profilePhoto.addEventListener('click', swapPhoto);
});
