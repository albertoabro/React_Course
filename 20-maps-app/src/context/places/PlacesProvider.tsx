import { JSX, useEffect, useMemo, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { INITIAL_STATE, placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";
import { Feature } from "../../interfaces/places";
import { geocoderApi } from "../../apis/searchApi";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
};

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const PlacesProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
        if(!query){
            dispatch({type: "setPlaces", payload: [] });
            return [];  
        } 
        if(!state.userLocation) throw new Error('User location not ready');

        dispatch({ type: 'setLoadingPlaces'});
        
        const resp = await geocoderApi.forwardGeocode({ query });
        console.log(resp)
        dispatch({ type: 'setPlaces', payload: resp.features });
        return resp.features;
    }

    useEffect(() => {
        const handleUserInteraction = () => {
            getUserLocation()
                .then(coords => {
                    dispatch( { type: "setUserLocation", payload: coords} )} )
                .catch(error => console.error("Error", error));

            document.removeEventListener("click", handleUserInteraction);
        };

        document.addEventListener("click", handleUserInteraction);
    }, []);
    
    const value = useMemo(() => ({
        ...state,
        searchPlacesByTerm
    }), [state]);

    return (

    <PlacesContext.Provider value={value}>
        {children}
    </PlacesContext.Provider>
  )
}
