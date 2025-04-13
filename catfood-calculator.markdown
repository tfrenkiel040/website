---
layout: default
title: "Cat Food Calculator"
permalink: /catfood-calculator/
---

<div id="cat-food-calculator-wrapper" class="mw7 center ph3 f4 lh-copy">
    <iframe src="/assets/catfoodcalc/index.html" style="width: 100%; height: 100vh; border: none;" scrolling="no"></iframe>
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
    
    body, html {
        overflow: hidden;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    
    main {
        height: 100vh;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 !important;
    }
    
    #cat-food-calculator-wrapper {
        max-width: 100%;
        padding: 0;
        margin: 0;
        height: 100vh;
    }
    
    iframe {
        min-height: 100vh;
        width: 100%;
        border: none;
        overflow: hidden;
    }
    
    @media (max-width: 768px) {
        iframe {
            min-height: 100vh;
        }
    }
</style> 