import { Feature } from '../../interfaces/places';
import { PlacesState } from "./PlacesProvider";

type Action =
    | { type: 'setUserLocation'; payload: [number, number] }
    | { type: 'setLoadingPlaces' }
    | { type: 'setPlaces'; payload: Feature[]};

export const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
};

const actionMap: Record<Action['type'], (state: PlacesState, action: Action) => PlacesState> = {
    
    setUserLocation: (state, action ) => {
        const { payload } = action as {type: 'setUserLocation'; payload: [number, number]};

        return{
            ...state,
            isLoading: false,
            userLocation: payload
    }},

    setPlaces: (state, action ) => {
        const { payload } = action as { type: 'setPlaces'; payload: Feature[]};
        
        return {
            ...state,
            isLoadingPlaces: false,
            places: payload
    }},

    setLoadingPlaces: (state) => ({
        ...state,
        isLoadingPlaces: true,
        places: []
    }),
};

export const placesReducer = (state: PlacesState, action: Action): PlacesState => {
    const handler = actionMap[action.type]
    return handler ? handler(state, action) : state
};
