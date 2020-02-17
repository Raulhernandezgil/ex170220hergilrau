import React, {Component} from 'react';
import Img1 from './Recursos/Paisaje1.jpg';
class Distribucion2hergilrau extends Component{
    render(){
        return(

            <div className="contenedorEj3hergilrau">
                <header>Cabecera</header>
                <main>
                    Seccion Principal
                    <img src={Img1}/>
                </main>
                <aside>Barra Lateral</aside>
                <footer>Pie</footer>
                
            </div>
        )
    }
}
export default Distribucion2hergilrau