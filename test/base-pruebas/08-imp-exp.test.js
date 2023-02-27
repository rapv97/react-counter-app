import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08 imp-exp', () => { 
    // test('getHeroebyId obtener el heroe por id', () => { 
    //     const id = 1;
    //     const hero = getHeroeById(id);
        
    //     expect( hero ).toEqual(  {id:1, name:'Batman', owner:'DC'})
    //  });

    //  test('getHeroebyId debe retornar undefined si el id de ese heroe no existe', () => { 
    //     const id = 100;
    //     const hero = getHeroeById(id);
    //     //para evaluar si lo que retorna, objeto o valor es nullo o undefined o false

    //     expect( hero ).toBeFalsy();

    //     // console.log(hero);
    //     // expect( hero ).toEqual(  {id:1, name:'Batman', owner:'DC'})
    //  })

     test('getHeroebyOwner retorna usuarios por owner', () => { 
        const owner = 'Marvel';
       
        // const heroesDc = [
        //     {
        //         id: 1,
        //         name: 'Batman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 3,
        //         name: 'Superman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 4,
        //         name: 'Flash',
        //         owner: 'DC'
        //     },
           
        // ]

        const heroesDc = getHeroesByOwner(owner);
        
        // console.log(heroes);
        expect( heroesDc.length ).toBe( 2 );
        expect(heroesDc).toEqual( heroes.filter(rs => rs.owner === owner));
     })
 })