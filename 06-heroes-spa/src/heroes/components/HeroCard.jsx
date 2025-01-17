
import PropTypes from 'prop-types'
import { Link } from 'react-router';

const CharactersByHero = ({alter_ego, characters}) => {
  
  return ( alter_ego === characters ) 
    ? <></>
    : <p className='card-text'>{characters}</p>;
}

export const HeroCard = ({
  id, superhero, publisher, alter_ego, first_appearance, characters
}) => {

  const heroImage = `/assets/${id}.jpg`;

  return (
    <div className='col'>
      <div className='card'>
          <div className='row no-gutters animate__animated animate__fadeIn'>
            <div className='col-4'>
              <img src={heroImage} className='card-img' alt={superhero}/>
            </div>

            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title"> {superhero} </h5>
                <p className='card-text'> {alter_ego} </p>
                <CharactersByHero alter_ego={alter_ego} characters={characters}/>
                <p className='card-text'>
                  <small className='text-muted '> {first_appearance} </small>
                </p>

                <Link className='' to={`/hero/${id}`}>
                  More Information... 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired
}

CharactersByHero.propTypes = {
  alter_ego: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired
}