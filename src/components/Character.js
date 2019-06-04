import React from "react"
import { Highlight } from "react-instantsearch-dom"

const Character = ({ hit }) => (
    <div>
        <h2 className="star-wars">
            <Highlight hit={hit} attribute="name" />
        </h2>
        <span className="star-wars-subtitle">Height: {hit.height ? `${hit.height}cm` : 'NO HEIGHT FOUND'}</span>
        <br />
        <br />
        <span className="star-wars-subtitle">Birth Year: {hit.birthYear ? `${hit.birthYear} BBY` : 'NO BIRTH YEAR FOUND'}</span>
        <br />
        <br />
        <span className="star-wars-subtitle">Species: {hit.species ? hit.species[0] ? hit.species[0]["name"] ? `${hit.species[0]["name"]}` : 'NO SPECIES FOUND' : 'NO SPECIES FOUND' : 'NO SPECIES FOUND'}</span>
        <br />
        <br />
        <span className="star-wars-subtitle">Homeworld: {hit.homeworld ? hit.homeworld.name ? `${hit.homeworld.name}` : 'NO HOMEWORLD FOUND' : 'NO HOMEWORLD FOUND'}</span>
    </div>
  )
  
  export default Character