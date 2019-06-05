import React from "react"

const Pagination = ({ currentRefinement, nbPages, refine }) => (
    <ul style={{'marginLeft': '-20%'}}>
        {new Array(nbPages).fill(null).map((_, index) => {
            const page = index + 1;
            const style = {
                textDecoration: currentRefinement === page ? 'underline' : '',
            };

            return (
                <li key={index} className="star-wars-li">
                    <a
                        href="#"
                        style={style}
                        className="star-wars-li-a"
                        onClick={event => {
                            event.preventDefault();
                            refine(page);
                        }}
                    >
                        {page}
                    </a>
                </li>
            );
        })}
    </ul>
)


export default Pagination