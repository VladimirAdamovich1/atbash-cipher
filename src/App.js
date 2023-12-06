import React, { useState } from "react";
import "./App.css";
function App() {
  const [option, setOption] = useState("encoded");
  const messageRef = React.createRef();
  const finalMessageRef = React.createRef();

  const toAtbash = (text) => {
    const chars = text.split("");
    const output = chars.map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(155 - code);
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(219 - code);
      }
      return char;
    });
    return output.join("");
  };

  const updateResult = () => {
    finalMessageRef.current.value = toAtbash(messageRef.current.value);
  };

  const switchOption = () => {
    const enc = document.querySelector(".enc");
    const dec = document.querySelector(".dec");
    const choce = document.querySelector(".choce");
    if (enc.classList.contains("choce-col")) {
      enc.classList.remove("choce-col");
      dec.classList.add("choce-col");
      choce.classList.remove("to-enc");
      choce.classList.add("to-dec");
      setOption("decoded");
    } else {
      enc.classList.add("choce-col");
      dec.classList.remove("choce-col");
      choce.classList.remove("to-dec");
      choce.classList.add("to-enc");
      setOption("encoded");
    }
  };

  return (
    <div className="atbash">
      <img className="circle" src="img/circle.png" alt="" />
      <img className="line" src="img/line.png" alt="" />
      <img className="main" src="img/main.png" alt="" />
      <div className="cipher">
        <div className="h1-block">
          <h1>Atbash Cipher</h1>
          <div className="sh-rect"></div>
        </div>
        <input
          ref={messageRef}
          onChange={updateResult}
          className="message"
          type="text"
          placeholder="Enter a massage"
        />
        <div className="options">
          <p>choose an option</p>
          <div className="double-button">
            <div className="choce"></div>
            <button onClick={switchOption} className="enc choce-col">
              Encode
            </button>
            <button onClick={switchOption} className="dec">
              Decode
            </button>
          </div>
        </div>
        <div className="final-message">
          <p>Your {option} message</p>
          <textarea disabled ref={finalMessageRef} />
        </div>
      </div>
    </div>
  );
}
export default App;
