import React, { useState } from 'react'
import List from './List'
import InputArea from './InputArea'

function App() {
  // all elements that needs updating
  let [listItems, setListItems] = useState([])

  // general action
  function addItem(inputText, setInputText) {
    setListItems((prevItems) => {
      if (inputText === '') {
        return prevItems
      } else {
        return [...prevItems, inputText]
      }
    })
    setInputText('')
  }

  function deleteItem(id) {
    setListItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdded={addItem} />
      <div>
        <ul>
          {listItems.map((item, index) => (
            <List item={item} key={index} id={index} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
