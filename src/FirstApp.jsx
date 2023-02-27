import  PropTypes  from "prop-types";
// const newMessage = {
//     message: 'Hola mundo',
//     tittle: 'Richarson'
// }

// const retornar = ( a , b) => {
//     return a + b
// }
// {JSON.stringify(newMessage)}

//desestructuramos las props y recibimos el nombre de la variable que nos manda
// el componente padre

export const FirstApp = ({ title, subTitle, name }) => {

  // const {} = props;
  // console.log(props);
    // const neMessage = 'Richarson';
  return (
    //es sinonimo de fregmento los simbolos <> </> y de esa manera ya no
    //debemos importar a Fragment y podemos regresar un grupo en el return
    <>
        <h1 data-testid="test-title"> { title } </h1>
        <p>{ subTitle  }</p>
        <p>{ subTitle  }</p>
        <p>{ name  }</p>
    </>
    
  )
}

FirstApp.propTypes= {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  // title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Richarson',

}