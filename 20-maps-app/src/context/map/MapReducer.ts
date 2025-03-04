import { MapState } from "./MapProvider";

export const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: []
};

declare const maplibregl: any;
declare const Marker: any;

type Action =
    | { type: 'setMap'; payload: typeof maplibregl }
    | { type: 'setMarkers'; payload: typeof Marker[]};

const actionMap: Record<Action['type'], (state: MapState, action: Action) => MapState> = {
    
    setMap: (state, {payload} ) => ({
        ...state,
        isMapReady: true,
        map: payload
    }),

    setMarkers: (state, {payload} ) => ({
        ...state,
        markers: payload
    })
};

export const mapReducer = (state: MapState, action: Action): MapState => {
    const handler = actionMap[action.type]
    return handler ? handler(state, action) : state
};
