import "./App.css";


import "instantsearch.css/themes/satellite.css";
import {
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-dom";
import styled from "styled-components";
import MoviesHits from "./components/moviesHits";
import { searchClient } from "./typesenseAdapter";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

function App() {

  return (
    <AppContainer>
      <h2>React/Typesense Movies InstantSearch</h2>
      <InstantSearch indexName="movies" searchClient={searchClient}>
        <h4>Search Movies</h4>
        <SearchBox />
        <RefinementList attribute="genres" />
        <MoviesHits />
        <Pagination />
      </InstantSearch>
    </AppContainer>
  );
}

export default App;
