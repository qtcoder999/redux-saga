import React, { useContext } from "react";
import { INCREMENT, DECREMENT } from "../../containers/counter/constants";
import { LanguageContext } from "../../context/Language";

export default function Counter({ counter, dispatch, ...props }) {
  const { languages, selectedLanguage } = useContext(LanguageContext);

  const counterLabel =
    selectedLanguage !== "" ? languages[selectedLanguage].counter : "Counter";

  const incrementLabel =
    selectedLanguage !== ""
      ? languages[selectedLanguage].increment
      : "Increment";

  const decrementLabel =
    selectedLanguage !== ""
      ? languages[selectedLanguage].decrement
      : "Decrement";

  return (
    <>
      <h1>
        {counterLabel}: {counter}
      </h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>
        {incrementLabel}
      </button>
      <button onClick={() => dispatch({ type: DECREMENT })}>
        {decrementLabel}
      </button>
    </>
  );
}
