import React, { useReducer, useImperativeHandle } from "react";
import Validator from "../../utils/Validator";

const Input = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      isValid: isValid,
      getValue: getValue,
    };
  });

  const valueReducer = (state, action) => {
    let result = undefined;
    if (action.type === "USER_INPUT") {
      result = {
        value: action.value,
        isValid: Validator.ByType(props.type, action.value),
      };
    } else if (action.type === "INPUT_BLUR") {
      result = {
        value: state.value,
        isValid: Validator.ByType(props.type, state.value),
      };
    }
    return result;
  };

  const [valueState, dispatchValue] = useReducer(valueReducer, {
    value: "",
    isValid: null,
  });

  const updateValueHandler = (event) => {
    dispatchValue({ type: "USER_INPUT", value: event.target.value });
    props.validateForm((prev) => (prev + 1 > 5 ? 0 : prev + 1));
  };

  const validateValueHandler = () => {
    dispatchValue({ type: "INPUT_BLUR" });
    props.validateForm((prev) => (prev + 1 > 5 ? 0 : prev + 1));
  };

  const isValid = () => valueState.isValid;
  const getValue = () => valueState.value;

  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <input
        //ref={inputRef}
        className={
          "form-control" +
          (valueState.isValid === false ? " invalid_input" : "")
        }
        type={props.type}
        value={valueState.value}
        onBlur={validateValueHandler}
        onChange={updateValueHandler}
      />
      {valueState.isValid === false && (
        <div className="invalid_feedback">{props.errorMsg}</div>
      )}
    </div>
  );
});

export default Input;
