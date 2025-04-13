---
layout: default
title: "Cat Food Calculator"
permalink: /catfood-calculator/
---

<script>
  // 301 redirect to the new calculator
  window.location.replace("/catfood-calculator-v2/");
</script>

<div class="redirect-message" style="text-align: center; padding: 50px 20px;">
  <h1>Redirecting to Cat Food Calculator v2</h1>
  <p>The Cat Food Calculator has been updated. If you are not redirected automatically, <a href="/catfood-calculator-v2/">click here</a>.</p>
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