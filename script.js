const pumpkinContainer = document.querySelector('.pumpkin-container');
const ghost = document.getElementById('ghost');


pumpkinContainer.addEventListener('click', () => {
    ghost.style.display = 'block';

    //display time
    setTimeout(() => {
        ghost.style.display = 'none';
    }, 5000); 
});

// Add a click event listener to the document
document.addEventListener('click', (event) => {
    //click coordinates
    const x = event.clientX;
    const y = event.clientY;
  
    //ghost on click  
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
    
    // Show ghost
    ghost.style.display = 'block';
  
    // Restart the animation by removing and re-adding the class
    ghost.classList.remove('ghost-rise-animation');
    void ghost.offsetWidth; 
    ghost.classList.add('ghost-rise-animation');
  
    // Hide the ghost after animation finishes
    setTimeout(() => {
        ghost.style.display = 'none';
    }, 3000); 
});