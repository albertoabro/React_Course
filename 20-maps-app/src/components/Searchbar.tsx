import { ChangeEvent, useContext, useRef } from "react"
import { MapContext } from "../context/map/MapContext";
import { PlacesContext } from "../context/places/PlacesContext";
import { SearchResult } from "./SearchResult";

declare const maplibregl: any;
declare const MaplibreGeocoder: any;

export const Searchbar = () => {

    const debounceRef = useRef<NodeJS.Timeout>(setTimeout(() => {}, 0));

    const { map } = useContext(MapContext);
    const { searchPlacesByTerm } = useContext(PlacesContext);

    const handlerQueryChanged = ( event: ChangeEvent<HTMLInputElement>) => {
        if(debounceRef.current)
            clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(() => {
            const query = event.target.value;
            searchPlacesByTerm(query);
        }, 350);

        if(!map) throw new Error('Map not ready');

    }

    return (
        <div className="search-container">
            <input 
                type="text"
                placeholder="Search for places..."
                className="form-control"
                onChange={handlerQueryChanged}
            />

            <SearchResult />
        </div>
    )
}
