---
layout: page
title: "Long Sentence Highlighter"
permalink: /long-sentence-highlighter/
---


<div class="extension-header">
  <img src="/assets/images/LSH1.jpg" alt="Long Sentence Highlighter Icon" class="extension-icon">
  <div>
    <a href="https://chromewebstore.google.com/detail/fgklfjfnajfdfiefdphepgejkgmlplcc" class="install-button">Install from Chrome Web Store</a>
    <p><em>Version 2.0 released April 3, 2025</em></p>
  </div>
</div>

## Overview

Long Sentence Highlighter is a Chrome extension that helps improve readability by highlighting overly long sentences on any webpage. It's perfect for writers, editors, content creators, and anyone who wants to create more digestible content.

### Key Features

- **Automatic Detection**: Instantly highlights sentences exceeding your specified word count
- **Customizable Thresholds**: Set your preferred word count threshold
- **Toggle Functionality**: Easily turn highlighting on or off
- **Zero Dependencies**: Lightweight performance with no external libraries
- **Privacy-Focused**: No data collection, completely client-side processing

## Installation Instructions

### Chrome Web Store (Recommended)

1. Visit the [Long Sentence Highlighter page](https://chromewebstore.google.com/detail/fgklfjfnajfdfiefdphepgejkgmlplcc) on the Chrome Web Store
2. Click "Add to Chrome"
3. Confirm the installation when prompted

### Manual Installation (Developer Mode)

1. Download the extension files from [GitHub](https://github.com/your-username/long-sentence-highlighter)
2. Go to `chrome://extensions/` in your Chrome browser
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the downloaded extension folder

## Usage Guide

### Getting Started

1. After installation, you'll see the Long Sentence Highlighter icon in your browser's extension toolbar
2. Click the icon to open the extension popup

<div class="screenshot-container">
  <img src="/assets/images/LSH2.jpg" alt="Extension Popup Interface" class="screenshot">
  <img src="/assets/images/LSH3.jpg" alt="Example of Highlighted Sentences" class="screenshot">
</div>



## Privacy Information

Long Sentence Highlighter is designed with privacy as a priority:

- **No Data Collection**: The extension does not collect, store, or transmit any user data
- **Local Processing**: All text analysis happens entirely within your browser
- **No External Communication**: The extension never communicates with external servers
- **No Permissions**: Only standard extension permissions are requested, with no access to browsing history or personal data

## Version History

### Version 2.0 (April 3, 2025)
- Better UI
- Added the 'Remove highlights' button
- Fixed bug where sentences that included links would not be counted correctly.
- Improved highlight color

### Version 1.0 (April 2023)
- Initial release
- Basic sentence highlighting functionality
- Adjustable threshold setting

## Contact Information

For support, feature requests, or bug reports, please reach out to me on LinkedIn:

<a href="https://www.linkedin.com/in/thomasfrenkiel/" class="contact-link">Thomas Frenkiel on LinkedIn</a>


<style>
.extension-header {
  display: flex;
  align-items: center;
  margin: 2rem 0;
}

.extension-icon {
  width: 80px;
  height: 80px;
  margin-right: 2rem;
}

.install-button {
  display: inline-block;
  background-color: #4285F4;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.install-button:hover {
  background-color: #3367D6;
}

.screenshot {
  max-width: 48%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0.5rem 1%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: inline-block;
}

.screenshot-container {
  margin: 2rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: bold;
}
</style> 