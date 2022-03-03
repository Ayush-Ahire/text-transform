import React from "react";
import { useState } from "react";

export default function Textbox(props) {
  const [Text, setText] = useState("");
  // this function converts text to uppercase
  const Uppercase = () => {
    console.log("you have clicked uppercase" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  // this function converts text to lowercase
  const Lowercase = () => {
    console.log("you have clicked lowercase" + Text);
    // let newText= Text.toLowerCase();
    let newText = Text.toLowerCase();
    setText(newText);
  };
  // this function converts the first letter of everyword capital
  const capitalFirstLetter = () => {
    let words = Text.split(" ");
    let uppercaseword = " ";
    words.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(uppercaseword);
  };

  // this function removes extra spaces
  const handleExtraSpaces = () => {
    let newText = Text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  // this function change the state of the input
  const ChangeCase = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="container my-5 text_box">
          <h1
            className={`titles mx-1 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {props.heading}
          </h1>
          <div className="text-box">
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#282C35",
              }}
              className={`form-control text-box text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              value={Text}
              onChange={ChangeCase}
              rows="5"
            ></textarea>
          </div>
          <br />
          <button className="btn btn-primary btn-md mx-2" onClick={Uppercase}>
            UpperCase
          </button>
          <button className="btn btn-primary btn-md  mx-2" onClick={Lowercase}>
            LowerCase
          </button>
          <button
            className="btn btn-primary btn-md  mx-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary btn-md  mx-2"
            onClick={capitalFirstLetter}
          >
            Capitalize
          </button>
        </div>
        <div className="container my-3 ">
          <h5
            className={`titles mx-1 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            Your Text Summary
          </h5>
          <h5
            className={`text_info mx-1 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            Your have entered {Text.split(" ").length} words and {Text.length}{" "}
            characters in the text box
          </h5>
          <h5
            className={`titles mx-1 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            Your Text Preview
          </h5>
          <p
            className={`preview mx-1 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {Text}
          </p>
        </div>
      </div>
    </>
  );
}
