import { useContext, useState } from "react"
import { PlacesContext } from "../context/places/PlacesContext"
import { LoadingPlaces } from "./LoadingPlaces";
import { Feature } from "../interfaces/places";
import { MapContext } from "../context/map/MapContext";

export const SearchResult = () => {
    
    const [activeId, setActiveId] = useState<number | string>('');
    const { places, isLoadingPlaces } = useContext(PlacesContext);
    const { map } = useContext(MapContext);

    const handlePlaceClicked = ( place: Feature) => {
        const [ lng, lat ] = place.center;

        setActiveId( place.properties.place_id);
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    };

    if( isLoadingPlaces )
       return <LoadingPlaces />;


    return (
        <ul className="list-group mt-3">

            {
                places.map( place  => (
                    
                    
                    <li 
                        key={place.properties.place_id} 
                        className={`list-group-item list-group-item-action pointer ${activeId === place.properties.place_id ? 'active' : '' }`}
                        onClick={() => handlePlaceClicked(place)}
                    >
                        
                        <h6>{ place.properties.name }</h6>
                        <p 
                            style={{
                                fontSize: '12px' 
                            }}
                        >
                            { place.properties.display_name }
                        </p>

                        <button className={`btn btn-outline-primary btn-sm ${activeId === place.properties.place_id ? 'btn-outline-light' : 'btn-outline-primary' }`}>
                            Addresses
                        </button>

                    </li>
                ))
            }
        </ul>
    )
}
