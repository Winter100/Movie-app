import { useState } from "react";

function useInput(validValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [istouch, setIstouch] = useState(false);

  const valueIsValid = validValue(enteredValue);

  const itIs = !valueIsValid && istouch;

  const onChangeValue = (e) => {
    setEnteredValue(e.target.value);
  };

  const onBlur = () => {
    setIstouch(true);
  };

  return {
    enteredValue,
    onChangeValue,
    onBlur,
    valueIsValid,
    itIs,
  };
}

export default useInput;
