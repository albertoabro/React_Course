import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/base-pruebas/data/heroes";

describe('Tests in 08-imp-exp', () => {
    test('getHeroById should return an Hero by Id ', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroById should return null', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner should return a list of Heroes by Owner', () => {
        const owner = 'Marvel';
        const heroesOrigin = getHeroesByOwner(owner);

        expect(heroesOrigin).toEqual( 
            heroes.filter((hero) => hero.owner===owner) );
    });
})
