import React, {useState} from 'react'
//Alerta
import alerta from 'components/alerta/Alerta'

const SistemasAnexar = ({estado, submitReporte}) =>{
    const [nombre, guardarNombre] = useState(null)
    const [cantidadPp, guardarCantidadPp] = useState(0)
    const [cantidadEb, guardarCantidadEb] = useState(0)
    const [cantidadPozo, guardarCantidadPozo] = useState(0)
    const [cantidadFuentes, guardarCantidadFuentes] = useState(0)
    

    const onSubmit = () =>{
        if (!nombre) {
            return alerta.open({type:"warning", message:"Campos vacios"})
        }else {
            const array = [nombre, cantidadPp, cantidadEb , cantidadPozo, estado.id, cantidadFuentes]
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
                        <div className="column is-8">
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
                                <label className="label is-small">Cantidad plantas potabilizadoras</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" onChange={(e)=>(
                                        guardarCantidadPp(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="field">
                                <label className="label is-small">Cantidad estaciones de bombeo</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" onChange={(e)=>(
                                        guardarCantidadEb(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="field">
                                <label className="label is-small">Cantidad de pozo</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" onChange={(e)=>(
                                        guardarCantidadPozo(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="field">
                                <label className="label is-small">Cantidad de fuentes</label>
                                <div className="control">
                                    <input className="input is-small" type="number" min="0" pattern="^[0-9]" onChange={(e)=>(
                                        guardarCantidadFuentes(parseInt(e.target.value))
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
export default SistemasAnexar