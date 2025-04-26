---
layout: post
title: "How I built a cat food calculator (and why)"
date: 2025-04-17
categories: [Projects]
---

A few weeks ago, I launched a web app that calculates how much food your adult cat needs per day. It's based on scientifically accepted nutrition formulas, and helps owners get accurate feeding recommendations — especially when they combine wet and dry food.

I'm not a vet or a nutritionist. I'm just a cat person who knows that it's important for cats to not become overweight. My own cat Otis has a tendency to eat too much too. But it's not easy for people to understand how much food to give their cat.

So I built the [Cat Food Calculator](/catfood-calculator-v2/).

## What It Does

The user inputs:

- Their cat's weight, age category, and neuter status
- Their activity level and weight condition (ideal, underweight, or overweight)
- The nutritional values of the foods they give (moisture, protein, fat, etc.)

It calculates:

- The cat's daily energy needs (kcal/day)
- The energy density of each food using Modified Atwater factors
- Recommended grams per day for each food

Everything is based on FEDIAF nutritional guidelines and standard pet nutrition formulas.

You can try it here:
👉 [thomasfrenkiel.com/catfood-calculator-v2](/catfood-calculator-v2/)

## How I Built It

I made the whole thing using Cursor and ChatGPT.

One challenge was making the tool flexible enough to handle both wet and dry food inputs, with customizable wet/dry ratios. Another was internationalization — users in the US think in pounds, not kilograms — so I added a unit toggle.

## What I Learned

- A lot more about feline nutrition than I expected. Turns out I could feed Otis a bit more then I was doing:) 
- How powerful it is to ship early and collect feedback. Even just doing 1 user interview was super valuable
- That it's pretty easy to integrate a tool like that into my website.

## What's Next

Right now it's still in beta, but I'm actively improving it. I've posted it in a few Reddit communities, collected some feedback, and cleaned up the mobile experience. 
My main concern is that I haven't been able to get feedback from a vet yet, so I will continue to try getting an interview with a vetenarian.

And there are some things I'd like to add/improve:

- An Android/iOS app version 
- Make it easier for users to get the analytical details of the food they give, maybe using AI