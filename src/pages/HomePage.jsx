import React, { Component } from "react";
import GasLogEntryTable from "../components/GasLogEntryTable";
import Header from '../components/Header'
export default class HomePage extends Component {
  render() {
    return (
      <>
        <Header text="Registro de gastos" description="Los últimos gastos de gasolina"/>
        <GasLogEntryTable></GasLogEntryTable>
      </>
    );
  }
}
