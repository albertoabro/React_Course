import { getAllByText, render } from "@testing-library/react"
import { App } from "../src/FirstApp"


describe('Test in <App/>', () => {
    /*test('should do match with snapshot', () => {
        
        const title = "Alberto";
        const {container} = render( <App tittle={title}/>);

        expect(container).toMatchSnapshot(); //Compare the test with the snapshot that have been taken. For update it, press 'u' when the test fail. 
        // Do not make it when it's development
    });*/

    test('should show the title in <h1>', () => {
        const title = "Hello World";
        const {container, getByText, getByTestId} = render( <App title={title}/>);

        /*
                    Bad way
        expect( getByText(title) ).toBeTruthy();
        const h1 = container.querySelector('h1');

        expect(h1.innerHTML).toContain(title);
        */

        //Correct way
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });
    
    test('should show the subtitle was sent by props ', () => {
        
        //For multiple elements with same text, use getAllByTest -> this return an array of HTML elements
        const title = 'Hello World';
        const subTitle = 'I am subtitle';
        const {getAllByText} = render( 
            <App 
                title={title}
                subTitle={subTitle}
            />
        );

        expect( getAllByText(subTitle).length).toBe(2);
    }) 
})
