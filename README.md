# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

|  Mobile designed at 375px:   |  Desktop designed at 1440px:  |
| :--------------------------: | :---------------------------: |
| ![](./screenshot-mobile.png) | ![](./screenshot-desktop.png) |

### Links

- Solution URL: [https://github.com/elisilk/time-tracking-dashboard](https://github.com/elisilk/time-tracking-dashboard)
- Live Site URL: [https://elisilk.github.io/time-tracking-dashboard/](https://elisilk.github.io/time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Fluid typography and spacing

### What I learned

So much interesting stuff here.

Container queries - Interestingly, in this challenge, as the viewport width gets larger, it seems like the container widths get smaller. Which makes me wonder whether it makes sense for the typography sizes to get bigger or smaller? Weird!

Every Layout - how to make this work? Or just use the underlying ideas?

Ellipsis? - What is the intention of the ellipsis in the design? What should happen when someone hovers over it and clicks it? I'm not clear. It's also weird that the entire section has a hover effect (changing the background color), which kind of obscures the effect of the ellipsis hover.

Another example of injected code messing up the layout - Like last time with LastPass and the input field, this time the Every Layout sidebar used a `:last-child` selector, which was problematic because a `script` element was injected into the HTML, and so that was the effective last child. Whoops. How to account for that kind of stuff? Seems so brittle.

Problems

- Gap spacing based on container width (or viewport width)? So should increase from (?) to (?)?

- Make the header layout responsive.

- In the nav, using flexbox, is the middle item actually centered horizontally in the container? I don't think so.

### Continued development

Working on this.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) - Of course, as always. So useful.

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
