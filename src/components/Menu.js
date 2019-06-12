import React from "react"

const Menu = ({ items, refine, title }) => (
    <div>
        <p className="star-wars-facet" style={{ marginLeft: '15px'}}>{title}</p>
        <hr className="star-wars-hr"/>
        <ul>
            {items.map(item => (
                <li style={{ listStyle: 'none' }} key={item.value}>
                    <a href="#" style={{ fontWeight: item.isRefined ? 'bold' : '', textDecoration: 'none' }} className="star-wars-facet" onClick={event => {
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