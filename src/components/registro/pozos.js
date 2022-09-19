import React, {useState, useEffect} from "react";
import PanelCom from "components/panels/Panel";
//alertas
import alerta from "components/alerta/Alerta";
//axios
import axios from "axios";
import { rutaAxios } from "variablesGoblales";

const Pozos = ({fecha, estado, submitReporte}) =>{
    const [pozo, guardarPozo] = useState({
        pozo:"",
        id:0
    })
    const [lps, guardarLps] = useState(null)
    const [pozos, guardarPozos] = useState([])
    
    const pozoExtraer = (pozo) =>{
        guardarPozo({
            pozo:pozo.nombre,
            id:pozo.id
        })
    }

    useEffect(() => {
        async function  pozos(){
            const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/desplegables/pozos/${estado.id}`)
            guardarPozos(respuesta.data)
        }
        pozos()
    }, [estado.id])
    

    const onSubmit = () =>{
        if (pozo.id === 0 || lps === null) {
            return alerta.open({type:"warning", message:"Campos vacios"})
        }else {
            const array = [lps, pozo.id, "reporte"]
            submitReporte(array)
        }
        
    }

    return (
        <div className="columns"> 
            <div className="column is-6">
                <div className="box">
                    <div className="columns is-multiline">
                        <div className="column is-12">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Fecha</label>
                                    <div className="control">
                                        <input className="input is-small" type="text"  placeholder={fecha} defaultValue={fecha}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-12">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Pozo</label>
                                    <div className="control">
                                        <input className="input is-small" type="text" placeholder={pozo.pozo} defaultValue={pozo.pozo}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-12">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Estado</label>
                                    <div className="control">
                                        <input className="input is-small" type="text" placeholder={estado.estado} defaultValue={estado.estado}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Lps</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" onChange={(e)=>(
                                        guardarLps(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field is-grouped is-grouped-right are-small">
                                <p className="control">
                                    <a className="button is-primary is-small" onClick={onSubmit}>
                                    Submit
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button is-light is-small">
                                    Cancel
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>   
            </div>
            <div className="column is-6">
                <PanelCom
                    subTitleOne="Seleccione un Pozo"
                    generalContent={pozos}
                    Extraer={pozoExtraer}
                />
            </div>
        </div>
    )
} 

export default Pozos