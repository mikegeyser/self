---
date: 2019-11-06
revised: 2019-11-09
title: Secrets of live coding
key: live-coding-secrets
description:
---

Live coding makes both speakers and conference organisers nervous.

I mean, who would blame them, there are so many examples of high profile live coding failures. They take a lot of careful consideration, planning and preparation - and there is _so_ much that can go wrong in execution. Everyone has been at one of those talks where the speaker flounders through a live demo, and is as relieved as the audience when it ends.

Despite all of this, or perhaps because of it, I really enjoy both delivering and watching live coding talks. Sure, there are some rough ones every now and then, but overall I find that there's a lot of value to be gained in watching and understanding how someone else goes about coding. Sure, you can show code on slides, but that isn't really _how_ you code. It is out of context, unnatural, and seldom builds a meaningful connection between the audience and what you want them to learn. So, sure there are risks, but they can be mitigated. The sense of connection to the crown, and the

> _Importantly, if you feel that live coding isn't your 'thing', that's completely ok. I'm not here to invalidate your experience, and your presentation will still be incredibly valuable. This just serves more as a record of my learnings, in trying many (many) different things while live coding._

- Examples of high profile failures
  - Surma at CDS
  - Rich Harris on Svelte at... New York somewhere?

## Why would I even?

### Coding is 'Job #1'

For almost everyone that talks about development topics, coding is "Job #1". It's literally the thing we do all day, every day. So, It shouldn't be a big surprise that not only are we good at it, we feel most comfortable while writing code. I have seen many nervous speakers settle into a talk as soon as they open an editor. It's as if you're no longer standing in front of 100's of people and rather back at your desk explaining to some curious onlookers about how you built that awesome thing.

### Suspension of disbelief

When someone shows you a snippet of code, and tells you that's all you need to be able to do something - you are well within your right to be skeptical. I've often attempted something following a presentation, and found myself disappointed that it doesn't necessarily work as advertised. On the other side, as a speaker, I've tried to fit code on a slide and wrestled with how much can be stripped away before all nuance and meaning is lost.

Live coding requires you, as a speaker, to present inherently practical examples. It has to be a thing that you can type out (one way, or another) within a time limit, and it has to illustrate the point that you're trying to make. These are hard constraints, but are very liberating in their own way. You have to pare down your implementation to the minimal viable example of how something could work

- Compelling way to explain implementation.
  - Inherently practical examples.
- Suspension of disbelief
  - Seeing is believing. If it can be done live in a talk, then it must be accessible.
- Alternatives
  - A lot can go wrong.
  - Audience of inconsistent background.
  - Rules behind showing code still apply.
    - Max 7 lines of code per slide.

## Preparation

- Narrative
  - How will it progress.
  - How will you tell the story.
    - Sometimes it's how you implement it, sometimes its layers of complexity.
- Theme

  - Something accessible, but relevant.
  - Opportunity audience engagement, such as humor or participation.

- Build a reference application
  - End state
- Slice it up into small steps
  - Size the steps
  - Figure out timings
- Styles
  - Write it all
    - Highest risk
    - Risky and takes a long time
  - Copypasta
    - Easy.
    - Reference file and copy out snippets.
  - Git tags
    - A good idea anyway, in case something goes wrong.
  - Roll forwards / backwards
    - Script
  - Code Snippets
    - I use this the most extensively.
    - Mostly use textmate style
    - VS Code / IntelliJ family
    - Naming schemes
    - Multiple snippet points
    - Save it as a part of the project, commit into revision control.
    - https://code.visualstudio.com/docs/editor/userdefinedsnippets
    - MORE
  - Text expansion
    - At an OS level, can work with applications that don't have snippet support.
    - Be careful of keyloggers.
- Notes

  - Find what works for you.
  - https://github.com/mikegeyser/building-pwas-with-angular

- Practice (practice, practice)

## Execution

- Visibility

  - Use a light, high-contrast editor theme
  - Most versatile in different lighting conditions
  - Set a large font size on your editor
  - Don't move quickly. Slow and purposeful.
  - Keyboard shortcuts?
    - Narrate what you're doing. Literally tell them what you're pressing.
  - Don't forget the terminal!
    - Scroll the output to the top (CMD-R or equivalent)
    - So that it's visible to the people in the back.

- Doing the thing
  - Typing and talking
    - Hardest part.
  - When (not if) things go wrong.
    - Own the problem, use it as an opportunity to engage the audience.
    - NEVER BE QUIET! Tell them what you're trying.
    - Explain what went wrong when you find and fix it. Prime learning opportunity.
  - Learn to cut and run
    - Fall back to backup plan.
    - How long you struggle for will depend on the impact of that part of the talk.
    - If its really important, you should have a backup for it.

## Conclusion

Hm?
