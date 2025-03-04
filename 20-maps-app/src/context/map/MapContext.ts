import { createContext } from "react";

declare const maplibregl: any;

interface MapContextProps {
    isMapReady: boolean;
    map?: typeof maplibregl;

    setMap: (map: typeof maplibregl) => void;
}

export const MapContext = createContext({} as MapContextProps);