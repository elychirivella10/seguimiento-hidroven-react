import React from 'react'

const HeroSeleccion = ({icon, text}) =>{
    return (
            <section className="hero is-rounded">
                <div className="hero-body">
                    <div className="container has-text-centered">
                    <p className="title">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fa-solid fa-flag"></i>
                            </span>
                            
                        </span>
                    </p>
                    <p className="subtitle is-size-6">
                        {text}
                    </p>
                    </div>
                </div>
            </section>
    )
}

export default HeroSeleccion