import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Tests in 05-funciones', () => {
  test('getUser would return an object', () =>{

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();
    expect(testUser).toEqual(user);

  });

  test('getActiveUser would return an object with parameter', () => {
    
        
    const name = 'Alberto';
    const activeUser = getUsuarioActivo(name);
    
    const testActiveUser = {
      uid: 'ABC567',
      username: name
    }

    expect(testActiveUser).toStrictEqual(activeUser);

  });
});
