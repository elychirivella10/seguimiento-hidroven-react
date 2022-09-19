import React, {useEffect} from 'react';
import { Route} from 'react-router-dom';


//importar funcion para detectar dispositivos
import {detecterDispositivo} from '../helpers/funciones'

const RedirectRouter = ({component2: Component, RenderLoaderRedirect, ...rest}) => {
    
    useEffect(() => {
        RenderLoaderRedirect(true)
    }, [RenderLoaderRedirect])
    
    return (
        <Route {...rest} render={props => (
            detecterDispositivo() === true?
                null 
            :<Component {...props} {...rest} />
        )} />
    )
};

export default RedirectRouter;