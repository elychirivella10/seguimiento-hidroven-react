import React, {Fragment, useState} from 'react'

const Modals = ({component: Component, ...rest}) =>{
    const [modalRender, guardarModalRender] = useState(false)

    const RenderModal = () => {
        if (modalRender) {
        guardarModalRender(false)   
        }else {
            guardarModalRender(true)
        }
    }

    return(
        <Fragment>
            <div className="is-fixed right--1 top-5">
                <div className="box is-primary pt-3 pl-3 pr-5 pb-3 is-pointer" onClick = {RenderModal}>
                    <span className="icon has-text-primary">
                        <i className="fas fa-search has-text-white" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="is-fixed right--1 top-9">
                <div className="box pt-3 pl-3 pr-5 pb-3 is-pointer" >
                    <span className="icon has-text-primary">
                        <i className="fas fa-undo-alt has-text-primary" aria-hidden="true"></i>
                    </span>
                </div>
            </div>

            {modalRender?<div class="modal is-active" id="modal" >
                <div class="modal-background"></div>
                    <div class="modal-content">
                        <Component {...props} {...rest}/>
                    </div>
                <button class="modal-close is-large" aria-label="close" onClick = {RenderModal}></button>
            </div>:null}
        </Fragment>
    )
}