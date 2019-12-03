---
date: 2019-12-03
revised: 2019-12-03
title: Secrets of live coding
key: live-coding-secrets
description: I really enjoy both delivering and watching live coding talks. Sure, there are some rough ones every now and then, but overall I find that there's a lot of value to be gained in watching and understanding how someone else goes about coding. The sense of connection to the crowd, the engagement, the suspension of disbelief and the motivational factor all make live-coding truly rewarding.
---

Live coding makes both speakers and conference organisers nervous.

I mean, who would blame them, there are so many examples of high profile live coding failures. They take a lot of careful consideration, planning and preparation - and there is _so_ much that can go wrong in execution. Everyone has been at one of those talks where the speaker flounders through a demo, and is as relieved as the audience when it ends.

Despite all of this, or perhaps because of it, I really enjoy both delivering and watching live coding talks. Sure, there are some rough ones every now and then, but overall I find that there's a lot of value to be gained in watching and understanding how someone else goes about coding. Sure, you can show code on slides, but that isn't really _how_ you code. It is out of context, unnatural, and seldom builds a meaningful connection between the audience and what you want them to learn. So, sure there are risks, but they can be mitigated. The sense of connection to the crowd, the engagement, the suspension of disbelief and the motivational factor all make live-coding truly rewarding.

> _Please, if you feel that live coding isn't your 'thing', that's completely ok. I'm not here to invalidate your experience, and your presentation will still be incredibly valuable. This just serves more as a record of my learnings, in trying many (many) different things while live coding._

## Why would I even?

### Coding is 'Job #1'

For almost everyone that talks about development topics, coding is "Job #1". It's literally the thing we do all day, every day. So, It shouldn't be a big surprise that not only are we good at it, we feel most comfortable while writing code. I have seen many nervous speakers settle into a talk as soon as they open an editor. It's as if you're no longer standing in front of 100's of people and rather back at your desk explaining to some curious onlookers about how you built that awesome thing.

For the audience, if they're attending a technical talk, it's likely that coding is their core skill set. Think about code as the lowest common denominator between you and them. I mean, there may be more. You may share some culture, background, language or geography with some of the audience - but likely not all of them. The way that you present information, even something as objective as data, is inherently loaded with some of your own context and bias. Spoken language is renowned for being ambiguous, but programming languages are, by definition, objective and rigorous. Sure, this problem doesn't entirely disappear, and it assumes a shared understanding of the capabilities of a given programming language - but I believe that it does mitigate it.

### Suspension of disbelief

When someone shows you a snippet of code, and tells you that's all you need to be able to do something - you are well within your right to be skeptical. I've often attempted to replicate some code from presentation, and found myself disappointed that it doesn't necessarily work as advertised. On the other side, as a speaker, I've tried to fit code on a slide and wrestled with how much can be stripped away before all nuance and meaning is lost.

Live coding requires you, as a speaker, to present inherently practical examples. It has to be a thing that you can type out (one way, or another) within a time limit, and it has to illustrate the point that you're trying to make. These are hard constraints, but are very liberating in their own way. You have to pare down your implementation to the minimal viable example of a thing that works. You have to brutally apply Occam's razor to your talk, and cut away any detail that can distract from the focus of your talk.

This means that live coding can be a very compelling way to illustrate implementation, and creates this suspension of disbelief within the audience. They have seen you do 'the thing' therefore: 1) 'the thing' is real, and 2) there is nothing stopping them from going home and doing 'the thing'. This facet alone, the ability to encourage people to go and try what you've been talking about, is immensely rewarding.

### On the other hand...

Let's be real, there is a lot that can go wrong; some of it you can control, but much of it you can't. Just because you can't control it, doesn't mean that you can't prepare for the eventuality, and turn a bad situation into an amazing talk. The rest of this article will essentially concentrate on preparation and execution.

> _I would like to call out the single hardest factor to control: the audience. Many a good talk has struggled to land, purely because the wrong audience was sitting in the room. At smaller, or more specialised conferences, this may not be a concern, but at the larger developer events it is a real problem. You're likely going to speak to an audience of wildly different backgrounds and levels of expertise, and it's something you're going to have to prepare for._

## Preparation - there can never be too much

### Creating the narrative

Live coding is not just 'building a thing', nor is it showing code. Live coding in a talk is there to advance the narrative of the talk, as much as slides are, and it's important to think of it as such when preparing. In any good narrative you need to have a high-level thread through the talk, a simple-to-follow moral-of-the-story, if you will. This is so that even when your audience isn't following along, or your demo tanks spectacularly, there is a concrete conclusion that the audience can take away. Every decision that you make, in terms of what you do in your demo, needs to support this high level narrative in some way, shape or form. Your audience should never be left wondering 'what was the purpose of the talk?', even if you have to be blunt about it in your conclusion (and in fact, it is recommended).

The high level narrative acts as the [carrier frequency](https://en.wikipedia.org/wiki/Carrier_wave) for the technical content of your demo. You're going to bake the detail into each of the phases of the talk, being very careful not to break the overarching rhythm. Continuing with the wave metaphor, you need to be aware of the peaks and troughs of your talk, as well as where the [inflection points](https://en.wikipedia.org/wiki/Inflection_point) of your narrative are. You will delve into the (likely increasing) layers of complexity in short bursts, and then pause to reinforce the over arching narrative of your talk. This can be as simple as showing the effect of the changed code on the UI, and giving the audience a chance to digest the implication. While it's possible to have a big-bang reveal at the end, it is a delicate balance, because the longer you proceed without an inflection point (pausing), the greater the risk of losing the audience.

> _*Theme:* A contentious, but often important part of the talk is the theme. It's not always necessary, and can sometimes be overdone, but a good theme in a talk will make it more accessible to the audience. This can result in increased engagement, opportunities for humour (which provide easy inflection points), and audience participation. Just be careful, however, that it doesn't dominate the narrative. Finally, be critical of your theme selection and target audience, as some themes can be misconstrued (or be outright insensitive) in different contexts._

### Build a reference application

Once you've decided what the high level narrative is, I recommend building out the end result in its entirety. This will give you a good understanding of the size, shape and complexity over the task - as well as highlight any risky infrastructural areas. (If it's hard to work with while building it, assume that it will break in the demo). It's not uncommon to spend several weeks iterating on this phase, until you're happy that you have a 'thing' that both reinforces the narrative and is feasible to demo. It's also really important to be critical at this stage, and not tied to an idea. If you have any reservations about being able to pull this off, this is the moment to pivot the talk.

Once you're happy with the end result, you should slice up the demo into reasonable size chunks that represent the steps that you will take to achieve that result. This is subjective, and very much dependent on how you're planning on executing ([see below](#different-styles-of-live-coding)), and it's important to remember that _'everything works, some of the time.'_ In terms of which direction to break it up, there are many ways that you can go about it, but I favour two approaches: increasing scope/features, or increasing complexity. The former concentrates on adding additional, discrete functionality while the latter builds upon a single implementation by adding layers of complexity.

Increasing scope presents considerably less risk, because you can likely bail on a part of the demo that is failing and continue onto the next section. Increasing complexity, however, is inherently additive, so when something goes wrong you may have a situation of cascading failure. All that this means, however, is that your preparation needs to be slightly different for either approach. They are both useful and have different affordances.

By this stage you should have a good idea of the timings between different steps, and be planning how to execute it. It's important to note, that the shorter a step is, the smaller the risk. While it may seem obvious to make the smallest changes possible, this can be very disruptive to the rhythm of the narrative. You're going to need to choose your approach to execution based upon these beats, and remember that you don't have to pick one - you can (and probably should) mix and match a _little_ bit. Honestly, this is the hardest part of the preparation. Be critical, and constantly ask yourself the following questions:

- _How long is too long?_,
- _Can I type this out reliably?_,
- _Is this too much code to show at once?_,
- _If I start running late, what can I speed up? What can I drop entirely?_

### Different styles of live coding

So we've used the term 'live coding' very broadly, but the reality is that it isn't really a homogenous topic. What _I_ imply when I use the term is that code will be produced, executed and demonstrated - not necessarily that the audience will sit and watch you type stuff out (although, again, there is a time and place for that). Here are a few approaches I have seen work, but I'd like you to read the following with two caveats in mind:

1. Everything works, some of the time.
2. Everything is a tradeoff, where you gain on one hand - you may lose on the other.

#### Hand written

I don't mean literally, like on a whiteboard, but rather typed out from scratch while everyone watches. This is obviously the style that has the greatest inherent risk, and takes the longest. If done properly, however, it can be the most accessible - as people can follow along literally as you work. They can relate directly to the way of working, the tools that you're using, and have the maximum amount of time to digest what you're doing.

#### Copy / Paste

Copy and pasting from a reference document is a legitimate strategy, especially as a back up plan, or for cli commands that are really complicated. It's pretty easy, but there isn't really an elegant way to do it, so whatever works... works. Don't obscure the text by having it super small, or in a hard to read colour scheme. If you're going to copy/paste: **own it**. Let the audience follow along and see what you're doing, and this advice extends to essentially everything here, because this is **all** about the journey and taking the audience with you.

### Git tags

Tagging major steps of the process in git is, in my opinion, the single best backup plan. I recommend them, because you will have a 'safe point' that you can (almost) objectively guarantee will work. I have seen people take this even further by using tags as the primary mechanism for the demo, by explaining to the audience what the changes are, and how they work. I recall a particular demo, that unfortunately wasn't recorded, where the speaker had forward/backward shortcuts on their toolbar/dock and could just click them and the code files would update incrementally. It actually worked incredibly well, but I've never experimented with it.

### Code snippets!

My preferred primary method for live coding is using code snippets, coupled with minimal typing. I use this approach **extensively**, often to the point that I worry about it becoming predictable. The reason why I favour code snippets, is that they are reliable yet unobtrusive. Virtually every text editor has them built in, so the audience is most likely going to intuitively understand what they're doing. They let you produce a useful chunk of code, and then talk through what that code does. In many cases, the snippet will let you script typing points, and can mingle with hand-writing the code **really** well.

> _Importantly, the **de facto** rules of showing code on slides still apply. Conventional wisdom dictates that you should only show 7 lines of code on a slide, and **if at all possible** you should follow this rule when generating code via a snippet. Don't generate more than 7 lines of code at a time, but rather break it up into successive steps (and therein lies the art)._

There are many text editors and IDEs, but most of them share a common format derived (to a greater or lesser extent) from TextMate snippets. I primarily use Visual Studio Code (it's free and delightful) which has really [simple, yet advanced, snippet support](https://code.visualstudio.com/docs/editor/userdefinedsnippets). The single best aspect is that the [snippets can be scoped to a project](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_project-snippet-scope), by including the snippet file in the `.vscode` project directory in the root of your workspace. This means that your snippets don't have to be globally configured, but can instead be committed into your repository. There is nothing more frustrating (and risky) than having to move around snippets before a demo, especially if you have several talks being prepared. Being able to simply checkout a repo, open Code, and be able to code a demo predictably has been one of the single biggest quality-of-life improvements.

In terms of practical advice for designing snippets, I would recommend a few things:

- **Keep it simple:** Seriously, just use it as an accelerator and a substitute for typing. Simple is reliable.
- **Easy to type:** I have had pretty good success in prefixing all of my snippets with an underscore, and then numbering them sequentially (i.e. `_1`, `_2`, `_12`).
- **Multiple tabstops:** When you are repeating the same step a lot, such as scaffolding a class, look at using [multiple tabstops](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_tabstops). This works pretty well, and can be used _very_ effectively in conjunction with typing out small sections of code.
- **Don't get carried away:** Try and use as few snippets as possible, and if at all possible limit it to ~7 lines of code at a time. Judiciously apply [Occam's Razor](https://en.wikipedia.org/wiki/Occam%27s_razor) and be honest about what you're trying to show, and how you can accomplish that with least effort.

#### Text expansion

A slight variation on code snippets is text expansion. In a demo, there are often situations outside of your editor where you require a piece of text or a complex command, such as in a terminal or browser window. In these situations an operating system level text expander, such as TextExpander, AutoText or Karabiner, is incredibly useful. Just keep in mind that you are effectively installing a keylogger onto your operating system, so be sure that it's one that you trust...

### Practice (practice, practice)

Live coding succeeds or fails in preparation, and the single most crucial aspect of preparation is practice. Practice your demo over and over again, backwards if needs be. Practice your timing. Practice while silent, so you can focus on the muscle memory. Practice while talking, so that you can get used to what it feels like and how long things are taking. Practice your backup strategies (this is often neglected)! If a demo goes sideways, and you can recover easily and effectively, it often has a net positive effect on the talk. Your audience will be even more engaged when they realise that it's not a performance, it's for reals.

On the morning of I will go through my demo silently several times, probably between 3-5 times, ensuring that I follow exactly the same steps. Ensuring that I reset the demo exactly the same way every time, and make sure that you reset the demo as a part of your last mental preparations before speaking.

## Execution (doing the thing)

### Visibility

Use high-visibility, high-contrast themes on a light background everywhere. It has the greatest versatility, for the widest range of lighting conditions. Use a good, unambiguous mono-spaced font and bump up the size to 18 point or more (and check this ASAP when you get to the venue, as a part of your tech check). I know you may have spent a lot of time cultivating your super-sweet dark mode theme with custom font ligatures, and want to show it off, but this is neither the time nor the place. If people can't see what you're typing, your whole talk will flop. I find it incredibly frustrating, considering how easy it is, that so many speakers get this wrong.

Slow down! When navigating between windows or tabs, and when scrolling across the document, you want to apply the same logic as moving on the stage. Don't rush, move slowly and with purpose. If you jank the scroll bar around, frantically alt-tab, or otherwise struggle around on your PC - you will lose the audience. I find that it's far more distracting and damaging than pacing on stage. I am fond of knowing the appropriate keyboard shortcut for any action (I am a keyboard oriented developer), and I believe that it's the best way to navigate in these circumstances. **BUT**... Keep in mind that keyboard shortcuts can seem incredibly arcane, and while it's not terrible to have your audience wondering _'how did they do that?'_, you want to avoid it. Get in the habit of explaining what you're doing, which shortcuts you're using (not which keys you're pressing, but rather what you're accomplishing). Know your shortcuts, practice using them in situ and practice narrating what you're doing. If you are not a keyboard person, that's fine, there's nothing wrong with that. Just ensure that whatever toolbar or menu shortcuts you use, you narrate just the same.

> _Don't forget the terminal. Change the terminal colour scheme and font-size as well, and make sure that the terminal is visible to the room. Often terminal input is at the bottom of the screen, and so, depending on the seating, may be hidden from most of the room. Your terminal will have a `clear` or `scroll top` of alternative (on iTerm it's CMD-R / ⌘-R), and practice using that before typing any command in._

### Keep talking

Forget anything I said before, this is **literally** the hardest part. Unless you pair-program every day, and sometimes not even then, it's likely that you're unaccustomed to vocalising your thoughts while you code. Unfortunately, while presenting you can never (ever, ever) keep quiet, because you will lose the audience immediately. There is some of it that one can practice, being the _happy-path_ of your presentation, but there is some that you can't, such as when things go wrong...

Firstly: don't panic! Own the problem, and use it as an opportunity to engage the audience. See if they can spot what went wrong, and help rectify it. (If you have any swag, this is a great time to give it out.) Talk through your reasoning, and what you're doing while you figure out what went wrong. Crucially, when you find the problem, explain to the audience what went wrong and how you fixed it - don't just fix it and keep going. This is a prime opportunity to engage the audience, for them to learn something and for them to see that there is no smoke and no mirrors.

### Exercise judgement

While there is value in resolving a problem and getting the demo on track, one needs to be incredibly careful at the time sink that it can become. While you can prepare for things to go wrong, and cut parts of your demo, but you may still put time pressure on you to finish. There's no universally correct answer, but you will need to develop good judgement around when to cut-and-run to your backup plan (which you will have, right?). Keep track of how much time you're sinking into it, and pay attention to the situation with the audience. You'll very quickly realise what the awkward silence of losing people sounds like... If you have people involved and looking for a fix, roll with it for a while - because it means that they're engaged.

> _Hardware or OS failure happens. It's a thing, and it's one of the hardest demo-fails to recover from. I recommend that you should have a back-up machine, or a fellow speaker that has your demo-code on it._

## Examples

- [State of Houdini(Director’s Cut)](https://www.youtube.com/watch?v=P-oysz0NKCo) by Surma at Chrome Dev Summit 2018.
- [Microfrontends and UI Composition - a Code-First Dive](https://www.youtube.com/watch?v=2F7_w4PFbb4) by William Brander at DevConf Poland 2018.
- [Now, Now-Now, and Just-Now: Building Network Tolerant PWAs](https://www.youtube.com/watch?v=RlFz9uAb38A) by Mike Geyser at DevFest South Africa 2018. 

## Conclusion

Sure, there are times when live coding can be a hot mess. Despite the best plans, preparations, and precautions - the [demo gods](https://twitter.com/demogods) may not have looked favourably upon you. At those points, it's important to remember that the live coding isn't an end unto itself, but is rather a mechanism to reinforce the narrative of your talk. The code exists to establish connection with the audience, to encourage them to suspend their disbelief, and to underscore the message that you're trying to convey. If used effectively, I would argue there is no better way to communicate technical content, and something I find immensely enjoyable and rewarding. 
