import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('', () => {
    test('getHeroByIdAsync should return a hero', (done) => {
        
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero =>{
                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                );
                done(); //Specify to JEST that promise it's finished
            })
    });
    test('getHeroByIdAsync should return an error if hero not exist', (done) => {
        
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error => {
                console.log(error);
                done(); //Specify to JEST that promise it's finished
            })
    });
})
