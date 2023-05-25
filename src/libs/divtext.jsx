import React from "react";

function TextWithDiv(props) {
  const text = props.text;
  const maxLength = +props.maxLength;
  const slicedTexts = [];
  console.log(text.length);
  // Découper le texte au dernier point avant la longueur maximale
  let startIndex = 0;
  while (startIndex < text.length) {
    let endIndex = startIndex + maxLength;
    if (endIndex >= text.length) {
      endIndex = text.length;
    } else {
      endIndex = text.lastIndexOf(".", endIndex);
      if (endIndex === -1) {
        endIndex = startIndex + maxLength;
      }
    }
    slicedTexts.push(text.slice(startIndex, endIndex + 1));
    startIndex = endIndex + 1;
  }
  console.log(slicedTexts);

  return (
    <div className="news-slicedTexts">
      {slicedTexts.map((slicedText, index) => (
        <p className="news-slicedText" key={index}>
          {slicedText}
        </p>
      ))}
    </div>
  );
}

export default TextWithDiv;
