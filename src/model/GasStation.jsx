import Http from "../utils/Http";

const SERVICE_NAME = "gas_stations";

class GasStation {
  constructor(data) {
    data && Object.assign(this, data);
  }

  static sort = (a, b) => {
    if (a.station_name < b.station_name) {
      return -1;
    }
    if (a.station_name > b.station_name) {
      return 1;
    }
    return 0;
  };

  static refresh = (setHandler) => {
    Http.GET(SERVICE_NAME, (data) =>
      setHandler(() => data.sort(GasStation.sort))
    );
  };
}

export default GasStation;
