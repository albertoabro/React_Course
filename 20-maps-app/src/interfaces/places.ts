export interface PlacesResponse {
    type:     string;
    licence:  string;
    features: Feature[];
}

export interface Feature {
    type:       string;
    properties: Properties;
    center:       number[];
    geometry:   Geometry;
}

export interface Geometry {
    type:        string;
    coordinates: Array<Array<Array<number[] | number>> | number>;
}

export interface Properties {
    place_id:     number;
    osm_type:     string;
    osm_id:       number;
    place_rank:   number;
    category:     string;
    type:         string;
    importance:   number;
    addresstype:  string;
    name:         string;
    display_name: string;
    address:      Address;
}

export interface Address {
    city?:             string;
    province?:         string;
    "ISO3166-2-lvl6"?: string;
    state:             string;
    "ISO3166-2-lvl4":  string;
    country:           string;
    country_code:      string;
    town?:             string;
    region?:           string;
    "ISO3166-2-lvl3"?: string;
    county?:           string;
    state_district?:   string;
    postcode?:         string;
}
