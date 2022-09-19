import React from 'react'

import {withRouter} from 'react-router-dom'

import {capitalizarPrimeraLetra} from 'helpers/funciones'

const HeroInf = ({match, value, country, footer, color}) =>{
    const title = capitalizarPrimeraLetra(match.params.tipo)
    return (
            <section className={`hero is-rounded ${color}`}>
                <div className="hero-body pt-6 pb-6">
                    <p className="title">
                    {title}
                    </p>
                    <p className="subtitle">
                    {country!= null ?country:'General'}
                    </p>
                </div>

                {footer === true?<div className="hero-foot pb-4">
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Reportes</p>
                            <p className="title">{value?value.reportes:0}</p>
                            </div>
                        </div>                        
                    </nav>
                </div>:null}
            </section>
    )
}

export default withRouter(HeroInf)