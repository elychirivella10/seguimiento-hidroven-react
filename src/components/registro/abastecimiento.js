import React, {useState} from "react";
//alerta
import alerta from "components/alerta/Alerta";

const Abastecimiento = ({fecha, estado, submitReporte}) =>{
    const [operatividad, guardarOperatividad] = useState(0)
    const [abastecimiento, guardarAbastecimiento] = useState(0)
    const [observacion, guardarObservacion] = useState("")

    const onSubmit = () =>{
        const array = [estado.id, operatividad, abastecimiento, observacion,"reporte"]
        submitReporte(array)
    }

    return (
        <div className="columns">
            <div className="column is-12">
                <div className="box">
                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <fieldset disabled>
                                <div class="field">
                                    <label class="label is-small">Fecha</label>
                                    <div class="control">
                                        <input className="input is-small" type="text" placeholder={fecha} defaultValue={fecha}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-6">
                            <fieldset disabled>
                                <div class="field">
                                    <label class="label is-small">Estado</label>
                                    <div class="control">
                                    <input className="input is-small" type="text" placeholder={estado.estado} defaultValue={estado.estado}/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="column is-6">
                            <div class="field">
                                <label class="label is-small">Operatividad</label>
                                <div class="control">
                                    <input class="input is-small" type="number" placeholder="Text input" min="0" max="100" pattern="^[0-9]" value={operatividad} onChange={(e)=>(
                                        guardarOperatividad(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div class="field">
                                <label class="label is-small">Abastecimiento</label>
                                <div class="control">
                                    <input class="input is-small" type="number" placeholder="Text input" min="0" max="100" pattern="^[0-9]" value={abastecimiento} onChange={(e)=>(
                                        guardarAbastecimiento(parseInt(e.target.value))
                                    )}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div class="field">
                                <label class="label is-small">Observacion</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Observacion" value={observacion} onChange={(e)=>(
                                        guardarObservacion(e.target.value)
                                    )}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                            <div class="field is-grouped is-grouped-right are-small">
                                <p class="control">
                                    <a class="button is-primary is-small" onClick={onSubmit}>
                                    Submit
                                    </a>
                                </p>
                                <p class="control">
                                    <a class="button is-light is-small">
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

export default Abastecimiento