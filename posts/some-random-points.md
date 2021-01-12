---
title: 'How to Optimize your site using Intersection Observer API'
date: '2020-10-09'
author: 'Jashn Maloo'
excerpt: "World is random in what it does, so let's write something random"
tags: ['performance', 'coding']
readTime: 2
---

Performance of the website was one of the areas I wanted to concentrate during this pandemic as I had ample amount of time working from home. Optimizing the loading of images was one of the task in my Todo list. As any sane person would do, I started Googling and the best way to do it was by using **IntersectionObserver.**  Let us learn step-by-step on how to use **IntersectionObserver API.**

### What is IntersectionObserver?

It is an asynchronous way to observe an interaction between child element and parent element.

### Usecases of IntersectionObserver

- Infinite scrolling of the website where the content is loaded as and when you scroll.
- Lazy-loading of images.
- Performing animations only when required.

Consider a web page which has infinite number of images. Downloading all the images on the page load is a terrible idea. One way is to load certain number of images on the page load and the rest can be downloaded when the user scrolls through the page, which can be achieved using onScroll event. onScroll event will be fired each time the user scrolls and it is run on the main thread which results in frustrating user experience.

IntersectionObserver API lets user monitor a target element whenever it enters or exits parent element. Using this API developers can optimize their website because it doesn't run on the main thread like onScroll event does.

### How to create IntersectionObserver?

IntersectionObserver needs configuration which helps to detect the interaction between two elements.

```jsx
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

```

options is the configuration object that is needed to be passed to IntersectionObserver constructor. The callback function will be fired when the threshold of the target element is satisfied.

- root is used to specify the parent element. If not explicitly specified then the viewport will be the root element.
- rootMargin specifies the parent elements margin. Similar to css margins.
- Here threshold 1.0 means 100% of the target element should be inside #scrollArea.

### How to target an element to be observed?



```jsx
let target = document.querySelector('#listItem');
observer.observe(target);
```

When ever the target element satisfies the threshold the callback is triggered the callback receives list of IntersectionObserverEntry objects.

```jsx
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

The property of isInteracting can be checked to see if the target element is currently interacting with the root.

### Lets learn using a simple example using ReatJS.

Let us create a simple infinite sctolling images in ReactJS s to demonstrate IntersectionObserver API.

Create a custom hook(UseIO.j) which creates the IntersectionObserver and observes the target element.

  ```jsx
import { useEffect, useRef, useState } from 'react';

const useIO = (options) => {
	const [elements, setElements] = useState([]);
	const [entries, setEntries] = useState([]);

	const observer = useRef(null);

	const { root, rootMargin, threshold } = options || {}

	useEffect(() => {
		if (elements.length) {
			console.log('-----CONNECTING OBSERVER------');
			observer.current = new IntersectionObserver((ioEntries) => {
				setEntries(ioEntries);
			}, {
				threshold,
				root,
				rootMargin
			});

			elements.forEach(element => {
				observer.current.observe(element);
			});
		}
		return () => {
			if (observer.current) {
				console.log('-----DISCONNECTING OBSERVER------');
				observer.current.disconnect();
			}
		}
	}, [elements, root, rootMargin, threshold]);

	return [observer.current, setElements, entries];
};

export default useIO;
```

Create Image.js component.

 ```jsx
import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, srcSet, alt, fallbackSrc, isLazy, onClick, style }) => (
  <img
    src={isLazy ? fallbackSrc : src}
    alt={alt}
    className={isLazy ? "lazy" : ""}
    srcSet={isLazy ? "" : srcSet}
    data-srcset={srcSet}
    data-src={src}
    style={style}
    onClick={onClick}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

Image.defaultProps = {
  onClick: () => {},
  isLazy: false
};

export default Image;

```

Create App.js

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "./Image";
import useIO from "./useIO";
import fallbackImage from "./logo.svg";

function App() {
  const [data, setData] = useState([]);

  const [observer, setElements, entries] = useIO({
    threshold: 0.25,
    root: null
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res.data.slice(0, 15));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (data.length) {
      let img = Array.from(document.getElementsByClassName("lazy"));
      setElements(img);
    }
  }, [data, setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    });
  }, [entries, observer]);

  const images = data.map((item) => (
    <Image
      key={item.id}
      src={item.thumbnailUrl}
      fallbackSrc={fallbackImage}
      isLazy
      style={{
        display: "block",
        height: "150px",
        width: "150px",
        margin: "auto",
        marginBottom: "15px"
      }}
      alt="thumbnails"
    />
  ));
  return <div className="App">{images}</div>;
}

export default App;

```

### Result
See [Codesandbox](https://codesandbox.io/s/determined-https-d4hyk?file=/src/App.js)

