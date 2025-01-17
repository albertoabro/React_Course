import { getGifs } from "@/utilities/getGifs";

describe('Test GetGifs', () => {
    
    const category='Call of Duty';
    
    test('should return an Gifs array', async() => {
        const gifs = await getGifs({category});
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title:expect.any(String),
            url:expect.any(String), 
        });
    });
    
})
