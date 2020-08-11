import React, { useRef, useEffect } from "react";

export function Header() {
  const textWrapper = useRef(null);
  const suggestions = [
    "react",
    "redux",
    "custom hooks",
    "redux-saga",
    "lazy-loading",
    "react-memo",
    "context API",
    "custom webpack config",
    "virtual-dom-timer",
    "movie search",
    "weather search",
  ];
  const speed = 100;
  let charCounter = 0;
  let currentIndex = 0;
  let currentText = suggestions[0];
  let timeOut = null;
  let forward = true;

  const createAnimation = () => {
    if (charCounter < currentText.length && charCounter > -1) {
      textWrapper.current.innerHTML = forward
        ? textWrapper.current.innerHTML + currentText.charAt(charCounter)
        : textWrapper.current.innerHTML.replace(/(\s+)?.$/, "");
      charCounter = forward ? charCounter + 1 : charCounter - 1;
      timeOut = setTimeout(createAnimation, speed);
    } else if (charCounter === currentText.length) {
      forward = false;
      charCounter -= 1;
      timeOut = setTimeout(createAnimation, speed * 4);
    } else if (charCounter === -1) {
      currentIndex =
        currentIndex + 1 === suggestions.length ? 0 : currentIndex + 1;
      currentText = suggestions[currentIndex];
      charCounter = 0;
      forward = true;
      timeOut = setTimeout(createAnimation, speed);
    }
  };

  useEffect(() => {
    createAnimation();
    return function cleanup() {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <span className="diff">
          <span className="heading">This app contains</span>
          {"  "}
          <h1 className="heading" ref={textWrapper}>
            {""}
          </h1>
        </span>
        <h2 className="hide-on-mobile">Counter: Keep Counting</h2>
        <h3 className="hide-on-mobile">Get Users List</h3>
      </header>
    </>
  );
}
