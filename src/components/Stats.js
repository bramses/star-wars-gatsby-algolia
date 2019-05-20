import React from "react"

const Stats = ({processingTimeMS, nbHits}) => (
    <p className="star-wars-stats">
        {`Time spent processing: ${processingTimeMS}ms :: Results ${nbHits}`}
    </p>
)

export default Stats
