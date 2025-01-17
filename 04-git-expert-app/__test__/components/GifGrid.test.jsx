import { render, screen } from "@testing-library/react";
import {GifGrid} from '@/components/GifGrid';
import {useFetchGifs} from '@/hooks/useFetchGifs'

jest.mock('@/hooks/useFetchGifs');

describe('Test in <GifGrid/>', () => {

    const category = 'Call of Duty';
    
    test('should show the loading at the beginning', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={ category } />);
        
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
        
    });

    test('should show items when useFetchGif loads images', () => {
        const gifs = [
            {
                id: 'ABC',
                title: category,
                url: `https://localhost/${category.replaceAll(" ", "_")}.jpg`
            },
            {
                id: 'DEF',
                title: 'Minecraft',
                url: `https://localhost/Minecraft.jpg`
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={ category } />);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
    
})
