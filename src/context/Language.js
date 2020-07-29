import React, { createContext, Component } from "react";

export const LanguageContext = createContext();

export class LanguageContextProvider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { languages } = this.props;
    return (
      <>
        <LanguageContext.Provider value={languages}>
          {this.props.children}
        </LanguageContext.Provider>
      </>
    );
  }
}
