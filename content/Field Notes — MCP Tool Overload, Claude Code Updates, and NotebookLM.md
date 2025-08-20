---
title: Field Notes — MCP Tool Overload, Claude Code Updates, and NotebookLM
tags:
date: 2025-08-20
socialImage: assets/cchistory.png
categories:
---
AI agents work better with fewer tools, tracking Claude Code expenses, and research just got effortless. 

---

## On MCP Tool Overload

I've been using Claude Code as a personal assistant, connecting it to Gmail, Obsidian, and other tools through MCP servers. MCP servers are convenient. They build the bridge between your agent and your data. You want access to your context, so you connect a few servers and suddenly your agent has dozens of tools. The problem: it gets confused.

Take the [Obsidian MCP Tools](https://github.com/jacksteamdev/obsidian-mcp-tools) as an example. It exposes 18 different functions covering search, semantic search, file creation, vault management, and more. This sounds powerful: one connection giving you comprehensive vault access. In practice, it creates a mess. The context gets contaminated with options the agent doesn't need.

I've been exploring how Claude Code desktop application lets you turn off some particular tools so agents can't use them. You end up with a smaller number of tools, but I haven't found a way to disable specific MCP tools for Claude Code.

## On Custom Slash Commands

**My solution is task-specific Claude Code slash commands** that eliminate ambiguity and enforce single-purpose workflows. Instead of telling an agent "process my emails using whatever tools you think are best," you run `/email-review` that follows a predefined, reproducible workflow with clear constraints. To get emails, I typically build a Python script or CLI tool to get the functionality of MCP server that I need.

This approach keeps all the processing work scriptable and leaves the agent the creative work. It structures output, analyzes patterns, and generates insights. The agent doesn't waste time figuring out how to do something; it focuses on what the results mean and how to deliver value to me.

I found that a lot of the success of the agent depends on how well you design your custom slash command. Here is how I structure my custom slash commands (on example of meta command `/create-command`):

```yaml
## Context
- **Reference Guide:** @Notes/Docs/How to Write Good Slash Commands.md
- **Existing Commands:** !`ls -1 .claude/commands/`
- **Session History:** Review our current conversation patterns
- **Additional Context:** $ARGUMENTS

## Your task
Analyze our current session and create a reusable slash command:
1. Review conversation history for core workflow pattern
2. Extract reproducible steps, identify dynamic elements  
3. Determine required tools and create constraints
4. Structure with clear YAML frontmatter and specific instructions
5. Write command file to `.claude/commands/`

Make the command general enough to be reused for similar workflows while preserving the specific interaction pattern from our session.
```

**Key principles I follow:**

- Context first, then task. Provide necessary background like current date, templates, and file references under the Context section
- Max 4-6 steps. If a workflow needs more, it's usually two separate commands. Minimize the number of tool calls and optimize to make the agent do the task faster
- If you can provide exact files to process, do that. Automate the data management work. For example, if you need to grab journal notes from the last week, build a command that automatically gets those files rather than making the agent figure it out each time
- No tool ambiguity. Specify exactly which tools to use and when

The `/create-command` command above is a meta-command. It builds other slash commands from successful session patterns. When you find yourself repeating a workflow, run `/create-command` and it automatically extracts the pattern into a reusable command.

For now, I build custom scripts that specify exactly which tools my agent should run for each task, rather than using MCPs Thankfully, it's easier than ever to do that.

## On Claude Code Updates

Claude Code recently shipped a `/statusline` command that creates custom status displays at the bottom of the interface. You can run `/statusline` to set this up.

I **really love this custom status line idea from [Mario](https://mariozechner.at/)**. I use his package [cccost](https://github.com/badlogic/cccost) to track how much of the context window is consumed in my command line. As you can see, I just sent a couple _messages_ to Claude Code, and it already consumed 19.27K tokens due to the system prompt. (the whole system prompt of Claude Code is 14,225 tokens – as of version 1.0.85). It also shows the price, how much the current session burned in terms `$$$`. This helps me build intuition about spending through the API and observe how model behavior changes as the context window fills up.

![[statusline.png]]
Mario also built [this system prompt history tracker](https://cchistory.mariozechner.at/) that I use to monitor Claude Code updates. If you really spend that much time using this tool, it becomes valuable to dig deeper and understand how to get the most out of it. The system prompt can be used as a reference for building your own prompts as well. The model is familiar with that definition of instructions and probably more likely to follow that, though this is speculation.

The recent update with [output styles](https://docs.anthropic.com/en/docs/claude-code/output-styles) is worth noting. Anthropic promotes it as a way to adapt Claude Code for users beyond software engineering. It removes the software engineering part from the system prompt which potentially might reduce token usage and make Claude Code more focused. I haven't adopted it yet, but it's promising that Claude Code could become a general type of agent, not just for software engineering. I don't need Claude Code to be an expert software engineer when it works as my personal assistant.

People in [this Reddit thread](https://www.reddit.com/r/ClaudeAI/comments/1msvwm1/has_anyone_found_practical_use_cases_for_claudes/) mentioned they use it for learning new languages or frameworks and teaching mode.

## On Rediscovering NotebookLM

**I finally started using NotebookLM and felt it was incredibly valuable**. NotebookLM provides citations on YouTube videos, personal notes, personal files, slides and so on. They also have a cool mind map to explore topics.

One of the challenges for me was that it was very hard to add relevant content there. The feature to discover sources was not working properly and was suggesting irrelevant material. But doing that by hand, collecting all of the links manually, going back and forth is too much friction.

But now I discovered a streamlined workflow that makes material collection effortless. [Here is a 1-minute demo which I recorded for this workflow](https://youtu.be/DiSY-X8r5mE). It's a three-stage workflow:

**Smart Copy Link** ([Chrome extension](https://chromewebstore.google.com/detail/smart-copy-link/aekjcglbehfoooglfoafbgglhhpjgemf?hl=en)): Copy any link to clipboard on hover. Whenever I hover my mouse over a YouTube video and press Ctrl+C, it goes into my clipboard.

**Antinote** ([antinote.io](https://antinote.io/)): As you copy links, they immediately appear there in a small window.

**NotebookLM Web Importer** ([Chrome extension](https://chromewebstore.google.com/detail/notebooklm-web-importer/ijdefdijdmghafocfmmdojfghnpelnfn?hl=en)): Once you stop collecting, you can copy all of those links and put them into the NotebookLM web extension, and immediately create a new notebook with all of our web pages loaded.

This is very valuable because I can research a topic much faster. I can go to YouTube, perform a search, and just grab all of the videos which seemed relevant. I collected 20 videos in one minute, and then I can chat with all of this at once.

---

If you liked this, check out my other experiments on [YouTube](https://www.youtube.com/@artemxtech) and [blog](https://artemxtech.github.io/). My mission is helping people do their best work through mindful personal automation. Don't forget to subscribe to my [newsletter](http://artemxtech.substack.com/) if you haven't already. Thank you for reading!