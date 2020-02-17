import React, {Component} from 'react';
import {Router, Link} from "@reach/router";
import Distribucion1hergilrau from './Distibucion1hergilrau';
import Distribucion2hergilrau from './Distribucion2hergilrau';
import Distribucion3hergilrau from './Distibucion3hergilrau';
import Pruebashergilrau from './Pruebashergilrau';



class Aplicacionhergilrau extends Component{
    
    render(){
        
        return( 
            <div>
                <div className="contenedorEj1hergilrau">
                    <div><a href="#dist1hergilrau">Distribucion 1</a></div>
                    <div><a href="#dist2hergilrau">Distribucion 2</a></div>
                    <div><a href="#dist3hergilrau">Distribucion 3</a></div>
                    <div><a href="#pruebashergilrau">Distribucion 4</a></div>
                
                </div>
                <br></br>
                <div id="dist1hergilrau"><Distribucion1hergilrau/></div>
                <br></br>
                <div id="dist2hergilrau"><Distribucion2hergilrau/></div>
                <br></br>
                <div id="dist3hergilrau"><Distribucion3hergilrau/></div>
                <br></br>
                <div id="pruebashergilrau"><Pruebashergilrau/></div>
            </div>     
            
        )
    }  
 
}
export default Aplicacionhergilrau