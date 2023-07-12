const NumberValidator = (value) =>
  value !== null && value.length > 0 && !isNaN(value);

const Validator = {
  Number: (value) => {
    return NumberValidator(value);
  },
  ByType: (type, value) => {
    let flag;
    switch (type) {
      case "number":
        flag = NumberValidator(value);
        break;
      default:
        flag = value.length > 0;
        break;
    }
    return flag;
  },
};

export default Validator;
