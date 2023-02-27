import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('pruebas en 06 desestructuracion de objetos', () => { 
    test('usContext retorna un objeto', () => { 
        
        const clave = 'Ironman'
        const edad = 40

        const objeto = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const nuevoObjeto = usContext( { clave,edad });
        console.log(nuevoObjeto);

        expect(objeto).toEqual(nuevoObjeto);

     })
 })