import { useState } from "react";
import Hello from "./Components/Hello";
import Fruits from "./Components/fruits";
import ConditionalComponent from "./Components/ConditionalComponent";
import AltConditional from "./Components/AltConditional";
import TerneryOperator from "./Components/TerneryOperator";
import EvenHandling from "./Components/EvenHandling";
import State from "./Components/State";
import FormInput from "./Components/FormInput";
import InlineStyling from "./Components/InlineStyling";
import CssStyling from "./Components/CssStyling";
import LearningModulesStyling from "./Components/ModulesStyling";

function App() {
  const seatNumbers = [1, 4, 7];
  const name = "Dan Kahora";
  return (
    <div className="App">
      <div>
        <Hello message={`my name is ${name}`} seatNumbers={seatNumbers} />
        <Fruits />
        <ConditionalComponent></ConditionalComponent>
        <AltConditional></AltConditional>
        <TerneryOperator></TerneryOperator>
        <EvenHandling></EvenHandling>
        <State></State>
        <FormInput></FormInput>
        <InlineStyling></InlineStyling>
        <CssStyling></CssStyling>
        <LearningModulesStyling></LearningModulesStyling>
      </div>
    </div>
  );
}

export default App;
