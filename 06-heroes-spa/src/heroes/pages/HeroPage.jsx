import { useParams, Navigate, useNavigate } from "react-router"
import { getHeroById } from "@/heroes/helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

  const {id} = useParams();
  const hero = useMemo( () => getHeroById(id), [id]);
  const heroImage = `/assets/${id}.jpg`;

  const navigate = useNavigate();

  const onReturn = () => {
    navigate(-1);
  }

  console.log(heroImage);

  if(!hero) 
    return <Navigate to={"/marvel"}/>

    return (
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={heroImage}
            alt={hero.superhero}
            className="img-thumbnail"
          />
          </div>

          <div className="col-8">
            <h3>{hero.superhero}</h3>

            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego} </li>
              <li className="list-group-item"> <b>Publisher: </b> {hero.publisher} </li>
              <li className="list-group-item"> <b>First Appearance: </b> {hero.first_appearance} </li>
            </ul>

            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>

            <button 
              className="btn btn-outline-secondary"
              onClick={onReturn}
            >
              Back
            </button>
          </div>                    
      </div>
    )
  }
  