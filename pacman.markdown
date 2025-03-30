---
layout: default
title: "Pacman"
permalink: /pacman/
---

<div class="pacman-container">
    <h1>Pacman Game</h1>
    <iframe src="/assets/pacman/index.html" style="width: 100%; height: 600px; border: none;"></iframe>
    
    <div class="game-instructions">
        <h2>How to Play</h2>
        <p>Use the arrow keys (←↑↓→) to move Pacman around the maze.</p>
        <p>Collect all the dots to win! Watch out for the ghosts - they'll end your game if they catch you.</p>
        <p>After 20 seconds, a special power-up will appear! Collect it to become temporarily invincible and able to eat the ghosts for extra points.</p>
    </div>
</div>

<style>
.pacman-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
    text-align: center;
}

.game-instructions {
    margin-top: 1rem;
    padding: 1.5rem;
    background: #f5f5f5;
    border-radius: 8px;
    text-align: left;
}

.game-instructions h2 {
    color: #1a472a;  /* Your site's green color */
    margin-bottom: 1rem;
}

.game-instructions p {
    margin-bottom: 0.75rem;
    line-height: 1.5;
}
</style> 