import React from "react"
import { Highlight } from "react-instantsearch-dom"

/**
 * 
 * @param {Object} hit - the hit is the singleton result from a query passed into the component
 */
const Character = ({ hit }) => (
    <div>
        <h2 className="star-wars">
            <Highlight hit={hit} attribute="name" />
        </h2>
        <span className="star-wars-subtitle">Height: {hit.height ? `${hit.height}cm` : 'NO HEIGHT FOUND'}</span>     
        <span className="star-wars-subtitle">Birth Year: {hit.birthYear ? `${hit.birthYear} BBY` : 'NO BIRTH YEAR FOUND'}</span>
        <span className="star-wars-subtitle">Species:  <Highlight hit={hit} attribute="species[0].name" /></span>
        <span className="star-wars-subtitle">Homeworld: <Highlight hit={hit} attribute="homeworld.name" /></span>
    </div>
  )
  
  export default Character