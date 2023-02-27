import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('pruebas en 05-funciones', () => { 
    
    test('getUser debe retornar un objeto', () => { 
        

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        //cuando se quiere comparar dos objetos, no se debe ocupar el toBe
        //se debe ocupar toEqual o toStrictEqual

        expect(testUser).toEqual(user);

        expect(testUser).toStrictEqual(user);
     });

     test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Richarson';
        const objeto = {
            uid: 'ABC567',
            username: `${name}`
        } 

        const usuario = getUsuarioActivo(name);

        expect(objeto).toEqual(usuario);
      })
 })