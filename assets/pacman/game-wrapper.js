// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startContainer = document.getElementById('start-container');
    const root = document.getElementById('root');

    // Function to start the game
    function startGame() {
        // Hide the start button
        startContainer.style.display = 'none';
        
        // Show the game with a fade-in effect
        root.classList.add('visible');
        
        // Dispatch a custom event that the game can listen for
        window.dispatchEvent(new CustomEvent('startPacmanGame'));
    }

    // Add click event listener to the start button
    startButton.addEventListener('click', startGame);
}); 