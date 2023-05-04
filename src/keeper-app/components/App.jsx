//example: https://l1pp6.csb.app/

import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import InputField from './InputField'
import Note from './Note'
import noteData from '../note'

let count = noteData.length

function App() {
  let [noteItems, setNoteItems] = useState(noteData)

  function addNote(inputSection) {
    count++
    let { title, content } = inputSection
    setNoteItems((prevItems) => [
      { key: count, title: title, content: content },
      ...prevItems,
    ])
  }

  function deleteNote(keyIndex) {
    console.log(keyIndex)
    setNoteItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.key !== keyIndex
      })
    })
  }

  return (
    <div>
      <Header />
      <InputField onAdded={addNote} />
      {noteItems.map((note, noteIndex) => (
        <Note
          key={noteIndex} //the sequence of the array
          keyIndex={note.key} // the line of data
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
