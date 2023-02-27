import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebas en <FirstApp />', () => { 

    // test('debe hacer match con el snapshot', () => { 
        
    //     const title = 'Hola, soy goku';
    //     const  {container} =  render( <FirstApp title = { title } /> ) 

    //     //el snapshot hace como una captura de lo que devuelve y lo compara con lo  que deberia devolver
    //     //en este caso FirstApp se debe ocupar de preferencia hasta que ya se haya culminado el desarrollo
    //     expect(container).toMatchSnapshot();

    //  });

    test('debe de mostrar el titulo en un h1', () => { 
      const title = 'Hola, soy goku';
      const  {container, getByText, getByTestId} =  render( <FirstApp title = { title } /> ) 
      //buscamos que este el texto que tiene el titulo
      expect( getByText(title) ).toBeTruthy();

      expect( getByTestId('test-title').innerHTML ).toContain(title);

      //buscamos que exista una etiqueta h1
      //y que el texto que contenga sea identico con la const title
      // const h1 = container.querySelector('h1');
      // expect(h1.innerHTML).toBe(title);
      // expect(h1.innerHTML).toContain(title);
    })

    test('debe de mostrat el subtitulo enviado por props', () => { 
      
      const title = 'Hola, soy goku';
      const subTitle = 'soy subtitulo';
      const  {getByText} =  render(
         <FirstApp 
            title = { title }
            subTitle= {subTitle}
          />) 
      expect( getByText(title) ).toBeTruthy();

     })
 });