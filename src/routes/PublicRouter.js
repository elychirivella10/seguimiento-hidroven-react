import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'


const PublicRouter = ({component: Component, auth, ...rest}) => {

    return (
        <Route {...rest} render={props => (
            !auth?
                <Component {...props} {...rest} />
            : <Redirect to="/" />
        )} />
    );
    
};
const mapStateToProps = state => ({
    auth:state.auth.auth
})
export default connect(mapStateToProps) (PublicRouter);