import { render, screen } from "@testing-library/react"
import { App } from "../src/FirstApp"


describe('Test in <App/>', () => {

    const title = 'Hello world';
    const subTitle = 'I am subtitle';

    test('should do match with snapshot', () => {
        
        const {container} = render( <App title={title}/>);

        expect(container).toMatchSnapshot();
    });

    test('should show the message "Hello World"', () => {
        render( <App title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('should show the title in <h1>', () => {
        render( <App title={title}/>);
        //GetByRol obtain a HTML elements
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });
    
    test('should show the subtitle was sent by props ', () => {
        
        render( 
            <App 
                title={title}
                subTitle={subTitle}
            />
        );

        expect( screen.getAllByText(subTitle).length).toBe(2);
    });
})
