import axios from "axios";
import { z } from "zod";
import { Search } from "../interfaces/search";
import { useMemo, useState } from "react";

const INITIAL_STATE = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min:0
    }
};

const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
});

export type Weather = z.infer<typeof Weather>;

export const useWeather = () => {

    const [weather, setWeather] = useState<Weather>(INITIAL_STATE);

    const fetchWeather = async(search: Search) => {

        try {
            const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
            const geoUrl =`http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`;
            const {data} = await axios(geoUrl);
            const {lat, lon}  = data[0];

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
            const {data: weatherResult} = await axios(weatherUrl);

            const result = Weather.safeParse(weatherResult);

            if(result.success)
                setWeather(result.data);

        } catch (error) {
            console.log(error);
        }

    };

    const hasWeatherData = useMemo(() => weather.name, [weather]);

    return {
        weather,
        hasWeatherData,
        fetchWeather
    };
};
