import React, { useState } from 'react'

function InputArea(props) {
  // all elements that needs updating
  let [inputText, setInputText] = useState('')

  function handleChange(event) {
    let newVal = event.target.value
    setInputText(newVal)
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        placeholder=""
        value={inputText}
      ></input>
      <button
        onClick={() => {
          props.onAdded(inputText, setInputText)
        }}
      >
        <span>Add</span>
      </button>
    </div>
  )
}

export default InputArea
