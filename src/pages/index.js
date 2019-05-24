import React from "react"
import Character from "../components/Character"
import { InstantSearch, Hits, Panel, connectStats, connectMenu, connectSearchBox } from "react-instantsearch-dom"
import Stats from '../components/Stats'
import Menu from '../components/Menu'
import algoliasearch from "algoliasearch/lite"
import SearchBox from '../components/SearchBox'
import "../components/layout.css"
import logo from '../images/algolia-logo.png'


const searchClient = algoliasearch('E3BK84RLOX', 'd0c29da656425b95e8ae948c9e476c07')
const CustomStats = connectStats(Stats)
const CustomMenu = connectMenu(Menu)
const CustomSearch = connectSearchBox(SearchBox)

const IndexPage = () => (
  <div className="row">
    <img src={logo} alt="Algolia Wars Logo" className="star-wars-logo"/>
    <InstantSearch indexName="star-wars-characters" searchClient={searchClient}>
      <Panel>
        <CustomSearch />
        <CustomStats />
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