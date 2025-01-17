import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Test on 02-template-string', () =>{
    test('getGreeting would return "Hi Alberto"', () => {
        
        const name = "Alberto";
        const message = getSaludo(name);
        
        expect(message).toBe(`Hola ${name}`);
    })
    
})