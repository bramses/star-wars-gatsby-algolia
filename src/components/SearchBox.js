import React from "react"

const SearchBox = ({ currentRefinement, refine }) => (
    <div >
        <input 
            className="star-wars-input"
            type="search"
            placeholder="🔍 Luke Skywalker"
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
        />
    </div>
)

export default SearchBox