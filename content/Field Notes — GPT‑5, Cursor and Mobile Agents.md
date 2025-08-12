---
title: Field Notes — GPT‑5, Cursor and Mobile Agents
tags: [gpt-5, cursor, mobile-agents, obsidian, weekly-review]
date: 2025-08-11
socialImage: screenshot_2_cursor-agent.png
---

This week felt like February when everyone started talking about DeepSeek. A lot of hype around GPT‑5. However, I did my tests and found some valuable pieces.
***

I stress‑tested how I actually work: using **Cursor's semantic search** for weekly reviews, steering **GPT‑5** through large docs, and running **agents from my phone**.

What worked (in short):

*   **Weekly reviews**: Cursor's semantic search + daily journaling = effortless recall and better decisions. This feels like a running a deep research on my own notes and thoughts.
    
*   **Deep dives**: GPT‑5 handles big docs with high steerability and low hand‑holding.
    
*   **Mobile agents**: Talk to your notes or vibe code right from your phone. Anywhere.

---

## On Weekly Reviews

**Cursor's semantic search** is built to help an agent find relevant parts of a codebase—but it also **works great on personal notes**. Paired with consistent journaling, it **makes weekly reviews easy**: On Sunday I open a full‑screen chat in Cursor and ask what actually happened last week—what my observations were, what I tried, which experiments I ran, and what changed because of them. I can also ask to reference the specific files where this information is taken. This is all grounded in my own notes; Having this **context in front of m**e what I was doing the last week, I can **make a better decisions** on what to do next.
![Weekly review in Cursor with GPT-5](screenshot_1_cursor-weekly-review.png)_Weekly review in Cursor with GPT-5_

Here is the prompt I used (model `gpt-5-high`):

```text
    Could you please look at my journal entries over the past week? 
    What was going on? Perform very deep semantic searches. 
    I want to focus on understanding what the main points were. 
    What are my observations? What did I try? What experiments did I do? 
    Could you please prepare a detailed outline? Very detailed. 
    Take as much time and as many searches as you need.
    Use semantic searches and deeply analyze my obsidian vault. 
    mainly journals, observations, experiments
```
I also use it to generate newsletter ideas. I start from a blank page, set the intent for what I want to convey, and then augment with semantic search across my notes.

GPT‑5‑high makes a noticeable difference. It feels like running deep research over my journals and pulling out the high‑signal pieces with precise citations. Very powerful. Credit to the Cursor team—the recent optimizations make this genuinely useful.

---

## On GPT‑5 in Cursor

Cursor gave a free week of GPT‑5 and I went hard on it. So far I've spent around $70 in API credits elsewhere and tried a lot: building dashboards, outlining technical specifications for projects, generating video ideas, and running deep research on how to do specific tasks.

**The model is very agentic**. Feeding larger documentation to GPT‑5 and asking for an architecture/plan worked better than I expected. **It follows links, keeps context straight**, and **doesn't skip details**. I've been using this to build dashboards with the new **Obsidian Bases** plugin by referencing documentation from GitHub. I added docs for all of the packages which I commonly use and this greatly improved the speed with which you start developing and trying and building different prototypes.

You ask it to do something and then it really goes and searches for this documentation. The output answer you get actually feels like the model went through the docs in a comprehensive way.

I also like the experience in Cursor—you can reference files, folders, docs very easily. Overall the experience crafting prompts there was better than using CLI tools like Claude Code.

---

## On Cursor CLI

**Cursor has released their CLI tool**. When I first tried it, the experience felt early—no file referencing and no custom slash commands. Later this week they added referencing, which is a necessary improvement. Planning mode isn't there yet.

![Cursor Agent CLI](screenshot_2_cursor-agent.png)
_Cursor Agent CLI_

Overall this is a positive step forward to have access to the model you want to use—`gpt-5`, `sonnet-4`, or `opus-4.1`. However, I primarily use Claude Code because of established workflows with custom slash commands and a state‑of‑the‑art user experience, but I'm watching Cursor CLI steadily.

There also [Amp](https://ampcode.com/) agent which I want to try out for a long time. However, they only have API access and no subscription model. So I'm a bit afraid to use it because of that.

---

## On Interactive Dashboards using GPT-5

I watched [this video from the channel I versus AI](https://www.youtube.com/watch?v=VgpLG0jZwzU) and felt that familiar "this is cool" spark. I want to try it. **Here is the dashboard which is build in Obsidian using Dataview.js and GPT-5**!

![Personal dashboard in Obsidian with Dataview.js (credits: IversusAI)](screenshot_3_personal-dashboard.png)
_Personal dashboard in Obsidian with Dataview.js (credits: IversusAI)_

By using latest AI models and proper context management (docs), right now it's easier than ever to build custom dashboards that display the information you want.

I want to explore how to use these dashboards to better manage my context—give me the right information at the right time.

I'm most interested in dashboards that would enable me to make better decisions. This is achieved by displaying right context at the right time. If a dashboard displays the information I need to know right now to make the best decision, it earns its place.

This reminds me of a term that’s picking up: “**context engineering**.” As an operator of LLMs, our job becomes defining the context for the LLM to be successful in the task. I also think this translates to the human side: what information do I need to know at this moment to make my best decision? **Context engineering for myself.**

---

## On Mobile Agents

I keep a minimal flow so I can talk to my notes and vibe code while walking. From the phone I do my morning and evening check-ins, or ask "what did I focus on in the last three days?" with short cited snippets.

![Running Claude Code from your Phone!](screenshot_4_mobile-agent.png)
_Running Claude Code from your Phone!_

The magic is in **custom slash commands**—they make workflows instant. I have commands for my morning routine, evening routine, and weekly reviews. I just run them and the agent follows a predefined workflow. Since I've already defined these workflows, there's no need to explain the task each time. It's effortless execution from the phone.

The goal isn't to make the phone do everything; **it's to keep momentum**. The smooth part is **session continuity**: I can initiate a session on my Mac and attach to it via tmux from the phone. Anywhere. Switching between sessions is quick just by swiping left and right, and when I need to brainstorm I can use planning mode. After brainstorming and planning, I can continue right from that same session on my laptop, but now with the focus on executing the task.

If you want the minimal setup for this phone flow, I recorded a short walkthrough on talking to your Obsidian notes from your phone:  
[Talk To Your Obsidian Notes on the Go (Claude Code Mobile Setup)](https://youtu.be/aZZaqmcq-1Q)

---

## Why I'm Writing This

Writing this newsletter **closes the loop for me**. It forces reflection and turns experiments into useful, **ready‑to‑apply takeaways**. That feedback loop is the value.

* * *

_I help people **do their best work** by building **personal AI agents**—mindfully and transparently. On [YouTube](https://www.youtube.com/@artemxtech), I share real experiments so you can **delegate** what drains you and **amplify** the work you love._

_Thanks for reading—let me know what’s one task you’ll delegate to an agent this week—and one you’ll amplify?_