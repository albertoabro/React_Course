import { JSX, useContext, useEffect, useMemo, useReducer } from "react";
import { MapContext } from "./MapContext";
import { INITIAL_STATE, mapReducer } from "./MapReducer";
import { PlacesContext } from "../places/PlacesContext";


declare const maplibregl: any;
declare const Marker: any;

export interface MapState {
    isMapReady: boolean;
    map?: typeof maplibregl;
    markers: typeof Marker[];
};

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const MapProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
    const { places } = useContext(PlacesContext);

    useEffect(() =>{
        state.markers.forEach( marker => marker.remove() );

        const newMarkers: typeof Marker[] = [];

        for (const place of places) {
            const [ lgn, lat ] = place.center;
            console.log(lgn, lat)
            const popup = new maplibregl.Popup()
                .setHTML(`
                        <h6>${ place.properties.name }</h6>
                        <p>${ place.properties.display_name }</p>
                    `);
            
            const newMarker = new maplibregl.Marker()
                .setPopup( popup )
                .setLngLat([ lgn, lat ])
                .addTo( state.map );

            newMarkers.push( newMarker );
        };

        dispatch({type: "setMarkers", payload: newMarkers});
    }, [ places ])

    const setMap = (map: typeof maplibregl) => {

        const myLocationPopup = new maplibregl.Popup()
            .setHTML(`<h4>I am here </h4>`);

        new maplibregl.Marker({
            color: '#61DAFB'
        })
            .setLngLat(map.getCenter())
            .setPopup( myLocationPopup )
            .addTo(map);

        dispatch({ type: "setMap", payload: map});
    };
 
    const value = useMemo(() => ({
        ...state,
        setMap
    }), [state]);

    return (
        <MapContext.Provider value={value}>
            {children}
        </MapContext.Provider>
    )
}
