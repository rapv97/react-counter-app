import { render , screen} from "@testing-library/react" 
import { FirstApp } from "../src/FirstApp"

//con el screen obtenemos el objeto que nosotros estamos renderizando
describe('pruebas en <FirstApp />', () => { 
  const title = 'Hola, soy goku';
  const subTitle = 'soy subtitulo';

    test('debe hacer match con el snapshot', () => { 
        const  {container} =  render( <FirstApp title = { title } /> ) 

        //el snapshot hace como una captura de lo que devuelve y lo compara con lo  que deberia devolver
        //en este caso FirstApp se debe ocupar de preferencia hasta que ya se haya culminado el desarrollo
        expect(container).toMatchSnapshot();

     });

     test('debe mostrar el mensaje Hola, soy goku', () => { 
        render(<FirstApp title = { title } />)
        expect(screen.getByText(title)).toBeTruthy();


      })

     test('debe de mostrar el titulo en un h1', () => { 
        render( <FirstApp title = { title } /> ) 

        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title );

        //buscamos que exista una etiqueta h1
        //y que el texto que contenga sea identico con la const title
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
        // expect(h1.innerHTML).toContain(title);
      })

      test('debe de mostrar el subtitulo enviado por props', () => { 
               
        render(
           <FirstApp 
              title = { title }
              subTitle= {subTitle}
            />
            ); 
        expect( screen.getAllByText(subTitle).length ).toBe(2);

       })
 });