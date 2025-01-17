import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { useForm } from "../hooks/useForm"
import { HeroCard } from "./HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showNotFound = (q.length > 0) && heroes.length === 0;

  const {searchHero, onInputChange} = useForm({
    searchHero: q
  });


  const handleSearchHero = (event) => {
    event.preventDefault();

    navigate(`?q=${ searchHero }`);

  };

    return (
      <>

        <h1>Search</h1>
        <hr/>
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr/>

            <form onSubmit={ handleSearchHero }>
              <input 
              type="text" 
              placeholder="Search"
              className="form-control"
              name="searchHero"
              autoComplete="off"
              value={searchHero}
              onChange={onInputChange}
            />
            </form>
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr/>

            <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none' }}>
              Search a Hero
            </div>

            <div className="alert alert-info animate__animated animate__fadeIn" style={{display: showNotFound ? '' : 'none'}}>
              There's a not results with <b>{ q }</b>
            </div>
            
            {
              heroes.map( hero => 
                <HeroCard key={hero.id} {...hero}/>  
            )}
          </div>
        </div>
                     
      </>
    )
  }
  