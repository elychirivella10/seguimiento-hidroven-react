import React, {useState} from 'react'
//Alerta
import alerta from 'components/alerta/Alerta'

const BrippasAnexar = ({estado, municipio, parroquia, submitReporte}) =>{
    const [nombre, guardarNombre] = useState(null)
    const [sector, guardarSector] = useState(null)
    const [formacion, guardarFormacion] = useState(null)
    const [dotacion, guardarDotacion] = useState(null)
    const [integrantes, guardarIntegrantes] = useState(0)

    const onSubmit = () =>{
        if (municipio.id === 0 || parroquia.id === 0 || !nombre || !formacion || !sector || !dotacion || !integrantes) {
            return alerta.open({type:"warning", message:"Campos vacios"})
        }else {
            const array = [nombre, estado.id, municipio.id, parroquia.id, sector, integrantes, dotacion, formacion]
            submitReporte(array)
        }
        
    }

    return (
        <div className="columns">
            <div className="column">
                <div className="box">
                    <div className="columns is-multiline">
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
                        <div className="column is-6">
                            <div className="field">
                                <label className="label is-small">Nombre</label>
                                <div className="control">
                                    <input className="input is-small" type="text" onChange={(e)=>(
                                        guardarNombre(e.target.value)
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="field">
                                <label className="label is-small">Sector</label>
                                <div className="control">
                                    <input className="input is-small" type="text" onChange={(e)=>(
                                        guardarSector(e.target.value)
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <label className="label is-small">Formacion</label>
                            <div className="select is-rounded is-small">
                                <select name="formacion" onChange={(e)=>(
                                    guardarFormacion(e.target.value)
                                )}>
                                    <option value={null}>Seleccionar</option>
                                    <option value={0}>No</option>
                                    <option value={1}>Si</option>
                                </select>
                            </div>  
                        </div>
                        <div className="column is-4">
                            <label className="label is-small">Dotacion</label>
                            <div className="select is-rounded is-small">
                                <select name="dotacion" onChange={(e)=>(
                                    guardarDotacion(e.target.value)
                                )}>
                                    <option value={null}>Seleccionar</option>
                                    <option value={0}>No</option>
                                    <option value={1}>Si</option>
                                </select>
                            </div>  
                        </div>
                        <div className="column is-4">
                            <div className="field">
                                <label className="label is-small">Integrantes</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" onChange={(e)=>(
                                        guardarIntegrantes(parseInt(e.target.value))
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

export default BrippasAnexar