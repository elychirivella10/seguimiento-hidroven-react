//export const rutaAxios = "https://minaguas.com/";
export const rutaAxios = "http://localhost:80/" ;

export const tipos = {
    produccion:0,
    pozo:1,
    fugas:2,
    tomas:3,
    brippas:4,
    afectaciones:5,
    abastecimiento:6,
    pozos:7,
    brippasG:8,
    sistemas:9
}

export const mapTipos = [
    [{value:"metros_cubicos", nombre:"Produccion", condition: "sum"}],
    [{value:"lps", nombre:"Lps recuperados", condition: "sum"}, {value:"pozo", nombre:"Pozos rehabilitados", condition: "count"}],
    [{value:"cantidad_fugas_reparadas", nombre:"Fugas reparadas", condition: "sum"}, {value:"lps_recuperados", nombre:"Lps recuperados", condition: "sum"}],
    [{value:"cantidad_tomas_eliminadas", nombre:"Tomas ilegales", condition: "sum"}, {value:"lps_recuperados", nombre:"Lps recuperados", condition: "sum"}],
    [{value:"lps_recuperados", nombre:"Lps recuperados", condition: "sum"},{value:"averias_levantadas_as", nombre:"Averias levantadas as", condition: "sum"},{value:"averias_levantadas_ap", nombre:"Averias levantadas ap", condition: "sum"},{value:"averias_corregidas_ap", nombre:"Averias corregidas ap", condition: "sum"}, {value:"averias_corregidas_as", nombre:"Averias corregidas as", condition: "sum"}],
    [{value:"equipos_danados", nombre:"Equipos dañados", condition: "sum" }, {value:"horas_sin_servicio", nombre:"Horas sin servicio", condition:"sum"}, {value:"afectacion", nombre:"Afectaciones", condition:"count"}],
    [{value:"porcentaje_operatividad", nombre:"Operatividad", condition: "prom"}, {value:"porcentaje_abastecimiento", nombre:"Abastecimiento", condition:"prom"}]
]