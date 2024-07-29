import React from "react";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
// import styles from "./AuthPanel.module.scss"

const ChangePassPanel = (props) => {
  const navigate = useNavigate();
  const {
    setUsername,
    setName,
    username,
    name,
    error,
    changePassword,
    setPassword,
    setPasswordCheck,
    password,
    passwordCheck,
    setIsChangePassword,
  } = props;

  return (
    <div
    // className={styles.authPanel}
    >
      <div
      // className={"center " + styles.authForm}
      >
        <h2
        // className="m-auto"
        >
          Смена пароля
        </h2>
        <input
          type={"text"}
          style={{ marginBottom: "5px" }}
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Пароль"
          style={{ marginBottom: "5px" }}
          value={password}
          type={"password"}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Новый пароль"
          style={{ marginBottom: "5px" }}
          value={passwordCheck}
          type={"password"}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <div style={{ marginBottom: "10px" }}>
          <div
            // className={"textHover"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsChangePassword(false);
              navigate(LOGIN_ROUTE);
            }}
          >
            Вернуться к авторизации
          </div>
        </div>
        <input
          type={"submit"}
          onClick={() => changePassword()}
          // className={"button hover"}
          value={"Сменить"}
          style={{ marginBottom: "10px" }}
        ></input>
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </div>
    </div>
  );
};

export default ChangePassPanel;
