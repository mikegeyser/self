---
date: 2019-05-20
title: Wrangling Redux: reducer size
---

# Wrangling Redux: reducer size

Redux is not the 'new hotness'.

In fact, that it's probably quite far along the downward slope of the technology [hype cycle](https://en.wikipedia.org/wiki/Hype_cycle). As far as state management for your average website goes, it's total overkill, as it introduces a lot of additional complexity for little concrete benefit. The learning curve is extremely steep, and you quickly feel like you're writing a lot of boiler-plate code to accomplish something trivial. Even its creator, Dan Ambramov, [cautions one against ](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) blindly smashing redux into everything. In spite of these reasons, I have fallen in love with Redux. I am enamoured with the concept of 'Flux' architecture, as well as the lightweight implementation of the framework itself.

You have to understand that I come from a background of building scalable, transactional web applications, where performance and robustness are the highest priorities. These systems invariably led away from 'conventional' architectural models into 'event-based', functional (perhaps more _function-ish_) and distributed system models (queue-based / streaming / event sourced / whatever). A lot of the concepts that Redux is reliant on I feel come directly from this event-based world, or at the very least, I feel that a lot of the metaphors fit neatly into my mental model of how such systems work. Redux gives my the architectural constructs that I feel I need to turn the front end into just another node in a larger distributed, event-based system. It allows you to solve interesting problems, in interesting ways.

Excitement aside, this is not simply a love letter to Redux. There are many significant challenges to working with Redux, particularly if you approach it naively. It still has an incredibly steep learning curve, and a number of 'easy to stumble into' problems. Needless to say, I have stumbled into some of these problems, and I'd like to share some of my learnings.

## The problem of objects

Object-orientation is like one of those 4lbs hammers. You know the ones I mean; the masonry ones, of middling size, used for smashing bricks. It's a thing that can be used in a variety of situations, but isn't well suited for many of them. It doesn't break bricks as well as power tools, turns nails into a smear of metal against whatever you're hitting, and is pretty unwieldy and hard to use. The problem with it (both OO and hammers, I suppose), is that it's typically the first tool that you reach for in your toolbox. Let's look at an example.

We have to model some behaviour in a domain for learning management. We have tracks, courses, sections and users. The users can complete any number of sections, and any courses. Sections could belong to many courses, and courses could belong to many tracks. We want to be able to represent percentage completion of any given track/course based upon which sections a user has, well, completed. Anyway, this data has to come from somewhere, and you can easily fall into something like the following table structure\*.

```
   +--------+    +--------------+    +---------+    +----------------+    +----------+
   | Tracks | -> | TrackCourses | -> | Courses | -> | CourseSections | -> | Sections |
   +--------+    +--------------+    +---------+    +----------------+    +----------+

   +------+    +--------------+
   | User | -> | UserTracks   |
   +------+    +--------------+
       |       +--------------+
       ------> | UserCourses  |
       |       +--------------+
       |       +--------------+
       ------> | UserSections |
               +--------------+
```

\*_You get the idea, it's not meant to be a rigorous entity-relationship diagram._

When I looked at data structured like this, I represented this as a JSON tree with two branches and collapsed all of the 'linking' tables as being purely a database concern. In fact I decided that these two representations would be separated at a request level (two different http calls).

```json
{
  "tracks": [
    {
      "name": "Web",
      "courses": [
        {
          "name": "HTML",
          "sections": [
            {
              "name": "Introduction"
            }
          ]
        }
      ]
    }
  ]
}
```

```json
{
  "user": {
    "tracks": [],
    "courses": [],
    "sections": []
  }
}
```

I could then take an incredibly simple assumption with me reducer, and deal with these two trees as being objects on the state.

```js
export const tracks = (state = [], action) => {
  switch (action.type) {
    case TRACKS_RECEIVED:
      return [...action.tracks];

    default:
      return state;
  }
};

export const user = (state = [], action) => {
  switch (action.type) {
    case USER_RECEIVED:
      return [...action.tracks];

    default:
      return state;
  }
};
```

As much as this seems like an elegant approach, it becomes a problem very quickly. The code becomes confusing and convoluted in the following situations:
- If we wanted to represent the 