import React from "react"
import Character from "../components/Character"
import { InstantSearch, Hits, Panel, connectStats, connectMenu, connectSearchBox, connectPagination, PoweredBy } from "react-instantsearch-dom"
import Stats from '../components/Stats'
import Menu from '../components/Menu'
import Pagination from '../components/Pagination'
import algoliasearch from "algoliasearch/lite"
import SearchBox from '../components/SearchBox'
import "../components/layout.css"
import logo from '../images/algolia-logo.png'

// instansiating our Algolia index
const searchClient = algoliasearch('E3BK84RLOX', 'd0c29da656425b95e8ae948c9e476c07')

// custom connector components
const CustomStats = connectStats(Stats)
const CustomMenu = connectMenu(Menu)
const CustomSearch = connectSearchBox(SearchBox)
const CustomPagination = connectPagination(Pagination)

// the index page sets up our React Instant Search implementation
const IndexPage = () => (
  <div className="row">
    <a href="https://github.com/bramses/star-wars-gatsby-algolia">
      <img src={logo} alt="Algolia Wars Logo" className="star-wars-logo" />
    </a>
    <InstantSearch indexName="star-wars-characters" searchClient={searchClient}>
      <Panel>
        <CustomSearch />
        <CustomStats />
        <PoweredBy />
        <div className="column left">
          <CustomMenu title="HOMEWORLD" attribute="homeworld.name" />
          <br />
          <CustomMenu title="SPECIES" attribute="species.name" />
        </div>
        <div className="column right">
          <Hits hitComponent={Character} />
          <CustomPagination />
        </div>
      </Panel>
    </InstantSearch>
  </div>
)

export default IndexPage