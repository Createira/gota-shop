import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Registration = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const email = useSelector((state) => {
    return state.email;
  });

  const onChangeValue = (fieldName, value) => {
    setValues({
      ...values,
      [fieldName]: value,
    });
  };

  const onRegister = async () => {
    const response = await axios.post("http://localhost:3002/register", {
      email,
      password: values.password,
    });
    console.log(response)
  };

  const validation = () => {
    if (
      !email?.length ||
      values.password.length === 0 ||
      values.repeatPassword.length === 0
    ) {
      return false;
    }

    if (values.password !== values.repeatPassword) {
      return false;
    }

    if (!/^[a-z0-9A-Z_\.]{1,}@[a-z0-9A-Z\-]+\.[a-z0-9A-Z]+$/.test(email)) {
      return false;
    }

    onRegister();
  };

  return (
    <div className="registration">
      <h2 className="registration__title">Register</h2>
      <div className="form">
        <span>Your email: {email}</span>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) =>
            dispatch({
              type: "EMAIL_CHANGED",
              payload: event.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="password"
          value={values.password}
          onChange={(event) => onChangeValue("password", event.target.value)}
        />
        <input
          type="password"
          placeholder="repeat your password"
          value={values.repeatPassword}
          onChange={(event) =>
            onChangeValue("repeatPassword", event.target.value)
          }
        />
        <button onClick={validation}>Register</button>
      </div>
    </div>
  );
};

export default Registration;
