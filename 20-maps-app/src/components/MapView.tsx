import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext } from "../context/places/PlacesContext"
import { Loading } from "./Loading";
import { MapContext } from "../context/map/MapContext";

declare const maplibregl: any;

export const MapView = () => {

    const { isLoading, userLocation} = useContext(PlacesContext);
    const { setMap } = useContext(MapContext);
    const mapDiv = useRef<HTMLDivElement> (null);

    useLayoutEffect(() => {
        if(!isLoading){
            const MAP_TILER_KEY = import.meta.env.VITE_MAP_TILER_KEY;
            let map = new maplibregl.Map({
                container: mapDiv.current!, // container id
                style: `https://api.maptiler.com/maps/openstreetmap/style.json?key=${MAP_TILER_KEY}`, // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 14 // starting zoom
            });

            setMap(map);
        }

    }, [isLoading])
    
    if ( isLoading )
        return (<Loading />)

    return (
        <div ref={ mapDiv }
            style={{
                backgroundColor: 'red',
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        >
        {
            userLocation?.join(', ')  
        }
        </div>
    )
}
