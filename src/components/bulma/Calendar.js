import React, { useEffect } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';
//redux
import {connect} from 'react-redux'
import {agregarFecha} from 'actions/fechaActions'
//funciones
import {isEmptyObject} from "helpers/funciones"

function Calendar({agregarFecha, fecha}) {
  
  useEffect(() => {
    // Initialize all input of date type.
    let fechainicial = null
    let fechafinal = null
    if (isEmptyObject(fecha)!==true) {
      fechainicial= fecha.inicio
      fechafinal= fecha.final
    }
    const calendars = bulmaCalendar.attach('[type="date"]', {
      startDate: fechainicial,
    endDate: fechafinal
    });
    // Loop on each calendar initialized
    calendars.forEach((calendar) => {
      // Add listener to date:selected event
    calendar.on('date:selected', (date) => {
      date("2022-05-12")
      });
    });

    if (isEmptyObject(fecha)!==true) {
      const id = document.getElementById("calendar")
      id.removeAttribute("value")
      id.setAttribute("value", `${fecha.inicio} - ${fecha.final}`)
    }

    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#calendar');
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on('select', (datepicker) => {
          const data = datepicker.data.value().split([" - "]);
          agregarFecha({inicio:data[0], final:data[1]})
      });
    }
  }, [agregarFecha]);

  return (
    <div className="field is-small">
        <div className="control is-small">
            <input id="calendar" className="is-small" data-display-mode="dialog" type="date"  color = "is-info" data-is-range="true" data-date-format="yyyy-MM-dd"/>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  fecha:state.fecha.fecha
})


export default connect (mapStateToProps, {agregarFecha}) (Calendar);