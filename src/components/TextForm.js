// src/components/TextForm.js
import React, { useState } from 'react';

export default function TextForm(props) {
  // State for the input text. Transformations will update this state directly.
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
     // Example of prop usage
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  // 3. Alternating Case
  const handleAlternatingCaseClick = () => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
    setText(result); // Update the 'text' state
   }

  // 4. Title Case
  const handleTitleCaseClick = () => {
    const result = text
      .toLowerCase()
      .split(' ')
      .map((word) => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
    setText(result); // Update the 'text' state
  };

  // 5. Wide Text Generator (Full-width characters)
  const handleWideTextClick = () => {
    const wideChars = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９！＠＃＄％＾＆＊（）＿＋－＝～｀［］｛｝；：＇＂＜＞，．？／＼｜';
    const normalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~`[]{}取締役;:\'"<>,.?/\\|';
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = normalChars.indexOf(char);
      if (index !== -1) {
        result += wideChars[index];
      } else {
        result += char;
      }
    }
    setText(result); // Update the 'text' state
  };

  // 6. Zalgo Glitch Text Generator
  const handleZalgoTextClick = () => {
    const up = ['̍', '̎', '̄', '̅', '̕', '̛', '̊', '̐', '͒', '͗', '͕', '͔', '͕', '͙', '͚'];
    const down = ['̣', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '͓', '͔', '͕', '͖', '͙', '͚'];
    const mid = ['̕', '̛', '̀', '́', '͂', '̓', '̈́', 'ͅ', '͆', '͌', '͑', '͒', '͗', '͐', '͑', '͒', '͗', '͑', '͒', '͗'];

    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      result += char;
      for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
        result += up[Math.floor(Math.random() * up.length)];
      }
      for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
        result += down[Math.floor(Math.random() * down.length)];
      }
      for (let j = 0; j < Math.floor(Math.random() * 2); j++) {
        result += mid[Math.floor(Math.random() * mid.length)];
      }
    }
    setText(result); // Update the 'text' state
  };

  // 7. Bold Text Generator (using Unicode Math Bold characters)
  const handleUnicodeBoldTextClick = () => {
    const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const bold = '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵';
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = normal.indexOf(char);
      if (index !== -1) {
        result += bold[index];
      } else {
        result += char;
      }
    }
    setText(result); // Update the 'text' state
  };

  // Handler for when the textarea content changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleAlternatingCaseClick}>Alternating Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTitleCaseClick}>Title Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleWideTextClick}>Wide Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleZalgoTextClick}>Zalgo Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUnicodeBoldTextClick}>Unicode Bold</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p> {wordCount} words and {text.length} characters </p>
        <p> {0.008 * wordCount} Minutes Read</p> {/* Assuming 1 word per 0.008 minutes */}
        <h2>Preview</h2>
        <p> {text.length > 0 ? text : "Enter something in the textbox above to preview it here."} </p>
      </div>
    </>
  );
}