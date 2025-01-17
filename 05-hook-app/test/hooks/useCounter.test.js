import { renderHook, act } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Test in useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook( () => useCounter() )
    const { counter, decrement, increment, reset } = result.current;

    expect( counter ).toBe(0);
    expect ( increment ).toEqual( expect.any( Function ));
    expect ( decrement ).toEqual( expect.any( Function ));
    expect ( reset ).toEqual( expect.any( Function ));
  });

  test('The counter should generate the value 100', () => {
    const { result } = renderHook( () => useCounter(100) )
    const { counter } = result.current;

    expect( counter ).toBe(100);
  });
  
  test('should increment the counter', () => {
    const { result } = renderHook( () => useCounter() )
    const { increment } = result.current;

    act( () => {
        increment();
    })

    expect( result.current.counter ).toBe(1);
  });
  
  test('should decrement the counter', () => {
    const { result } = renderHook( () => useCounter(1) )
    const { decrement } = result.current;

    act( () => {
        decrement();
    })

    expect( result.current.counter).toBe(0);
  });
  
  test('should restart the the default value', () => {
    const { result } = renderHook( () => useCounter() )
    const { reset, increment } = result.current;

    act( () => {
        increment(2);
        reset();
    })

    expect(result.current.counter).toBe(0);
  })
  
})
