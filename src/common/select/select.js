import React, { useState, useContext } from "react";
import uuid from "react-uuid";

import { LanguageContext } from "../../context/Language";
import { capitalizeFirstLetter } from "../utils/utils";

export function Select({ setLanguage, currentLanguage }) {
  const { languages: options } = useContext(LanguageContext);

  return (
    <>
      <select className="select-css" onChange={setLanguage} value={currentLanguage}>
        {options &&
          Object.keys(options).map((item, index) => {
            return (
              <option key={uuid()} value={item}>
                {capitalizeFirstLetter(item)}
              </option>
            );
          })}
      </select>
    </>
  );
}
