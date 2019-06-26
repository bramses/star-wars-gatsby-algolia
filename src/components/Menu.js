import React from "react"
/**
 * 
 * @param {Object[]} items - A list of facets
 * @param {Object} item - A singleton item
 * @param {boolean} item.isRefined - get current refinement
 * @param {String} item.label - label of refinement
 * @param {Number} item.count - how many objects in refinement
 * @param {Function} refine - function run on user interaction to change the query
 * @param {String} title - title for the facet list 
 */
const Menu = ({ items, refine, title }) => (
    <div>
        <p className="star-wars-facet" style={{ marginLeft: '15px'}}>{title}</p>
        <hr className="star-wars-hr"/>
        <ul>
            {items.map(item => (
                <li style={{ listStyle: 'none' }} key={item.value}>
                    <a style={{ fontWeight: item.isRefined ? 'bold' : '', textDecoration: 'none' }} className="star-wars-facet" onClick={event => {
                        event.preventDefault();
                        refine(item.value);
                    }}>
                        {item.label} ({item.count})
          </a>
                </li>
            ))}
        </ul>
    </div>

)

export default Menu