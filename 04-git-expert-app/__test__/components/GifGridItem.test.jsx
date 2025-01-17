import { render, screen } from "@testing-library/react"
import { GifGridItem } from "@/components/GifGridItem"

describe('Test in <GifGridItem>', () => {

    const title = 'Call of Duty'
    const url = 'https://test.com/call-of-duty.jpg'
    
    test('should to match with the snapshot', () => {
        const {container} = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();

    });

    test('should show the image with the URL and ALT indicated', () => {
        render(<GifGridItem title={title} url={url} />)
        // screen.debug();
        // expect (screen.getByRole('img').alt ).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })
    
    test('should show the component´s title', () => {
        const {container} = render(<GifGridItem title={title} url={url} />)
        expect (screen.getByText(title)).toBeTruthy();
    })
    
    
})
