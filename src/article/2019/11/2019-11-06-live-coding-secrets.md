---
date: 2019-11-06
revised: 2019-11-06
title: Secrets of live coding
key: live-coding-secrets
description:
---

- NB: If live coding isn't your 'thing', that's completely ok.

- High profile failures
  - Surma at CDS
  - Rich Harris on Svelte at... New York somewhere?

## Why would I even?

- Coding is "Job 1"
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
