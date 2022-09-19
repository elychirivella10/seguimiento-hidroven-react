import React from 'react';

//bulma step.css
import 'bulma-steps/dist/css/bulma-steps.min.css'

const Step =({cargarEstatus})=>{
    return(
        
        <div className="steps" id="estatusRegistroPanel">
            <div className="0 step-item is-active is-success" name="datos">
                <div className="step-marker 0 pointer" onClick = {cargarEstatus} name = "datos">
                    1  
                </div>
                <div className="step-details">
                    <p className="step-title">Datos</p>
                </div>
            </div>
            <div className="1 step-item" name="ubicacion">
                <div className="step-marker 1 pointer" onClick = {cargarEstatus} >
                    2
                </div>
                <div className="step-details">
                    <p className="step-title">Ubicacion</p>
                </div>
            </div>
            <div className="2 step-item " name="acciones">
                <div className="step-marker 2 pointer" onClick = {cargarEstatus} name = 'acciones' >
                    3
                </div>
                <div className="step-details" >
                <p className="step-title">Acciones</p>
                </div>
            </div>
            <div className="3 step-item" name="tiempo">
                <div className="step-marker  3 is-hollow pointer" onClick = {cargarEstatus} name = "tiempo">
                    4
                </div>
                <div className="step-details" >
                <p className="step-title">Tiempo y Beneficio</p>
                </div>
            </div>
        </div>
    )
}
export default Step


