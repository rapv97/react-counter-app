import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09-promesas.test.js', () => { 
    // el done se ocupa para decirle a jest que la promesa ha terminado
    test('debe retornar un heroe', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe =>{

                expect(heroe).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            })
            // .catch(console.log)
     })

     test('debe retornar un error si un heroe no se encuentra', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe(`No se pudo encontrar el héroe ${ id }`)
                // console.log(err);
                done();

            })

            // .catch(console.log)
     })
 })