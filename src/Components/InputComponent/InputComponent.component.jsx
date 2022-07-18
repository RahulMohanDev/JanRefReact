import React from "react";

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <>
        <input defaultValue={"Rahul Mohan"} ref={this.inputRef} id="123"/>
        <button
          onClick={() => {
            // documment.querySelector("#123").focus();
            this.inputRef.current.focus();
          }}
        >
          Focus on Input
        </button>
      </>
    );
  }
}
