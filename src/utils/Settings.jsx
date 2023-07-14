const LOCALE = "es-mx";

const Settings = {
  Formatter: {
    Money: (value) => {
      const formatter = new Intl.NumberFormat(LOCALE, {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formatter.format(value);
    },
    Date: (value) => {
      const formatter = new Intl.DateTimeFormat(LOCALE, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      return formatter.format(value);
    },
    Decimal: (value) => {
      const formatter = new Intl.NumberFormat(LOCALE, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formatter.format(value);
    },
  },
};

export default Settings;
