import React, {useState, useEffect} from "react";
//alerta
import alerta from "components/alerta/Alerta";

const Fugas =({fecha, estado, municipio, parroquia, submitReporte})=>{    
    const [nombre, guardarNombre] =useState("")
    const [sector, guardarSector] =useState("")
    const [fugas, guardarFugas] =useState(0)
    const [lps, guardarlps] =useState(0)

    const onSubmit = () =>{
        if (sector.length === 0 || nombre.length ===0 || municipio.id === 0 || parroquia.id ===0) {
            return alerta.open({type:"warning", message:"Campos vacios"})
        }else {
            const array = [nombre, estado.id, municipio.id, parroquia.id, sector, fugas, lps, "reporte"]
            submitReporte(array)
        }
        
    }

    return(
        <div className="columns">
            <div className="column is-12">
                <div className="box">
                    <div className="columns is-multiline">
                        <div className="column is-4">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Fecha</label>
                                    <div className="control">
                                        <input className="input is-small" type="text" placeholder={fecha} defaultValue={fecha}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-4">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Estado</label>
                                    <div className="control">
                                        <input className="input is-small" type="text" placeholder={estado.estado} defaultValue={estado.estado}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-4">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Municipio</label>
                                    <div className="control">
                                        <input className="input is-small" type="text" placeholder={municipio.municipio} defaultValue={municipio.municipio}/>
                                    </div>
                                </div>
                            </fieldset> 
                        </div>
                        <div className="column is-4">
                            <fieldset disabled>
                                <div className="field">
                                    <label className="label is-small">Parroquia</label>
                                    <div className="control">
                                        <input className="input is-small" type="text" placeholder={parroquia.parroquia} defaultValue={parroquia.parroquia}/>
                                    </div>
                                </div>
                            </fieldset> 
                        </div>
                        <div className="column is-8">
                            <div className="field">
                                <label className="label is-small">Sector</label>
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Sector" value={sector} onChange={(e)=>(
                                        guardarSector(e.target.value)
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field">
                                <label className="label is-small">Nombre Aduccion</label>
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Nombre Aduccion" value={nombre} onChange={(e)=>(
                                        guardarNombre(e.target.value)
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="field">
                                <label className="label is-small">F. Reparadas</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Fugas Reparadas" value={fugas} onChange={(e)=>(
                                        guardarFugas(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="field">
                                <label className="label is-small">Lps Recuperados</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" placeholder="Fugas Reparadas" value={lps} onChange={(e)=>(
                                        guardarlps(parseInt(e.target.value))
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
        </div>
    )
}

export default Fugas