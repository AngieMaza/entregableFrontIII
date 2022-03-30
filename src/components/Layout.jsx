import React, { Component } from "react";
import "../index.css";
import data from "./data.json";
import Botones from "../components/Botones";
import Recordatorio from "../components/Recordatorio";
import Swal from "sweetalert2";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      seleccionPrevia: "",
      contador: 0,
    };
  }

  clickFunction = (evento) => {
    const id = evento.target.id;
    if (this.state.contador >= 7) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'FIN!!!',
            showConfirmButton: false,
            timer: 1500
        })
        } else if (id === "A" && this.state.seleccionPrevia !== "A") {
    this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "A",
        historial: [...this.state.historial, "A"],
    });
    } else if (id === "A" && this.state.seleccionPrevia === "A") {
    this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "A",
        historial: [...this.state.historial, "A"],
    });
    } else if (id === "B" && this.state.seleccionPrevia === "A") {
    this.setState({
        contador: this.state.contador + 3,
        seleccionPrevia: "B",
        historial: [...this.state.historial, "B"],
    });
    } else if (id === "B") {
    this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "B",
        historial: [...this.state.historial, "B"],
    });
    }
};

componentWillMount() {
    Swal.fire({
        title: 'Bienvenido a historias',
        text: "Quieres jugar?",
        icon: 'info',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, empezemos!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title:'Preparate!',
            text:'Selecciona A o B para customizar tu aventura.',
            icon:'info',
            confirmButtonColor: '#3085d6',
        })
        this.setState({
            historial: [],
            seleccionPrevia: "",
            contador: 0,
        });
        }
    })
}

  render() {
    return (

      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Botones
          clickFunction={this.clickFunction}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Recordatorio
          seleccionAnterior={this.state.seleccionPrevia}
          historial={this.state.historial}
        />

      </div>

    );
  }
}
