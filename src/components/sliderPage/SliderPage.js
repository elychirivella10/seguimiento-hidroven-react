import React from 'react'

const SliderPage = ({nextPage, pagina}) => {

    const next = (e) => {

        if (pagina.paginaActual < pagina.cantidadPagina) {
            nextPage(pagina.paginaActual+1)
        }
        
    }

    const back = (e) => {
        if (pagina.paginaActual > 1) {
            nextPage(pagina.paginaActual-1)
        }
    }

    return(
        <section className = "mt-5">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-1">
                        <div className="box has-text-centered is-size-6 is-pointer" onClick = {back}>
                            <span className="icon ">
                                <i className="fas fa-arrow-circle-left " aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div className="column is-1">
                        <div className="box has-text-centered">
    <                       p>{`${pagina.paginaActual}/${pagina.cantidadPagina}`}</p>
                        </div>
                    </div>
                    <div className="column is-1">
                        <div className="box has-text-centered is-size-6 is-pointer" onClick = {next}>
                            <span className="icon">
                                <i className="fas fa-arrow-circle-right " aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderPage