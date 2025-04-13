---
layout: default
title: "Cat Food Calculator v2"
permalink: /catfood-calculator-v2/
---

<div id="cat-food-calculator-wrapper">
    <iframe src="/assets/catfoodcalc2/index.html" style="width: 100%; height: 100vh; border: none;"></iframe>
</div>

<style>
    /* Hide navigation for this page only */
    header.w-100.pa3.ph5-ns {
        display: none !important;
    }
    
    .top-bar {
        display: none !important;
    }
    
    nav {
        display: none !important;
    }
    
    .ham-menu {
        display: none !important;
    }
    
    #off-screen-menu {
        display: none !important;
    }
    
    footer {
        display: none !important;
    }
    
    body, html {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    
    main {
        width: 100%;
        max-width: 100%;
        padding: 0 !important;
        margin: 0 auto !important;
        display: flex;
        justify-content: center;
    }
    
    #cat-food-calculator-wrapper {
        width: 100%;
        max-width: 1000px;
        height: 100vh;
        margin: 0 auto;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    
    iframe {
        width: 100%;
        height: 100vh;
        border: none;
        margin: 0 auto;
    }
    
    @media (max-width: 768px) {
        #cat-food-calculator-wrapper {
            width: 100%;
        }
    }
</style> 