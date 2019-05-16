import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby";


const IndexPage = ({ data }) => (
  <Layout>
    <div>
      {data.swapi.allPersons.map(person => {
        return <p>{person.name}</p>
      })}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  swapi {
    allPersons {
      name
      birthYear
      height
      species {
        name
      }
      mass
      homeworld {
        name
      }
      vehicles {
        name
      }
    }
  }
}
`