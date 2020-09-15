---
date: 2020-01-09
revised: 2020-02-01
title: Something about 3d printing - Part 1
key: 3d-printing-setup
draft: true
description: 
---

The most important lesson I have learnt from 3d printing is that 'failure is part of the process'. And, I mean, I'm a programmer so I'm not unaccustomed to the idea of things going wrong, and it's a common enough idiom in the context of developing software. It's normal for things to be somewhere along the spectrum of working / completed / correct. It's just that 3d printing, that has become a part of the philosophy. You are required to embrace it. There are too many variables to control, the system is constantly in flux, and things *will* go wrong. Instead, the process requires you to embrace this. Take small steps. Experiment. Learn from your mistakes. It's been a very humbling, and dare I say character-building, experience that has become more than just a hobby, but rather a part of my identity.

I started writing this article in January of 2020, in a period of significant change. It very quickly grew hugely in scope, because it was a personal topic that I was incredibly excited about, and then... Well, y'know. 2020 happened.

## The Hardware

I spent literally *years* debating whether or not I should buy a 3d printer. I would beg / borrow / buy print time from friends and acquaintances, and while the results were great - they were never really good enough (for me). The crucial deciding factor was spending some time with a printer that was sitting idle at my office - a [Prusa i3 Mk3](https://en.wikipedia.org/wiki/Prusa_i3) (unofficial). The initial results were *awful*, but very quickly improved and I found myself excitedly tweaking it. Eventually I decided to take the plunge, and bought my own. 

### Ender 3 Pro

My printer is the [Creality Ender 3 Pro](https://www.creality3dofficial.com/products/creality-ender-3-pro-3d-printer), that I bought locally from a place called [DIY Electronics](https://www.diyelectronics.co.za/). It's a variant of the **wildly** popular Ender 3 with a few small improvements, such as a magnetic build plate, larger build volume and hot-end and component improvements. I debated long-and-hard as to whether to get the silent version of the printer. While I don't mind the bleeps and blorps that the stepper motors of the printer make, there have been a few times when I wish I had forked out the little extra on getting the silent version (at those times I've just closed the door to the room that it's in). Other than that, I haven't (yet) felt like I needed any further features or a larger build volume, although I do have a bunch upgrades that I have done and others that I still want to do.

> _One of the features of the printer is its ability to resume from power failure. Given the propensity for power failure in South Africa, this seems like a key feature! In reality, unfortunately, this has not been very useful. When the print fails, the hot end of the extruder sits on the print surface causing noticeable deformation. Additionally, this is not something that the Octoprint server can interface with, which is the [primary mechanism for loading and monitoring prints]()._

### Filament

I haven't been very adventurous with filament. I specifically want to print PLA, because it's easy and most of what I want to print isn't load-bearing at all (thus necessitating ABS or PETG). Different brands have subtly different characteristics, so I've stuck to a single brand so that I can experiment with my printing profile and eliminate other potential variables. 


The brand of filament that I've been using is [eSUN PLA](http://www.esun3d.net/Products/PLA) usually in plain grey. I bought a spool of the [eSun Silk PLA](http://www.esun3d.net/Products/eSilk-PLA) which has a polyester-like additive that produces visually impressive results. The striation lines are still essentially the same, but become less obvious with the striking, high-gloss appearance of the Silk PLA. So, I suppose, it overwhelmingly depends on what you're producing the prints for: function or appearance.

> _We had a heatwave in December 2019, which was hot by Joburg standards, but most importantly it was statistically significant in terms of the PLA melting point. I ended up **not** printing for the period, because I was having a lot of problem with [stringing and oozing](https://www.simplify3d.com/support/print-quality-troubleshooting/stringing-or-oozing/) - both hallmarks of the melting temperature of the PLA being too high._

### Raspberry Pi 4B and Camera

I have a [Raspberry Pi 4B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) that I'm using as a print server [more later](#octoprint), simply plugged into the usb port of the printer. I've read (and been told) that the pi 4B is overkill for this task, but I had something [very specific in mind](#the-spaghetti-detective) when it comes to monitoring and wanted to make sure that I had enough muscle to pull it off. The only real word of caution that I have is that you can't treat the 4b the way you (well, I) used to treat pis. It generates **a lot** of heat, and you need to make sure that you have a fan to prevent it from over-heating and thermal throttling your print server.

For monitoring, I have a bog-standard Raspberry Pi camera kit, which is tricky to focus but has been 'fine'. I can't really complain about it, but I wonder if a more featureful USB web camera wouldn't be nicer.

### Mods

One of the cool facets of 3d printers, especially the Ender, is the ability to modify it beyond original specifications. With a little bit of research and a little bit of imagination, the sky is the limit as to what you can accomplish.

#### Pi case

The raspberry pi kit that I bought came with a case. I didn't want to have a freestanding case, though, and printed up a case that could be fitted onto the frame of the printer. I found and printed up [this case](https://www.thingiverse.com/thing:2889371) and [this camera enclosure](https://www.thingiverse.com/thing:2987719) using the starter filament that the printer came with. It was a largely painless experience, and I decided to mount it on the front left of the printer instead of underneath it. It's been 'fine', as I can access the pi power and usb ports when I need to. I don't have a really compelling use case for having the pi easily accessible, just that I don't want to struggle upending the printer if I need to access the pi. 

#### T-nuts

The metal T-nuts that fit the Ender 3 frame are not trivially accessible locally. I mean, you can probably get them in Joburg, but 1) I don't know where and 2) I'd need to buy a lot more than just the few that I would need. So in order to mount stuff to the frame of the printer I [used this printable part](https://www.thingiverse.com/thing:1073567) that lets you put a standard M3 hex nut inside it. It's not really a load bearing part, and I've had literally no problems with it.

### Glass build plate

The Ender 3 Pro comes with a magnetised build plate, which I used for a few months. As a complete novice, it seemed like a really smart thing. It's easy to work with, and flexible, so you can easily pry prints off of the surface. I read a number of articles suggesting that the move to a glass build plate was inevitable, and, like a fool, I wrote them off...

So. Eventually the flexible build plate got wrecked. The final straw was a series of misprints (during the aforementioned heatwave) that was consistently failing to put down the first layer of the print. Scraping and scrubbing the magnetic surface left it mangled and irreparably damaged, and I was left with no choice but to replace it. I went out to the local Builders Warehouse and bought a (ridiculously) cheap 4mm glass sheet and fitted it to the build plate with [bulldog clips](https://en.wikipedia.org/wiki/Bulldog_clip). At first I used mid-size  clips, but, while they were physically easier to work with, the extruder head would occasionally crash into them - causing a mild panic. I've moved to 'really small' bulldog clips, that are not 'easy' to get over the glass + build plate, but don't take up any of the available surface.

The glass has been a revelation. It has really good adhesive properties when heated, which almost entirely disappear when it cools down. The net result is that I have had no lifting, warping, or detaching from the print surface, and often the print can simply be lifted off of the build with fingers when cool. Additionally, the bottom surface is *amazingly* smooth. This may or may not be material to the final result, but if you want to have one of your print surfaces be perfect - then glass has a real, compelling advantage. 

Don't be like Mike. Just use a glass build plate.

> _There are some prints, particularly ones that have a large print surface, that can become stubbornly stuck to the glass build plate. In this case, don't panic. Put away the paint scraper/scalper/hammer. Simply put the whole build plate in the freezer for 10-20 minutes and the thermal differential will let you lift the print off of the glass surface with no effort. This facet alone has alleviated a *ton* of frustration in the whole process._


## The Software

As important (and cool) as the physical bits and pieces of the 3d printer are, they are nothing without good software backing it. I think I enjoy 3d printing primarily because it's this non-trivial overlap between physical and software.

### Marlin

This is the firmware that runs on the printer itself, or rather on the arduino that's used to drive the printer. It's the _de facto_ standard for 3d printers, is extensible and customisable, and I've become used to it. It is a little 'old school' in places, a little like a cell phone from the 90s, but it does what it says on the box.

### Ultimaker Cura

One of the most crucial pieces of software is your slicer. The printer runs on gcode instructions, and the slicer is the thing that's responsible for taking your 3d model and turning it into gcode. There are a million (ok, perhaps a slight exaggeration) small variables that can affect a print: temperature, layer height, print speed, supports, retraction, wall thickness... There are so may things small that can (and should) be tweaked, that one builds a strong bond with a slicer that you feel works for you. For me, that has been [Cura](https://ultimaker.com/software/ultimaker-cura).

Make no mistake, there are things that bug me about Cura. The interface is somewhat simplistic, and all of the juicy settings are hidden behind progressive layers of UI. It generates poor (scratch that, truly awful) support structures for prints, and the plugin marketplace is pretty empty.

What I like about Cura is the results. From the very first print on my Ender 3, I got exceptional results. I've had to do very little tweaking, by comparison to other slicers (here's looking at you PrusaSlicer), and it's just worked. I still have a little trouble with stringing from time-to-time, but that's only when I stumble outside of the recommended settings for layer height and speed. 

The default profiles are very good, but you can also find a number of 'bespoke' profiles that leading community members have created. You should find which ones suit your needs, but I've had some success with the following: 

- [FDG Profile](https://www.fatdragongames.com/fdgfiles/?p=4962)
- [3DPrintingPro](https://www.youtube.com/watch?v=erIFwVcSpRo)

> _Todo: Version 4.4 and tree supports!_

### PrusaSlicer

What can I say about PrusaSlicer. It was based off of slic3r, is OSS, and has all of the settings. All of them? All. Of. Them...

I used PrusaSlicer for a long time on our ghetto Prusa i3 at work, and got fairly comfortable with it. I had a suspicion that it was part of the problem with why we were getting sub-par results, and once I tried Cura I was convinced. It does a job, but I'll no longer use it.

It did, however, generate *really* good support structures. So that's a plus.

### Meshmixer



### OctoPrint

### The Spaghetti Detective

### ThingiVerse

### Blender

## Conclusion





