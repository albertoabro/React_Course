//In html inside off script tag, add type="module" to permit use import
//Commented for 09-promise.js
import {heroes} from '../data/heroes.js';
//console.log(heroes);

const getHeroById = (id) => heroes.find((hero) => hero.id === id)
//console.log(getHeroById(2));

const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
//console.log(getHeroesByOwner('DC'));

export { 
    getHeroById,
    getHeroesByOwner
}