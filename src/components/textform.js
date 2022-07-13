import React, {useState} from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text;
    setText(newText.toUpperCase());
    props.showAlert("The text has been converted to Uppercase!", "Sucess");
  };
  const handleDownClick = () => {
    let newText = text;
    setText(newText.toLowerCase());
    props.showAlert("The text has been converted to Lowercase!", "Sucess");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const WordCount = () => {
    let arr = text.split(" ");
    if (arr.length == 1 && arr[0] == "") {
      return 0;
    } else {
      return arr.length;
    }
  };
  const clear = () => {
    setText("");
    props.showAlert("The text has been cleared!", "Sucess");
  };
  const swapcase = () => {
    let newtext = text;
    let final = "";
    for (let i = 0; i < newtext.length; i++) {
      if (newtext[i] == newtext[i].toLowerCase()) {
        final += newtext[i].toUpperCase();
      } else {
        final += newtext[i].toLowerCase();
      }
    }
    setText(final);
    props.showAlert("The case of the text has been swapped!", "Sucess");
  };
  const removextraspace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("The extra spaces in the text has been removed!", "Sucess");
  };
  const handlecopy = () => {
    let newtext = document.getElementById("TextArea");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("The text has been copied!", "Sucess");
  };
  const [text, setText] = useState("");
  return (
    <>
      <h2 className={`text-${props.mode == "light" ? "dark" : "light"}`}>
        {props.heading}
      </h2>
      <div className="mb-3 my-3">
        <textarea
          className={`form-control text-${
            props.mode == "light" ? "dark" : "light"
          } bg-${props.mode}`}
          id="TextArea"
          value={text}
          rows="12"
          onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={swapcase}>
        Swap Case
      </button>
      <button className="btn btn-primary mx-2" onClick={clear}>
        Clear
      </button>
      <button className="btn btn-primary mx-2" onClick={removextraspace}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>
        Copy Text
      </button>
      <h2 className={`my-4 text-${props.mode == "light" ? "dark" : "light"}`}>
        Text Summary
      </h2>
      <div className={`text-${props.mode == "light" ? "dark" : "light"}`}>
        <div>No of characters in your text: {text.length}</div>
        <div>No of words in your text: {WordCount()}</div>
        <div>
          Estimated time required to read your text: {0.008 * WordCount()} mins
        </div>
      </div>
    </>
  );
}
