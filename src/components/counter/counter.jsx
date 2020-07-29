import React, { useContext } from "react";
import { INCREMENT, DECREMENT } from "../../containers/counter/constants";
import { LanguageContext } from "../../context/Language";

export default function Counter({ counter, dispatch, ...props }) {
  const { languages, selectedLanguage } = useContext(LanguageContext);

  const counterLabel = languages[selectedLanguage].counter;

  const incrementLabel = languages[selectedLanguage].increment;

  const decrementLabel = languages[selectedLanguage].decrement;

  return (
    <div>
      <h2>
        {counterLabel}: {counter}
      </h2>
      <button onClick={() => dispatch({ type: INCREMENT })}>
        {incrementLabel}
      </button>
      <button onClick={() => dispatch({ type: DECREMENT })}>
        {decrementLabel}
      </button>
    </div>
  );
}
