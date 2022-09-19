import React, {useState} from 'react'

const Produccion = ({fecha, estado, submitReporte}) =>{
    const [metros_cubicos, guardar_metros_cubicos]= useState(0)
    return(
        <div className="columns is-multiline">
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
                            <div className="field">
                                <label className="label is-small">Metros Cubicos</label>
                                <div className="control">
                                    <input className="input is-small" type="number" placeholder="Text input" min="0" pattern="^[0-9]" value={metros_cubicos} onChange={(e)=>{
                                        guardar_metros_cubicos(parseInt(e.target.value))
                                    }}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div className="field is-grouped is-grouped-right are-small">
                                <p className="control">
                                    <a className="button is-primary is-small" onClick={()=>{
                                        const array = [metros_cubicos, estado.id, "reporte"]
                                        submitReporte(array)
                                    }}>
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

export default Produccion