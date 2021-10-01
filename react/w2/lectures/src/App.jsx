import React from "react";
import JsxSyntax from "./3-jsx/JsxSyntax";
// import <Comp1 from "./4-making-components/Comp1";
// import Mapping from "./7-mapping/Mapping";
import Parent from "./8-props/Parent";
import message2, { message, messag } from "./5-export-import/exports";

// Default Export -> import anyNameYouWant from './file-path'

const App = () => {
  return (
    <div>
      {/* <JsxSyntax />
      {message2} */}
      {/* <Comp1 /> */}
      {/* <Mapping /> */}
      <Parent />
    </div>
  );
};

export default App;
