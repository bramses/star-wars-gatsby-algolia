import React from "react"
import Character from "../components/Character"
import { InstantSearch, Hits, Panel, connectStats, connectMenu, connectSearchBox } from "react-instantsearch-dom"
import Stats from '../components/Stats'
import Menu from '../components/Menu'
import algoiasearch from "algoliasearch/lite"
import SearchBox from '../components/SearchBox'
import "../components/layout.css"


const searchClient = algoiasearch('E3BK84RLOX', 'd0c29da656425b95e8ae948c9e476c07')
const CustomizedStats = connectStats(Stats)
const CustomMenu = connectMenu(Menu)
const CustomSearch = connectSearchBox(SearchBox)
const IndexPage = () => (
  <div className="row">
    <InstantSearch indexName="star-wars-characters" searchClient={searchClient}>
      <Panel>
        <CustomSearch />
        <CustomizedStats />
        <div className="column left">
          <CustomMenu attribute="homeworld.name" />
        </div>
        <div className="column right">
          <Hits hitComponent={Character} />
        </div>
      </Panel>
    </InstantSearch>
  </div>
)

export default IndexPage