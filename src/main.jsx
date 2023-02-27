import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWolrdApp } from './HelloWolrdApp';
import './styles.css'


//todo inicia con un functional component, componente basados en funciones



//desde function App es mi aplicacion ahora hay que renderizarla

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWolrdApp/> */}
        {/* <FirstApp title='Hola, soy vegeta' /> */}
        <CounterApp value = {123}/>
    </React.StrictMode>
);

