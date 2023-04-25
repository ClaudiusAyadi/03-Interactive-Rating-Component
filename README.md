# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

**Rating State**
![Design preview for the Interactive rating component coding challenge](/screeenshot-rating-state.png)

**Thank You State**
![Design preview for the Interactive rating component coding challenge](/screenshot-thank-you-state.png)

### Links

- GitHub: [https://github.com/ClaudiusAyadi/03-Interactive-Rating-Component](https://github.com/ClaudiusAyadi/03-Interactive-Rating-Component)
- Live Site: [https://interactive-rating-dovely.netlify.app/](https://interactive-rating-dovely.netlify.app/)

## My process

This is the first time I'm attempting any JS challenge on Frontendmentors. So I spent most of my time ensuring that the HTML and CSS part is well sorted. I wanted to make my Javascript code as minimal as possible.

It worked. I didn't have to write HTML elements in the Javascript file. Everything has been done with HTML and CSS already. I only used JS to add interactivity.

First, I used `document.querySelectorAll()` to get all the `star` classes, then I used `forEach` to reference them individually and added the `active` class to the selected star (number) while simultaneously removing the class from the other stars.

Finally, I changed the `display` on `#rating-state` to `none` and `flex` on `#thank-you` state when the `submit` button is clicked.

Are there other ways to achieve this? Yes! It's Javascript! But for now, this method is what my Javascript skills could do. If you have a better or more streamlined method to achieve this, do not hesitate to get in touch!

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### Continued development

I would like to try out something more interactive. Instead of numbers, it would be stars. The stars would fill up when selected. E.g. if a user selects 4 out of 5, 4 stars get filled up while the 5th star is unfilled.

## Author

I would love to connect with you. I am currently looking for coding buddies to build amazing projects together. My current stack: HTML, CSS, TailwindCSS, and Javascript (beginner).

- GitHub - [Claudius A.](https://github.com/ClaudiusAyadi)
- Frontend Mentor - [@ClaudiusAyadi](https://www.frontendmentor.io/profile/ClaudiusAyadi)
- Twitter - [@ClaudiusAyadi](https://twitter.com/ClaudiusAyadi)
