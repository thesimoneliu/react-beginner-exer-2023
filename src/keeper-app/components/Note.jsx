import React from 'react'

function Note(props) {
  function truncateStr(str) {
    return str.substring(0, 100)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{truncateStr(props.content)}</p>
      <button
        className="delete"
        onClick={() => {
          props.onDelete(props.keyIndex)
        }}
      >
        DELETE
      </button>
    </div>
  )
}

export default Note
