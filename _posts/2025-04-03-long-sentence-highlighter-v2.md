---
layout: post
title: "Long Sentence Highlighter 2.0"
date: 2025-04-03
categories: [Projects]
---

In 2023, ChatGPT was still relatively new, and people had just started experimenting with using it to help them code.

I don’t exactly remember who inspired me, but I decided to try creating a Google Chrome extension. I simply asked ChatGPT how to do it and used Sublime Text to build the files.

The extension I made was a very simple tool. It highlights all the sentences on a webpage that have too many words, where too many is defined by the user.

I think this kind of tool can be useful for people who work in corporate communications. In large organizations like McDonald’s, for example, many employees might be younger or not highly literate, and long sentences can make important information harder to understand.

Even more importantly, governments often need to communicate complex or critical information. Whether it’s a local municipality, the tax office, or another public service, the information they share matters, and it should be understandable to as many people as possible.

And research shows that longer sentences are a lot harder to comprehend than short sentences.

With this Chrome extension, a communications manager or web editor can go to their own website and check whether key pages contain very long sentences. If they do, they can revise the content to make it easier to read.

That was two years ago, and honestly, I sort of forgot about the project until one of my colleagues, Bruno, brought it up during a conversation about AI in the office.

And I realised that the that I created in 2023 wasn't very good, even though the idea was solid. The original version had onr major flaw: it would never give the right word count for sentences that contained links to other pages. The HTML link tags would confuse the word counting algorithm, making the tool unreliable on many pages. And I also knew that with Cursor AI, this would be easier than ever to fix.

So this morning, I found the original files, opened a new project in Cursor, and worked on it for about an hour using maybe ten prompts. In the evening I was able to upload a much-improved version to the Chrome Web Store.

I still have some ideas to further improve this chrome extension, but I am happy that I was able to improve it today while taking care of my five month old daughter (everything was basically done during her naps. 

If you wanna try it, you can add the long sentence highlighter to Google Chrome [here](https://chromewebstore.google.com/detail/fgklfjfnajfdfiefdphepgejkgmlplcc). (As of today, April 3 2025, I am still waiting for the 2.0 version to be accepted into the Chrome web store. So now you will still find the original version there.)