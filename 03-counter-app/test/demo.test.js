describe('Test on <DemoComponent />', () => {

    test('This test would not fail', () =>{
        //1. Initialize
        const message = 'Hello World';
    
        //2. Stimulus
        const message2 = message.trim();
    
        //3. Observer the behavior waited 
        expect( message ).toBe(message2);
    })
})

