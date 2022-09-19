import React, {useState, useEffect} from "react";
//componentes
import PanelCom from "components/panels/Panel";
//alerta
import alerta from "components/alerta/Alerta";
//axios
import axios from "axios";
import { rutaAxios } from "variablesGoblales";

const Afectaciones = ({fecha, estado, submitReporte}) =>{
    const [tipo, guardartipo] =useState(0)
    const [afectaciones, guardarAfectaciones] =useState(0)
    const [horas, guardarHoras] =useState(0)
    const [equipos, guardarEquipos] =useState(0)
    const [sistema, guardarSistema] = useState({
        sistema:"",
        id:0
    })
    const [sistemas, guardarSistemas] = useState([])

    const onSubmit = () =>{
        if (sistema.id === 0 || tipo === 0) {
            return alerta.open({type:"warning", message:"Campos vacios"})
        }else {
            const array = [ estado.id, afectaciones, horas, equipos, tipo, sistema.id, "reporte"]
            submitReporte(array)
        }
        
    }

    useEffect(() => {
        async function  sistemas(){
            const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/desplegables/sistemas/${estado.id}`)
            guardarSistemas(respuesta.data)
        }
        sistemas()
    }, [estado.id])

    const sistemaExtraer = (sistema) =>{
        guardarSistema({
            sistema:sistema.nombre,
            id:sistema.id
        })
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
                                        <input className="input is-small" type="text" placeholder={fecha} defaultValue={fecha}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-12">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Sistema</label>
                                    <div className="control">
                                    <input className="input is-small" type="text" placeholder={sistema.sistema} defaultValue={sistema.sistema}/>
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
                            <div className="select is-rounded is-small">
                                <select name="estado" onChange={(e)=>(
                                    guardartipo(parseInt(e.target.value))
                                )} value={tipo}>
                                    <option value={0}>--Seleccione el lugar de la afectacion--</option>
                                    <option value={1}>Pozos</option>
                                    <option value={2}>Estacion de bombeo</option>
                                    <option value={3}>Planta potabilizadora</option>
                                    <option value={4}>Fuentes</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Cantidad</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Text input" value={afectaciones} onChange={(e)=>(
                                        guardarAfectaciones(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Horas sin servicio</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Text input" value={horas} onChange={(e)=>(
                                        guardarHoras(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Equipos dañados</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Text input" value={equipos} onChange={(e)=>(
                                        guardarEquipos(parseInt(e.target.value))
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
                    subTitleOne="Seleccione un Sistema"
                    generalContent={sistemas}
                    Extraer={sistemaExtraer}
                />
            </div>
        </div>
    )
} 

export default Afectaciones