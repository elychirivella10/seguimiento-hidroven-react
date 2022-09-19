import React, {useEffect} from 'react'
//Redux
import {connect} from 'react-redux'
//router
import {withRouter} from 'react-router-dom'

const Reporte = ({reportes, match, LoaderTimer}) =>{
    console.log(match)
    console.log(reportes.filter(r=>r.id == match.params.id))

    useEffect(() => {
        LoaderTimer(false)
    }, []);

    return (
        <div>s</div>
    )
}

const mapStateToProps = state => ({
    reportes:state.reportesReducer.reportes,
})

export default withRouter (connect(mapStateToProps, null) (Reporte))