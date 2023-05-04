import React, { useState } from 'react'

function InputField(props) {
  // data keeps updating
  let [inputSection, setInputSection] = useState({
    title: '',
    content: '',
  })

  function handleChange(event) {
    let { className, value } = event.target
    setInputSection((prevSection) => {
      return {
        ...prevSection,
        [className]: value,
      }
    })
  }

  function addNote(event) {
    props.onAdded(inputSection)
    event.preventDefault()
  }

  return (
    <form onSubmit={addNote}>
      <input
        className="title"
        type="text"
        placeholder="Title"
        value={inputSection.title}
        onChange={handleChange}
        size="100"
      ></input>
      <input
        className="content"
        type="text"
        placeholder="Take a note..."
        value={inputSection.content}
        onChange={handleChange}
        size="400"
      ></input>
      <button className="add" type="submit">
        Add
      </button>
    </form>
  )
}

export default InputField
