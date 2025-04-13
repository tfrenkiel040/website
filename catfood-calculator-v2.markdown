---
layout: default
title: "Cat Food Calculator v2"
permalink: /catfood-calculator-v2/
---

<div id="cat-food-calculator-wrapper" class="mw7 center ph3 f4 lh-copy">
    <iframe src="/assets/catfoodcalc2/index.html" style="width: 100%; height: 800px; border: none;"></iframe>
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
    
    #cat-food-calculator-wrapper {
        max-width: 100%;
        padding: 0;
        margin-top: 0; /* Remove top margin since nav is gone */
    }
    
    iframe {
        min-height: 800px;
        width: 100%;
        border: none;
        overflow: hidden;
    }
    
    @media (max-width: 768px) {
        iframe {
            min-height: 1000px;
        }
    }
</style> 