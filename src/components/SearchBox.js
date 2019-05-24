import React from "react"

const SearchBox = ({ currentRefinement, refine }) => (
    <div >
        <input 
            className="star-wars-input"
            type="search"
            placeholder="Search for characters or species..."
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
        />
    </div>
)

export default SearchBox