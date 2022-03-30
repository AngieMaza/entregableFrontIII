import React, { Component } from "react";
import "../index.css";

export default class Recordatorio extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior:{this.props.seleccionAnterior}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{this.props.historial.map((e,index) => <li key={index}>{e}</li>)}</ul>
      </div>
    );
  }
}