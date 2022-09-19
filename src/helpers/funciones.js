
import axios from 'axios'

//rutas
import {rutaAxios, tipos} from '../variablesGoblales'

import {filterValues} from './filterFunciones'

export const reducer = (accumulator, currentValue) => accumulator + currentValue;

export const detecterDispositivo = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent) || /windows phone/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
        return true
    } else {
        return false
    }
}

export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

export function colorLoop(index, valor2){
    index = index+1
    let multiplo = []
    for (let indexmultiplo = 1; indexmultiplo < Math.ceil(valor2.length/3)+1; indexmultiplo++) {
        multiplo.push(3*indexmultiplo)
    }

    
    for (let indexposicion = 0; indexposicion < Math.ceil(valor2.length/3)+1; indexposicion++) {
        if (index === multiplo[indexposicion]) {
            index = 3
        } else if (index + 1 === multiplo[indexposicion]) {
            index = 2
        } else if (index + 2 === multiplo[indexposicion]){
            index = 1
        }
    }   

    return index
 }

export function validateNumber(texto){
    const numeros = "0123456789"
    for(let i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!==-1){
          return 1;
       }
    }
    return 0;
}

export const extraerTabla = (match) =>{
    return tipos[match]
}


export const enviarActualizacion =  (object, lapso, proyecto) =>{

      for (const property in object) {
        
            if (object[property] === "undefined" || object[property] === null || object[property] === "" || object.coordenadas_setor === "" || object.coordenadas_obra === "") {
                return false
            } else {
                const body = {
                    id_lapso:proyecto.id_lapso,
                    lapso_culminacion_final:lapso.lapso_culminacion_final,
                    lapso_culminacion_inicio:lapso.lapso_culminacion_inicio,

                    id_ciclo:proyecto.id_ciclo,
                    ciclo_final:object.ciclo_final,
                    opcion_ciclo_final:object.opcion_ciclo_final,
                    
                    id_ejecucion_financiera:proyecto.id_ejecucion_financiera,
                    ejecucion_bolivares_final:object.ejecucion_bolivares_final,
                    ejecucion_euros_final:object.ejecucion_euros_final,
                    ejecucion_dolares_final:object.ejecucion_dolares_final,
                    ejecucion_rublos_final:object.ejecucion_rublos_final,
                
                    id_sector:proyecto.id_sector,
                    sector:proyecto.sector,
                
                    id_obra:proyecto.id_obra,
                    obra:proyecto.obras,
                
                    id_lps:proyecto.id_lps,
                    lps_final:object.lps_final,
                    
                    id_proyecto_estatus:2,
                    id_estado_proyecto:0,
                    id_proyecto:proyecto.id_proyecto,
                    id_orientacion_proyecto:proyecto.id_orientacion_proyecto
                }
                return body
            }
            
        
    }
    
}

export function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export const estados = async (estados, id) => {
    let contador = 0;

    for (let index = 0; index < estados.length; index++) {
        if (estados[index].estado === "N/A") {
            contador = contador + 1
        }
    }
    if (contador !== 0) {
        
        const respuesta = await axios.get(`${rutaAxios}Mapa_soluiones/mapa_soluciones/public/api/desplegables/estados/${id}`)
        return respuesta.data
    } else {
        return estados
    }
} 
    

export const hidrologicas = async (estados) => {
    const respuesta = await axios.get(`${rutaAxios}Mapa_soluiones/mapa_soluciones/public/api/desplegables/hidrologicas`)
    return respuesta.data
} 

export const validarEmpty = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] === "" || object[key] === 0) {
                return false
            }
        }
    }
    return true
}

export const formatNumber = (numero) => {
    function decimalAdjust(type, value, exp) {
        // Si el exp no está definido o es cero...
        if (typeof exp === 'undefined' || +exp === 0) {
          return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // Si el valor no es un número o el exp no es un entero...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
          return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
      }
    if (numero.length<8) {
        return numero
    }else {
        numero = numero.slice(0,5)
        let valor = decimalAdjust('round',numero, -3)
        return  `${valor} M`
    }

}

export const stringSlice = (texto, corte) =>{
    if (texto.length > corte) {
        return texto.substring(0, corte)+"..."
    }else {
        return texto
    }
}

export const mediaQueries = (media, document) =>{
    let retorno =  null
    const  myFunction = (mql) => {
        if (mql.matches) { // If media query matches
            
            retorno = true
          
        } else{
            retorno = false
        }
      }

      let mql = window.matchMedia(`(${media})`)
      mql.addListener(myFunction)
      document.addEventListener('DOMContentLoaded', myFunction(mql))
      if (retorno !== null) {
          return retorno
      }
}

export const hastaArray = (id, array) =>{
    let newArray =[]
    for (let index = 0; index < id+1; index++) {
        newArray.push(array[index])
    }
    return newArray
}

export const mapState= (reportes, consulta, condicion = null) => {
    const stringMap = "ABCDEFGHYIJKLMNOPRSTXUVZ"
    let a = [["State", `${consulta}`]]
    for (let index = 0; index < stringMap.length; index++) {
        let e = 0
        const vals = filterValues(reportes, "iso_3166-2", `VE-${stringMap.charAt(index)}`)
        switch (condicion) {
            case "count":
                e=vals.length
                break;
            case "prom":
                vals.map(val=>(
                    e=e+val[consulta]
                ))
                e = e>0?e/vals.length:0
                break;
        
            default:
                vals.map(val=>(
                    e=e+val[consulta]
                ))
                break;
        }
        a.push([`VE-${stringMap.charAt(index)}`, e])
    }
    return a
}

