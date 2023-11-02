# Frontend Mentor - Article preview component solution

[Click here to see my website live!](https://whimsical-medovik-9c7c0a.netlify.app)


<img width="811" alt="desktop active state" src="https://github.com/LBuchananCates/furrniture-article-page/assets/100169368/09a0ecc8-780d-4f18-b9c0-8dabfe4b0be1">
<img width="351" alt="mobile state" src="https://github.com/LBuchananCates/furrniture-article-page/assets/100169368/607f7ecc-e9bd-4c22-a318-b00409e7d2bc">

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [Add live site URL here](https://whimsical-medovik-9c7c0a.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In order:

1. Have been working on how to neatly style elements that I want to be centered in the middle of the page (especially on desktop view) using min-height and grid.
2. Added tap highlight color property to prevent light blue highlight when clicked on icons or images (small detail that is a nice touch, but not necessary)
3. Learned how to create speech bubble using CSS (triangle was needed!)

```css
body {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.share-button-unclicked {
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: 90px;
  cursor: pointer;
  /* to prevent blue highlight when clicked */
  -webkit-tap-highlight-color: transparent;
}

.triangle {
  position: absolute;
  display: flex;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 30px 30px 0 30px;
  border-color: hsl(217, 19%, 35%) transparent transparent transparent;
  transform: rotate(0deg);
  bottom: -25px;
}
```

Proud of this javascript function that toggles display when clicking the share button; also created an event listener so that when user clicks anywhere outside of the share options dialog box, it hides. Not required in the instructions for building, but thought it would be nice to have 😊

```js
function showShareOptions() {
  var x = document.getElementById("share-options");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

document.addEventListener("click", function clickOutside(event) {
  let shareButton = document.getElementById("share-button");
  const socialMediaOptions = document.getElementById("share-options");
  if (!shareButton.contains(event.target)) {
    socialMediaOptions.style.display = "none";
  }
});
```

### Continued development

Still need to work on javascript skills, learned a lot more about CSS tricks (the triangle styling was very new to me); finally cleared up my confusion about exactly how to use positions relative vs. absolute (always good to have a refresher!)

### Useful resources

- MDN
- stackoverflow
- css-tricks
- w3 schools
- Figma!!! Was very helpful with getting exact measurements for styling

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@LBuchananCates](https://www.frontendmentor.io/profile/lbuchanancates)
