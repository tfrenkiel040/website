---
layout: post
title: "Side project: Cat Food Calculator"
date: 2025-04-17
categories: [Projects]
---

Over the past few weeks, I’ve been working on a web app that calculates how much food your adult cat needs per day. It's based on scientifically accepted nutrition formulas and helps owners get accurate feeding recommendations tailored to the food they’re giving their cat.

I'm not a vet or a nutritionist, but I how important it is to keep cats at a healthy weight. My own cat, Otis, has a tendency to overeat. 
And it's not easy for owners to know how much food to give. Cat food brands often recommend broad ranges — and it’s in their interest to suggest larger quantities.

So I built the [Cat Food Calculator](/catfood-calculator-v2/).

---

## What It Does

Users input:

- Their cat’s weight, age category, and neuter status
- Their cat’s activity level and weight condition (ideal, underweight, or overweight)
- The nutritional values of the foods they feed (moisture, protein, fat, etc.)

The tool calculates:

- The cat’s daily energy needs (kcal/day)
- The energy density of each food, using Modified Atwater factors
- Recommended grams per day for each food

It’s all based on FEDIAF nutritional guidelines and standard pet nutrition formulas.

👉 Try it here: [thomasfrenkiel.com/catfood-calculator-v2](/catfood-calculator-v2/)

---

## How I Built It

I built the app using Cursor and ChatGPT — two tools that made the development process much faster and more enjoyable.

One challenge was making the tool flexible enough to handle both wet and dry food inputs, with customizable wet/dry ratios. Another was internationalization — users in the US often think in pounds, not kilograms — so I added a unit toggle.

---

## What I Learned

- A lot more about feline nutrition than I expected (and it turns out I could feed Otis a bit more than I was doing).
- How powerful it is to ship early and collect feedback — even just doing one user interview was incredibly valuable.
- That integrating a custom-built tool into my personal website is easier than I thought.

---

## What's Next

Right now the tool is still in beta, but I’m actively improving it. I've posted it in a few Reddit communities, collected some early feedback, and cleaned up the mobile experience.

My main concern is that I haven't been able to get detailed feedback from a veterinarian yet — so that’s a priority for the next phase.

Other things I'd like to add or improve:

- A native **Android/iOS app version**
- Make it easier for users to retrieve the **analytical details** of their cat food, maybe using AI or scraping food databases

---

If you’re a cat owner (or just curious), I’d love for you to give the calculator a try and let me know what you think! 😺
