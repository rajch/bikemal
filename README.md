# bikemal
Saves formatted code as an image. Parody of a well-known service.

There's an [excellent service](https://carbon.now.sh/) that allows one to create an image from formatted code. A good friend once complained about the fact that by default, the artificial "window frame" on the generated images looked like the ones on a particular operating system. He wanted more options, ones that were as "old" as us. Some of his students also expressed curiosity about how such a service might work. This project was the result of these discussions, and a slow day.

This project does not intend to be a replacement in any way; it's just a proof-of-concept of how simple it is to put something like this together, with the wealth of open-source resources available. The major functionality comes from three places:

1. [Hightlight.js](https://highlightjs.org/) provides syntax coloring. Here, it's loaded from a CDN.
2. [dom-to-image](https://www.npmjs.com/package/dom-to-image) provides image export capability. Also loaded from a CDN.
3. The various "looks" are created using CSS. The colors and gradients of two of the looks come from XP.css (https://github.com/botoxparty/XP.css). XP.css itself has not been used; only a few colors have been copied to this project's CSS.

The coding style in the javascript file, and especially the variable and function names, are part of the "old" in-joke. People as old as us may get it :-).

