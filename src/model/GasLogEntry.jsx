import Http from "../utils/Http";
import Settings from "../utils/Settings";
import Tools from "../utils/Tools";
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

  static add = (newEntry) => {
    Http.POST(SERVICE_NAME, newEntry, (data) => console.log(data));
  };

  static GetFormatIndexTable = (data, gas_stations, gas_types) => {
    const gasStations = Object.fromEntries(
      gas_stations.map((x) => [x.id, x.station_name])
    );
    const gasTypes = Object.fromEntries(
      gas_types.map((x) => [x.id, x.gas_name])
    );

    const values= data.map((item) => {
      const startDate = new Date(item.f_ini);
      const endDate = new Date(item.f_fin);
      return {
        gasStation: gasStations[item.gas_station],
        gasType: gasTypes[item.gas_type],
        liters: Settings.Formatter.Decimal(+item.litros),
        price: Settings.Formatter.Money(+item.costo > 0 ? +item.costo / +item.litros : 0),
        expense: Settings.Formatter.Money(+item.costo),
        distance: Settings.Formatter.Decimal(+item.distancia),
        km_l: Settings.Formatter.Decimal(
          +item.litros > 0 ? +item.distancia / +item.litros : 0
        ),
        costo_l: Settings.Formatter.Money(
          +item.distancia > 0 ? +item.costo / +item.distancia : 0
        ),
        travel: {
          start: Settings.Formatter.Date(startDate),
          end: Settings.Formatter.Date(endDate),
          days: Tools.GetDays(startDate, endDate),
        },
      };
    });
    return values;
  };
}

export default GasLogEntry;
