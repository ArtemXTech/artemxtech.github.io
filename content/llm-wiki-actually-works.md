---
title: "I Replaced Karpathy's LLM Wiki with Something That Actually Works"
date: 2026-04-19
tags: [newsletter, claude-code, obsidian, notebooklm]
socialImage: assets/dalio-5-step.jpg
---

**Same sources, same goal. The wiki burned 44,000 tokens per question. NotebookLM answered 10 in a minute.**

---

The top comment on the biggest LLM wiki video says it's "largely worthless for most people."

I wanted to know if he is right. ⌕ My goal is to improve my decision making. I really love Ray Dalio. I have his book called Principles. So I took the same sources, the same goal, then built the wiki and my system side by side in real time.

![Dalio's 5-step process. Diagram via jareddees.com.](assets/dalio-5-step.jpg)
*Dalio's 5-step process. Diagram via jareddees.com.*

Here's what happened.

## Karpathy's wiki architecture

Karpathy's wiki has three parts:

1. Your raw sources: YouTube transcripts, articles, PDFs.
2. The wiki itself: Claude reads each source, writes a summary, and pulls out people and concepts into pages.
3. A schema file that tells Claude how the wiki is organized, so it knows where to look when you ask a question.

With those index files and entity pages, you can query the wiki easily and navigate it on a graph.

![Karpathy's wiki architecture from the gist.](assets/ascii-wiki-architecture.png)
*Karpathy's wiki architecture from the gist.*

## Where the wiki breaks

I ingested 19 sources into the wiki in parallel. It took me about 20 minutes. Then I asked 10 questions against it.

Claude was reading all the transcripts. The index was not helpful. Claude was reading the full files to answer one question. 44,000 tokens per question. Multiply by 10 for 10 questions.

My limits were blowing up the roof. The talking cost is just blowing.

Compare this to NotebookLM. I added 50 sources because ingestion was instant. NotebookLM ingestion is just embedding. They use state-of-the-art embedding models, like the ones Google has. You're not doing this ingestion step in any way. You're right away ready to ask questions. You don't build this entire wiki index.

Same 10 questions. Approximately a minute per reply. All 10 answers with citations back to the transcripts.

## So what?

We have all this knowledge and then so what? You created a wiki, you have the summaries, you have this index. What's happening next? Did you do that?

![We have all this knowledge and then so what?](assets/ascii-wiki-stops.png)
*We have all this knowledge and then so what?*

The wiki has no integration with the real world. You can ask a question about it, but that's it.

## Here is what I do instead

My goal is to improve my decision making. I ask questions about it. I extract the concepts. Then I improve my skills.

![Here is what I do instead.](assets/ascii-what-i-do-instead.png)
*Here is what I do instead.*

Three steps:

1. ⚡ Create skills out of this knowledge.
2. ↻ Integrate those skills into your daily routines.
3. ▸ Run those new skills within the routines.

A great example is a morning routine, where you integrate the decision-making framework into how you distribute your time.

I built a decision-making skill based on Dalio's 5-step process:

1. ◎ Know your goals.
2. ⚠ Don't tolerate problems.
3. ⌕ Diagnose the root causes.
4. ◈ Design a plan.
5. ▸ Execute the plan.

I added a daily template with reflection prompts, and a weekly review section that asks: "Are the problems repeated this week? Are they the same type of problems we had from last week?"

![From Dalio videos to my system.](assets/ascii-dalio-pipeline.png)
*From Dalio videos to my system.*

Whenever I need to make a decision, the skill is right there. I apply this knowledge instead of just storing it.

## More notebooks

I've done more testing and created more notebooks. Here are some I've collected.

![A few of my recent notebooks.](assets/notebooklm-notebooks.png)
*A few of my recent notebooks.*

One example: I pulled the last 2 weeks of videos about Hermes Agent, OpenClaw, and Claude Code channels into one notebook. 21 sources. I asked many questions and got great answers grounded in the YouTube videos and what people are actually using.

This is what it really excels at. I can be in the know without being biased to a single video from YouTube. Watching one video gives me one person's opinion. Pulling 21 videos into a notebook gets me up to speed and decreases that feeling of missing out. It helped me not lose my mind.

Here is an example of a question I asked: "Why did Anthropic ban subscriptions?" The answers were great, grounded across the videos.

![The notebook answering my question across 21 video sources.](assets/anthropic-limits.png)
*The notebook answering my question across 21 video sources.*

If I'd gone the wiki route, Claude would have to go read all the transcripts every time I ask a question. It's just too long. You can't wait for that. By outsourcing the synthesis work to NotebookLM, you spend a fraction of the tokens.

And the era of free tokens has ended. I can feel it. In January, Anthropic's tokens were unlimited, it was extremely hard to hit the weekly limit. Right now it's tightening. The LLM wiki approach is very costly and very slow.

## Where wiki really shines

I believe wiki really shines where you need to go very, very deep. PhD-level research. Something that's going to sustain you long term. You need high accuracy. You can afford 30 minutes to ingest one source.

Team wikis, I believe, would be a great use case. Competitive analysis is definitely a better fit. Claude can go read all those files and provide a better response, because it has access to the sources.

For personal knowledge, where I want to learn about a topic, I feel it's a bit overkill. I'm not going to spend an hour to set up a wiki for each topic. I can only spend so much talking for a day. Right now tokens are subsidized, you don't pay for them as much. If you try to use it through API, you're definitely not going to be using LLM wiki. Just no way.

NotebookLM, you're not doing maintenance, you're not doing processing. Sources stay raw. You ask a question and you get the answer.

![Side by side.](assets/ascii-comparison.png)
*Side by side.*

## Try it

Open NotebookLM. Ask Claude to find the videos and articles for your topic. It will add them to the notebook. Then ask your questions and get the answers back.

I built a NotebookLM skill that does this in one command: [notebooklm-skill-artemzhutov.netlify.app](https://notebooklm-skill-artemzhutov.netlify.app/)

## One more thing

Claude Code x Obsidian Lab Cohort 3 starts May 5.

Five weeks building a personal operating system like the one in this newsletter. We turn sources into skills, then integrate those skills into your daily routines so they help you do your work.

We just wrapped Cohort 2. You are getting the combined learning from 40 people who built their personal operating system in the first two cohorts.

Last cohort F. came in as an ADHD non-programmer and shipped 400 commits in his first week. He told me the tools supplemented his weaknesses and he got years of work done in a week. Kind of mind-blowing.

Cohort 3 is capped at 12 seats. On Wednesday, April 22, the price goes from $790 to $980.

[lab.artemzhutov.com](https://lab.artemzhutov.com)

---

If you try NotebookLM after reading this, drop me a message with your thoughts.

See you next week.
