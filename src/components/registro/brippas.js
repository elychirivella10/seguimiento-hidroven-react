import React, {useState, useEffect} from "react";
//componentes
import PanelCom from "components/panels/Panel";
//alerta
import alerta from "components/alerta/Alerta";
//axios
import axios from "axios";
import { rutaAxios } from "variablesGoblales";

const Brippas = ({fecha, estado, submitReporte}) =>{
    const [averiasLevantadasAp, guardarAveriasLevantadasAp] =useState(0)
    const [averiasLevantadasAs, guardarAveriasLevantadasAs] =useState(0)
    const [averiasCorregidasAp, guardarAveriasCorregidasAp] =useState(0)
    const [averiasCorregidasAs, guardarAveriasCorregidasAs] =useState(0)
    const [lps, guardarLps] =useState(0)
    const [brippas, guardarBrippas] = useState({
        brippas:"",
        id:0
    })
    const [listaBrippas, guardarListaBrippas] = useState([])

    const brippasExtraer = (brippas) =>{
        guardarBrippas({
            brippas:brippas.nombre,
            id:brippas.id
        })
    }

    useEffect(() => {
        async function  brippas(){
            const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/desplegables/brippas/${estado.id}`)
            guardarListaBrippas(respuesta.data)
        }
        brippas()
    }, [estado.id])

    const onSubmit = () =>{
        if (brippas.id === 0) {
            return alerta.open({type:"warning", message:"Campos vacios"})
        }else {
            const array = [ averiasLevantadasAp, averiasCorregidasAp, averiasLevantadasAs, averiasCorregidasAs, brippas.id, lps,"reporte"]
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
                                        <input className="input is-small" type="text" placeholder={fecha} defaultValue={fecha}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-12">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Brippas</label>
                                    <div className="control">
                                        <input className="input is-small" type="text" placeholder={brippas.brippas} defaultValue={brippas.brippas}/>
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
                                <label className="label is-small">Averias Levantadas Ap</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Averias Levantadas Ap" value={averiasLevantadasAp} onChange={(e)=>(
                                        guardarAveriasLevantadasAp(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Averias Corregidas Ap</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Averias Corregidas Ap" value={averiasCorregidasAp} onChange={(e)=>(
                                        guardarAveriasCorregidasAp(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Averias Levantadas AS</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Averias Levantadas AS" value={averiasLevantadasAs} onChange={(e)=>(
                                        guardarAveriasLevantadasAs(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Averias Corregidas AS</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Averias Corregidas AS" value={averiasCorregidasAs} onChange={(e)=>(
                                        guardarAveriasCorregidasAs(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Lps recuperados</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Averias Corregidas AS" value={lps} onChange={(e)=>(
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
                subTitleOne="Seleccione una Brippas"
                Extraer={brippasExtraer}
                generalContent={listaBrippas}/>
            </div>
        </div>
    )
} 

export default Brippas