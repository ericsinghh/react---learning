import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"  }}>
      <img src="https://imgs.search.brave.com/4R2FRo5z0VVWPfUd6UHSZ74NdQmOH4gLCiX3FuzuS40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ByaW5nYm9hcmQu/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDYv/Y29kaW5nLS5wbmc"
      alt="" width={333} style={{border: "2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>

    </div>
  )
}

export default Card
