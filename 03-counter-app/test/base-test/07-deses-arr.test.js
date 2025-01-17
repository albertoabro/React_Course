import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test on 07-deses-arr', () => {
  test('should return a string and number', () => {
    const [letter, numbers] = retornaArreglo();

    // expect(letter).toBe('ABC');
    // expect(numbers).toBe(123);

    //Betters tests

    expect(typeof letter).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letter).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  })
  
})
