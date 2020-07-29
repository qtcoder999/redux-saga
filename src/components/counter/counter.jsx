import React, { useContext } from "react";
import { INCREMENT, DECREMENT } from "../../containers/counter/constants";
import { LanguageContext } from "../../context/Language";
import { capitalizeFirstLetter } from "../../common/utils/utils";

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
        {capitalizeFirstLetter(incrementLabel)}
      </button>
      <button onClick={() => dispatch({ type: DECREMENT })}>
        {capitalizeFirstLetter(decrementLabel)}
      </button>
    </div>
  );
}
