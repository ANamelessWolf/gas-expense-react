import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import GasLogEntry from "../model/GasLogEntry";
import GasStationCard from "./UI/GasStationCard";
import GasExpenseCard from "./UI/GasExpenseCard";
import GasDistanceCard from "./UI/GasDistanceCard";

import TravelDetailsCard from "./UI/TravelDetailsCard";
import TableCRUDButtons from "./shared/TableCRUDButtons";

export default function GasLogEntryTable() {
  const ctx = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = GasLogEntry.GetFormatIndexTable(
      ctx.gas_log.data,
      ctx.fuel_sation.data,
      ctx.catalogue.GAS_TYPE
    );
    setData((prev) => data);
  }, [ctx.gas_log.data, ctx.fuel_sation.data, ctx.catalogue.GAS_TYPE]);

  return (
    <>
      <table className="table" style={{marginLeft:"10%", width:"80%"}}>
        <thead className="thead-dark">
          <tr className="text-left">
            <th className="col">Gasolinera</th>
            <th className="col">Distancia</th>
            <th className="col">Gasto</th>
            <th className="col">Viaje</th>
            <th className="col"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                <td>
                  <GasStationCard
                    gasStation={row.gasStation}
                    gasType={row.gasType}
                    price={row.price}
                  ></GasStationCard>
                </td>
                <td>
                  <GasDistanceCard
                    distance={row.distance}
                    km_l={row.km_l}
                  ></GasDistanceCard>
                </td>
                <td>
                  <GasExpenseCard
                    expense={row.expense}
                    costo_l={row.costo_l}
                  ></GasExpenseCard>
                </td>
                <td>
                  <TravelDetailsCard
                    start={row.travel.start}
                    end={row.travel.end}
                    days={row.travel.days}
                  ></TravelDetailsCard>
                </td>
                <td>
                <TableCRUDButtons></TableCRUDButtons>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
