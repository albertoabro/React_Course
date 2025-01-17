import {getHeroById, getHeroesByOwner} from './src/bases/08-import-export-find-filter.js';

const getHeroByIdAsync = (id) => {
return new Promise( (resolve, reject) => {
setTimeout( () => {

//*****Task*****
//1.Import getHeroById()
//2.resolve();

    const hero = getHeroById(id);
    if(hero)
        resolve(hero);
    else
        reject('Hero not found')
}, 2000)
});
};

getHeroByIdAsync(51)
.then(console.log) //Same of (hero) => { console.log('Hero: ', hero)
.catch(console.error); //Same of err => console.error(err)