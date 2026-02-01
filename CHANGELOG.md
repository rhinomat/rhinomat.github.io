```
Ryan Matthews
Caterina Paun
CS463 Intro to Web Dev
November 1, 2025
```

# Log for WebDev Final Project

## Links

### Repository: <https://github.com/rhinomat/WebDevFinalProject>

### Old Website: <https://rhinomat.github.io/>

### New Website: <https://rhinomat.github.io/WebDevFinalProject/>

## Journal 11/1/25:

This new website is a revised and improved version of my current website.

## Journal 11/13/25:

I have only done a basic setup so far.
my architecture is:

```
index.html
styles/
    styles.css
scripts/
    main.js
```

`index.html` is the main page.\
`styles/styles.css` is the main stylesheet for aspects of the page.\
I don't know what `scripts/main.js` is for yet but I know I need something javascript based.\
In `index.html` I have made a html preamble to define the page and made a
html section where the language is defined as english.\
Additionally, the metadata section has it set that the default character set is
UTF-8 like usual and name as viewport to define the visible area for the page,
with the width being that of the observing device and a normal scaling.\
I couldn't come up with a better title, so I made the title "Web Development Final Project".\
I am going to have "Navbar" be in a header, "About", "Previous Work", and
"Projects" in the main section, and "Contact" in a footer.

## Journal 11/16/2025

For ease of control on dimensionality for components of the site, I am going to use bootstrap.\
I also think I want to try and make the favicon for my site.\
I will probably use a tool like [Aseprite](https://www.aseprite.org/)\
I made it with a simple cube-like design. I wanted the main borderlines to be
grey or black adjacent and then have a blue adjacent, green adjacent, and red
adjacent as the main colors. I also made the dimensions 16px by 16px. I will
keep it as the favicon for now unless I determine it needs to be shifted out
for something more interesting visually.\
For my navbar, I based it off the navbar that bootstrap uses in its navbar example but only really in the syntax for classes, just so that I can go in later and manipulate aspects specifically in color and font. <https://getbootstrap.com/docs/5.3/examples/>\
I also decided to implement WebGL into my website, but then switched over to a framework for it called ThreeJS, which is a lot more optimized and I have more conceptual understanding of its high level.\
The only problem i had in the past with it is getting npm to work with GitHub pages, but i finally found a video for it.\
<https://threejs.org/>\
<https://www.youtube.com/watch?v=ygdbUEsAYyQ>\
I put together the About and Experience sections using the base information from my old website and then put some basic formatting that i am going to have to touch up later.

## Journal 11/23/2025

Goal for tonight is the Projects Section and making any adjustments deemed wanted.\
I think I forgot to log it but for the navbar I added a canvas at both ends of \
the navbar and using ThreeJS I have both of them displaying a spinning cube and\
then on reload, pseudorandomizing the color of them as they appear.\
Additionally, I added in a bare styled section for previous work \
that shows the position, organization, location and duration in a list format.\
presently, I inserted a section for Projects I have worked on, where it shows\
the name of the project and key details like language, category and a \
description.\
Additionally, I inserted a connection link for google fonts for \
"Science Gothic" so that it would have a cool, stylized font thats not the one \
that bootstrap wants to use. I also brought in the Font Awesome Icon Library for\
icons when needed.\
I went back to other sections and tried to fix 2 problems: I fixed the Previous
Work section and fixed the spacing so the information wasnt edge to edge and
improperly formatted, also the size disparagement with the About section title
compared to other titles.

## Journal 11/24/2025

I think the goal for today is to put in the contact section, evaluate
responsiveness and accessibility, see if i want to put some filler content to
make the site more fun looking and work on a color scheme. I also want to have
this done by either thanksgiving or 12/1.

## Journal 11/30/2025

I put in the contact section that interfaces and POST requests to Web3Forms in\
order to send messages to me from outside people. I tested it and it does work,\
it also verifies for honeypots as incorporated. I also tested accessibility and \
the whole site seems to move fine when adjusted on laptop and the dimensions are \
kinda changed. I havent implemented a drop down for mobile but I think its fine. \
in terms of accessibility, WAVE detected some header size issues that i fixed \
but the only real error right now is an error mark caused by the input meant to\
handle possible honeypots because its an input with no label.\
Its ideally going to be fulfilled by 12/1 but I am just hoping to make the deadline.\
Color Scheme to use:\
#FFBE0B yellow 400 or 500\
#FB5607 orange 500\
#FF006E pink 500\
#8338EC indigo or purple 500\
#3A86FF blue 300\

in conclusion its actually a mixture of bootstrap purple and lightyellow for the basic coloring.\
The last thing I did was make 2 extra 3D models and put them in to add some nice variety to the website.\
I used BlockBench for it, which is a 3D modelling software more aimed towards making Minecraft mods but
I find it to be just more accessible than blender.

## Journal 12/6/2025

I forgot to make an explanation when i did it but i included 3D model rendering. I used Blockbench and rendered some GLTF files for a basic old computer and a CD.\
I think the site is ready to turn in.
