import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Test in 11-async-await', () => {
    test('getImage should return an Images URL', async() => {
        
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
    
})
