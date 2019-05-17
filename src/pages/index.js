import React from "react"
import Character from "../components/Character"
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom"
import algoiasearch from "algoliasearch/lite"

const searchClient = algoiasearch('E3BK84RLOX', 'd0c29da656425b95e8ae948c9e476c07')

const IndexPage = () => (
  <div>
    <InstantSearch indexName="characters" searchClient={searchClient}>
        <SearchBox />
        <Hits hitComponent={Character} />
    </InstantSearch>
  </div>
)

export default IndexPage