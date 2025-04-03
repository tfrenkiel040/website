---
layout: page
title: "Long Sentence Highlighter"
permalink: /long-sentence-highlighter/
---

# Long Sentence Highlighter Chrome Extension

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

<img src="/assets/images/LSH2.jpg" alt="Extension Popup Interface" class="screenshot">

### Setting Your Threshold

1. In the popup, adjust the slider to set your desired word count threshold
2. Default setting is 25 words
3. Changes take effect immediately when you visit or refresh a webpage

### Toggling Highlighting

1. Use the toggle switch in the popup to turn highlighting on or off
2. When off, no sentences will be highlighted, regardless of length
3. Your preference is saved between browser sessions

### Viewing Highlighted Sentences

When active, sentences exceeding your threshold will be highlighted in yellow:

<img src="/assets/images/LSH3.jpg" alt="Example of Highlighted Sentences" class="screenshot">

## FAQ

### How does the extension define a "sentence"?

The extension identifies sentences by common punctuation patterns (periods, question marks, exclamation points) while accounting for common exceptions like abbreviations and decimal numbers.

### Will this work on all websites?

The extension works on most standard websites. However, complex web applications, PDFs, or pages with unusual text formatting might have limited compatibility.

### Does this slow down my browsing?

No, the extension is designed to be lightweight and efficient. It processes text locally without sending any data to external servers.

### Can I use this for languages other than English?

Yes, the extension works with most Latin-based languages. Support for other language families may vary.

### What happens if I set the threshold too low?

Setting a very low threshold (e.g., 5-10 words) may result in most sentences being highlighted, reducing the utility of the tool.

## Privacy Information

Long Sentence Highlighter is designed with privacy as a priority:

- **No Data Collection**: The extension does not collect, store, or transmit any user data
- **Local Processing**: All text analysis happens entirely within your browser
- **No External Communication**: The extension never communicates with external servers
- **No Permissions**: Only standard extension permissions are requested, with no access to browsing history or personal data

## Version History

### Version 2.0 (April 3, 2025)
- Completely redesigned interface
- Improved sentence detection algorithm
- Added customizable highlight colors
- Fixed compatibility issues with dynamic websites
- Reduced CPU and memory usage

### Version 1.2 (September 2023)
- Fixed bug affecting certain punctuation patterns
- Improved performance on text-heavy pages

### Version 1.1 (June 2023)
- Added toggle functionality
- Fixed memory leak issues
- Improved extension icon

### Version 1.0 (April 2023)
- Initial release
- Basic sentence highlighting functionality
- Adjustable threshold setting

## Contact Information

For support, feature requests, or bug reports, please reach out to me on LinkedIn:

<a href="https://www.linkedin.com/in/thomasfrenkiel/" class="contact-link">Thomas Frenkiel on LinkedIn</a>

LinkedIn messages are the preferred method of contact for extension-related inquiries.

## Acknowledgements

- Original concept inspired by readability research by the Nielsen Norman Group
- Icon design elements from [Feather Icons](https://feathericons.com/)
- Special thanks to early testers who provided valuable feedback

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
  max-width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 1.5rem 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.contact-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: bold;
}
</style> 