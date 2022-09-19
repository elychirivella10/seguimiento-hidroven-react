import React from "react";
import {withRouter, Link} from 'react-router-dom'

import {capitalizarPrimeraLetra} from 'helpers/funciones'

const Breadcrumb = ({match}) =>{

    const path = match.url
    let array = path.split('/')
    let nameCapitalize = ''
    array = array.slice(1)

    return(
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {array.map((a, index) =>{
                        nameCapitalize = capitalizarPrimeraLetra(a)
                        return(
                            <li key={index} className={index>0?"is-active":""}><Link to={`${path}`}>{nameCapitalize}</Link></li>
                        )
                    })}
                </ul>
            </nav>
    )
}

export default withRouter(Breadcrumb)