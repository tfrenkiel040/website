---
layout: post
title: "How I use AI agents as a Web PM"
date: 2026-11-19
categories: [AI]
permalink: /ai/2026/11/19/how-i-use-ai-agents-as-a-web-pm.html
redirect_from:
  - /ai/2026/11/19/ai-agents-i-changed-my-mind.html
---

Recently, I asked my agent to review the FAQs on our pricing page. I expected feedback on the content, and it gave me that. But it also checked the FAQPage schema, the structured data that tells search engines what the questions and answers are.

It found an error: the templates were producing broken JSON, so crawlers ignored the whole block.

The agent asked if it should fix it. It found the relevant code in our website repository, wrote a fix, and tested it. I opened a pull request, our web developer reviewed it, and we merged it. We also found the same bug on 56 of 86 `/connect/` pages and fixed those too. Both fixes are now live. All of this took less than an hour.

Before, I would have created a card on our Notion board and asked our developer to look into it. This time I could do it myself, with the agent's help and a review from our developer. I'm not a developer, and I still got a fix shipped across the site.

## When did my chatbot become an agent?

In 2025, I saw a lot of startups building AI agents, and I was [skeptical](/ai/2025/06/14/ai-agents-accountability.html) about the promise that everything could be fully automated. One company I followed was Relay.app. In July this year, they announced they were shutting down, and the product closed in September.

What I didn't expect was how useful agents would become once AI companies gave their existing chatbots more tools.

For me, it happened gradually. The chatbot I was already using could suddenly create Google Docs, build software and web apps, and analyze our website data through the Funnel MCP, which gives it access to our Google Analytics data.

At some point, I noticed that I was telling colleagues on the web team things like "my agent wrote this" or "my agent says it's an easy fix." People on my team started talking about their agents too.

I can't point to the day I stopped using a chatbot and started using an agent. But somewhere along the way, the thing I was chatting with became something I could also ask to look things up, work with files, and make changes.

## What my setup looks like

My starting point was something called funnel-copilot, built by my colleague Kim Frithiof. He presented it at a lunch-and-learn and shared starter files that others could use. I took those files, made changes, and gradually turned the setup into something that works for me.

I work in Claude Code throughout the day. It's the interface I use to talk to my agent, work with files, and use the tools connected to my setup.

The idea is based on Andrej Karpathy's [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): keep source material in files, and let an AI maintain a wiki that connects and summarizes what is in those sources.

My setup is a folder on my computer. The main parts look roughly like this:

```text
funnel-copilot/
├── CLAUDE.md
├── context/
├── weekly/
└── skills/
```

The `CLAUDE.md` file is an operating manual. It tells the agent what role I want it to play, how I like to work, where to find relevant information, and when to check with me before making changes.

The `context` folder contains source documents and notes, as well as a wiki that brings information together across those files. The weekly folder holds my plans, decisions, and open actions. Together, they give the agent context about my priorities, my team, and our positioning. When I ask it to help with something, I don't have to explain all of that again.

The context also keeps itself up to date. When I give the agent a new company strategy or priorities document, or a transcript from a meeting, it knows to update the relevant wiki files without me having to ask. The source documents stay in the folder, and the wiki brings together what the agent has learned from them. The next time I ask a question, that new information is already part of the context it can use.

Then there are the skills. A skill is a set of instructions for a task I do repeatedly. My most-used one is `/today`. I run it every day to get a briefing that brings together my calendar, weekly notes, and relevant open work. I also have a skill for writing internal updates for our website-updates Slack channel, and another for making code changes to the website, which is how I sometimes make pull requests myself.

I also have scheduled tasks in Claude. Every week, one task checks Slack for product updates that have shipped. It uses a skill to tell me which updates are relevant to my work and whether there are pages on the website I should update.

Finally, there are the connections to other tools. These include Google Calendar, Notion, Slack, and the Funnel MCP. For example, I can ask a question about our website data and have the agent use Funnel to analyze it.

You don't need to recreate all of this at once. A useful starting point could be a folder with a short document about your role and working preferences, a weekly note, and instructions for one task you repeat. Then add to it when you notice yourself explaining the same context or process again.

## So what about accountability?

An agent can't be accountable for a change to our website. I can, and so can the people who review and merge the work.

In my experience, agents aren't doing most of their work fully autonomously. It's more like each person has one or a few agents helping them, a bit like having a small team of very smart and capable juniors. They can research, draft, analyze, and make changes. The employee still reviews the work and decides whether to share it, use the copy, or merge the code.

Sometimes my agent is a bit too eager: I ask a question, and it starts doing things when I only wanted an answer.

I'm very happy with the setup. My agent knows the context of my work, helps me do things I couldn't do on my own, and leaves me in charge of the result.

How are you using agents in your work? And what can you do now that you couldn't do before? I'd love to hear about it. Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/thomasfrenkiel/).
