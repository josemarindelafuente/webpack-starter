import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';


export const saludar = ( mensaje = 'sin mensaje' ) => {


    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ mensaje }`;

    document.body.append( h1 );

    
    // Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}
