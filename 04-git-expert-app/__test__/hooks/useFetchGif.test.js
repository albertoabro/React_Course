import { useFetchGifs } from "@/hooks/useFetchGifs"
import { renderHook, waitFor } from "@testing-library/react"

describe('Test in useFetchGif', () => {
    
    test('should return the initial state', () => {
        const {result} = renderHook( () => useFetchGifs('Call of Duty'))
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return images array and isLoading false', async() => {
        const {result} = renderHook( () => useFetchGifs('Call of Duty'))
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout:2000
            }
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})
