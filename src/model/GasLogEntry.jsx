import Http from "../utils/Http";

const SERVICE_NAME = "gas_drive_logging";

class GasLogEntry {
  constructor(data) {
    data && Object.assign(this, data);
  }

  static sort = (a, b) => {
    if (a.f_ini < b.f_ini) {
      return -1;
    }
    if (a.f_ini > b.f_ini) {
      return 1;
    }
    return 0;
  };

  static refresh = (setHandler) => {
    Http.GET(SERVICE_NAME, (data) =>
      setHandler(() => data.sort(GasLogEntry.sort))
    );
  };

  static add = (newEntry, ) => {
    Http.POST(SERVICE_NAME, newEntry, (data) => console.log(data));
  };
}

export default GasLogEntry;
