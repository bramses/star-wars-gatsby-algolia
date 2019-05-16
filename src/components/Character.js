import React from "react"
import { Highlight } from "react-instantsearch-dom"

const Character = ({ hit }) => (
    <div>
        <h2 className="star-wars">
            <Highlight hit={hit} attribute="name" />
        </h2>
        <span className="star-wars-subtitle">Height: {hit.height}cm</span>
        <br />
        <br />
        <span className="star-wars-subtitle">Birth Year: {hit.birthYear}</span>
    </div>
  )
  
  export default Character