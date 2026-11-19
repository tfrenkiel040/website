---
layout: post
title: "AI agents: I changed my mind"
date: 2026-11-19
categories: [AI]
---

In June 2025, I wrote a post about [AI agents and accountability](/ai/2025/06/14/ai-agents-accountability.html). My argument was that agents might have agency, but they couldn't be held accountable. The person who deployed an agent would still be responsible for its work. And because of that, I thought it would take a while before agents became useful in companies.

I still think the person is responsible. But I was wrong about how useful agents could be while that remains true.

## When did my chatbot become an agent?

Back then, I saw a lot of startups building AI agents. One company I followed was Relay.app. In July this year, they announced they were shutting down, and the [product closed in September](https://relay.app/).

That's one example, not evidence that all agent companies are struggling. But it does say something about what I expected an agent to look like: a separate product that I would set up to do a specific job.

What happened for me was more gradual. The AI chatbot I was already using got more tools. It could create documents in Google Docs, get better at building software and web apps, and analyze our website data through the Funnel MCP, which gives it access to our Google Analytics data.

At some point, I noticed that I was telling colleagues on the web team things like "my agent wrote this" or "my agent says it's an easy fix." The developers on my team started talking about their agents too.

I can't point to the day I stopped using a chatbot and started using an agent. But somewhere along the way, the thing I was chatting with became something I could also ask to look things up, work with files, and do things.

## What my setup looks like

My starting point was something called funnel-copilot, built by my colleague Kim Frithiof. He presented it at a lunch-and-learn and shared starter files that others could use. I took those files, made changes, and gradually turned the setup into something that works for me.

The idea is based on Andrej Karpathy's [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): keep source material in files, and let an AI maintain a wiki that connects and summarizes what is in those sources.

My setup is a folder on my computer. The main parts look roughly like this:

```text
funnel-copilot/
├── CLAUDE.md       # How I want the agent to work
├── context/        # Documents, notes, and a wiki
├── weekly/         # Weekly plans and notes
└── skills/         # Instructions for recurring workflows
```

The `CLAUDE.md` file is an operating manual. It tells the agent what role I want it to play, how I like to work, where to find relevant information, and when to check with me before making changes.

The `context` folder gives it background for my work. It contains source documents and notes, as well as a wiki that brings information together across those files. The weekly folder is more immediate: what I'm working on, decisions, and open actions.

Then there are the skills. A skill is a set of instructions for a task I do repeatedly. My most-used one is `/today`. I run it every day to get a briefing that brings together my calendar, weekly notes, and relevant open work. I also have skills for reflecting at the end of the day and closing out a week.

Finally, there are the connections to other tools. These include Google Calendar, Notion, Slack, and the Funnel MCP. MCP stands for Model Context Protocol. In practice, it gives the agent a way to use an external tool or access information from it. For example, I can ask a question about our website data and have the agent use Funnel to analyze it.

You don't need to recreate all of this at once. A useful starting point could be a folder with a short document about your role and working preferences, a weekly note, and instructions for one task you repeat. Then add to it when you notice yourself explaining the same context or process again.

## An example from yesterday

Yesterday I asked my agent to review the FAQs on our pricing page. I expected feedback on the content, and it gave me that. But it also checked the FAQPage schema, the structured data that tells search engines what the questions and answers are.

It found an error: the templates were producing broken JSON, so crawlers ignored the whole block.

The agent asked if it should fix it. It then found the relevant code in our website repository, wrote a fix, and tested it. I opened a pull request, our web developer reviewed it, and we merged it.

The same bug also affected our integration pages. We found broken FAQ data on 56 of 86 `/connect/` pages and fixed those too. Both fixes are now live.

What I like about this example is that I didn't need to know there was a schema problem before asking for help. I asked for a review, the agent investigated beyond the visible copy, and together we took the finding through to a fix.

## So what about accountability?

I think my original concern still applies. The agent can't be accountable for a change to our website. I can, and so can the people who review and merge the work.

But I had imagined that this would prevent agents from being useful. I now think I was looking at the wrong model of how people would work with them.

In my experience, agents aren't doing most of their work fully autonomously. It's more like each person has one or a few agents helping them, a bit like having a small team of very smart and capable juniors. They can research, draft, analyze, and make changes. The employee still reviews the work and decides whether to share it, use the copy, or merge the code.

That doesn't mean the experience is perfect. Sometimes my agent is a bit too eager: I ask a question, and it starts doing things when I only wanted an answer. I suspect that may be specific to the model I use most, Opus 5.5, but I don't know.

Overall, though, I'm very happy with it. In my original post I said I wanted to start small and find a way to use agents while keeping accountability in mind. I think that's more or less what happened, even if the agent I ended up with looks different from the one I imagined.
