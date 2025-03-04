import { useContext } from "react"
import { MapContext } from "../context/map/MapContext";
import { PlacesContext } from "../context/places/PlacesContext";


export const BtnMyLocation = () => {

    const { map } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);

    const handlerClick = () => {
        if(!map) throw new Error('Map not ready');
        if(!userLocation) throw new Error('User location not ready');

        map.flyTo({
            zoom: 14,
            center: userLocation
        })
    }

    return (
        <button 
            className="btn btn-primary"
            onClick={handlerClick}
            style={{
                position: "fixed",
                top: '20px',
                right: '20px',
                zIndex: 1
            }}
        >
            My Location
        </button>
    )
}
