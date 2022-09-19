import React, {useState, useEffect} from 'react'

import {PromArray} from 'helpers/compFunciones'

const Basic = ({title, estado, fondo, icon, reportes, llave, tipo, nomenclatura}) =>{
    const [value, guardarValue] = useState(0)

    useEffect(() => {
        if (reportes.length>0) {
            guardarValue(PromArray(reportes, llave, tipo))
        }
    }, [])
    
    
    return (
        <div className={`box ${fondo?"dash-one":""} height`}>
            <div className='mt-2'>
                <h2 className={`has-text-weight-medium ${icon?"is-relative":null}`}>{title}
                    {
                        icon?
                            <span className={`icon mr-2 icon-dash ${icon}`}>
                                <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                            </span>
                        :null
                    }
                </h2>
                
            </div>
            <p className='mt-3 is-size-4 has-text-weight-semibold'>{value}{tipo==="prm"?"%":null}</p>
            <p className='is-size-7 has-text-grey-light'>{nomenclatura}</p>
        </div>
    )
}

export default Basic