import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["States", "Latitude"],
  ["VE-Y", 0],
  ["VE-V", 0],
  ["VE-P", 3],
  ["VE-Y", 4],
  ["VE-L", 5],
  ["VE-W", 30],
  ["VE-T", 25],
  ["VE-I", 30],
  ["VE-H", 28],
  ["VE-G", 30],
  ["VE-A", 4],
  ["VE-J", 30],
  ["VE-K", 15],
  ["VE-D", 30],
  ["VE-J", 21],
  ["VE-U", 18],
];

export const options = {
  region: "VE", // Africa
  displayMode: "regions",
  resolution: "provinces",
  colorAxis: { colors: ["#eee", "#93F484", "#03c9d7", "#fb9678", "#f14668", "#F2EA5E"] },
  backgroundColor: "#fff",
  datalessRegionColor: "#eee",
  defaultColor: "#fff"
};


const GeoChart = ({datos}) =>{
  console.log(datos)
    return(
        <Chart
            chartType="GeoChart"
            width="100%"
            height="100vh"
            data={datos}
            options={options}
        />
    )
}
 
export default GeoChart