---
layout: post
title: "AI agents and accountability (I was wrong)"
date: 2026-09-11
categories: [AI]
---

Fifteen months ago I wrote that [the problem with AI agents is accountability](https://thomasfrenkiel.com/ai/2025/06/14/ai-agents-accountability.html). I said agents have agency but no accountability, that I hadn't seen a compelling example of one being genuinely useful, and that it would take a while before agents really took over work.

Looking back, I got about half of that right. The half I got wrong is the interesting half.

I was right that accountability sits with whoever deploys the agent. I was right that hallucination wasn't solved, and strictly speaking it still isn't. And I was right that it would take a while, but "a while" is a prediction that can't lose, so I'm not claiming any points for it.

What I got wrong is that I thought accountability was a blocker. And I was waiting for agents to turn up in the wrong place.

## What made me change my mind

I hadn't used ChatGPT much in a while. Then I read about their newest model, GPT-6 Astra, in Marie Haynes' newsletter, and decided to give it another go.

I gave it real work, the kind of things that actually helps me do my work.

First, I asked it to build an interactive business impact planner: pull data from Funnel and from Reef (our internal AI system, which I can reach in the browser, in Slack, or over MCP) and model whether launching a free trial would generate additional revenue. That means accounting for fewer hand raisers, conversion rates through each stage of the sales funnel, and average new deal size. It built the thing.

Then I gave it four more:

1. Benchmark at least 15 SaaS companies' free-trial positioning across their homepages and pricing pages.
2. Follow each trial CTA and document the resulting signup journey, the explanations, the limitations, with screenshots.
3. Write a decision document: what we need to decide, the relevant considerations, and a recommendation, with the goal of increasing total ICP leads.
4. Benchmark around 20 SaaS "book a demo" pages, looking at copy, layout, form friction, and how a human-led demo or POC could be differentiated from a self-serve trial.

And the outputs of all these tasks was really good. For example, ChatGPT went to different websites, made screenshots, took notes, and documented what patterns it found. 

So this goes to say, agents are useful. 

## Regarding accountability 

Funny thing is, I already had the answer in the old post. I wrote:

> Ultimately, the person who deployed the agent will always be responsible for the results of that agent.

Which is still true. I just decided that was a problem, and it isn't.

What I think I was picturing was some agent running around doing things on my behalf while I carry the blame for whatever it breaks. That would be bad. But that's not how it seems to be going. Instead, everyone has their own agents doing work for them. 

My Claude can get into our Notion, Miro, Funnel workspace and Slack, and it's mine. If it hands me something wrong and I pass it on without checking, that's my fault. So I just make sure to doublecheck everything it writes/creates before sharing further. 

## Maybe I was mostly wrong about what an agent is

In the old post I argued the difference between an agent and regular software is agency: an agent can decide things rather than follow if-else logic. I think that definition is fine. What I missed is that I was waiting for agents to arrive as a separate category of product, when instead the capability showed up inside the tools I was already using.

I never did try n8n, which I said I would. I didn't need to, because the thing I was waiting for turned up somewhere else. For me it came down to two things: MCP, which lets the model actually reach into the tools we already use, and much better web browsing. Claude can read our Notion and post in Slack. ChatGPT can open 20 competitor pages, take screenshots and put them in a report. As far as I know, neither was possible fifteen months ago.

That's what turned an LLM into an agent for me. And notice that neither has anything to do with the objection I raised in 2025. Nobody solved accountability first, and nobody solved hallucination first. My objection just stopped mattering once the model could open a browser and get into our Notion.

I've been using MCPs heavily for about six months now, so if I had to date my own shift, that's it, rather than any particular model release. Astra is what made me look again. Tool access is why it worked.

## What about hallucination?

In the old post I made a point of it: 900-odd days after ChatGPT launched, still no solution to hallucination.

I don't run into it anymore in this kind of work. But I want to be careful, because "I don't notice it" and "it's solved" are not the same claim. Astra's system card reports a 4.2% hallucination rate on OpenAI's own benchmark, and [Artificial Analysis](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra) still measured 51% on their AA-Omniscience benchmark at max effort, which is built out of questions designed to provoke it. So it's better, clearly. Not gone.

I think the real reason it stopped bothering me is the type of work I hand over. If it benchmarks 15 pricing pages and gets one wrong, I'll catch it by opening the page. If the revenue model produces a number that's off, the arithmetic is right there to check. Being wrong is cheap to catch, and I check, because I'm the one accountable for it.

Which brings me to the framing that actually works for me now: this is work I would give an intern or a junior person on the team. You'd review their work too. That's just how delegating works.

## The guy with 20 agents

I ended the old post with a jab:

> (Fun fact: the one person I follow on LinkedIn who claims to have 20 AI agents 'working for him', is the founder of an AI Agent company.)

He quit not long ago. They closed shop.

I don't know why, and I'd be careful about drawing a neat lesson from one company. But my guess is that the agentic capabilities ended up inside the big AI companies' own products, and he couldn't find a way to win against that.

So he wasn't wrong that agents would matter. He was wrong, like I was, about where they would live.

Curious whether others have had the same shift, and at what point. And if you're still sceptical: what would change your mind?