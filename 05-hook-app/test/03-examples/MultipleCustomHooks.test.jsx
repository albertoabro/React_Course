import { screen, render } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook"
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch')

describe('Test in <MultipleCustomHooks />', () => {
  test('should show the default component', () => {
    
    useFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null
    })
    render(<MultipleCustomHook />);
    screen.debug()
  });

  test('should show a Pokemon Data', () => {
    
    useFetch.mockReturnValue({
        data: [{ id: '#1', name: 'Bulbasur' }],
        isLoading: false,
        hasError: null
    });

    render(<MultipleCustomHook />);

   // expect( screen.getByText('#1') ).toBeTruthy();
    screen.debug()
  });
  
})
