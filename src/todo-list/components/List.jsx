import React from 'react'

function List(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id)
      }}
    >
      <li key={props.index}>{props.item}</li>
    </div>
  )
}

export default List
