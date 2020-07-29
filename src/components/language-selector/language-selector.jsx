import React from "react";
import { Select } from "../../common/select/select";
import uuid from "react-uuid";

export const LanguageSelector = ({ setLanguage, selectedLanguage }) => (
    <div>
        <span>Change Lanuage:</span>
        <Select key={uuid()} setLanguage={setLanguage} currentLanguage={selectedLanguage} />
    </div>
);