import React, {useState} from 'react'
//Alerta
import alerta from 'components/alerta/Alerta'

const PozosAnexar = ({estado, municipio, parroquia, submitReporte}) =>{
    const [nombre, guardarNombre] = useState(null)
    const [operatividad, guardarOperatividad] = useState(null)
    const [sector, guardarSector] = useState(null)
    const [lps, guardarLps] = useState(0)
    const [poblacion, guardarPoblacion] = useState(0)

    const onSubmit = () =>{
        if (municipio.id === 0 || parroquia.id === 0 || !nombre || !operatividad || !sector || !lps || !poblacion) {
            return alerta.open({type:"warning", message:"Campos vacios"})
        }else {
            const array = [nombre, operatividad, lps , estado.id, municipio.id, parroquia.id, sector, poblacion]
            submitReporte(array)
        }
    }
    
    return (
        <div className="columns">
            <div className="column is-12">
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
                        <div className="column is-3">
                            <div className="field">
                                <label className="label is-small">Poblacion</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" onChange={(e)=>(
                                        guardarPoblacion(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="field">
                                <label className="label is-small">Lps</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" onChange={(e)=>(
                                        guardarLps(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <label className="label is-small">Operatividad</label>
                            <div className="select is-rounded is-small">
                                <select name="operatividad" onChange={(e)=>(
                                    guardarOperatividad(e.target.value)
                                )}>
                                    <option value={null}>Seleccionar</option>
                                    <option value={0}>No Operativo</option>
                                    <option value={1}>Operativo</option>
                                </select>
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
export default PozosAnexar