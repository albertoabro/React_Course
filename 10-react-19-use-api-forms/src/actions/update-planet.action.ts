import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";


export const updatePlanetAction = async(planet: Planet) => {

  try {
    
    const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);

    console.log('Planeta actualizado');

    return response.data;

  } catch (error) {

    console.log('Error: ', error);
    throw new Error('Error actualizando planeta');
  }
}
