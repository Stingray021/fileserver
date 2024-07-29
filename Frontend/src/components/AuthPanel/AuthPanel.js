import React from "react";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
// import styles from "./AuthPanel.module.scss"

const AuthPanel = (props) => {
  const navigate = useNavigate();
  const {
    isLogin,
    setIsChangePassword,
    setUsername,
    setName,
    username,
    name,
    error,
    accept,
    setPassword,
    setPasswordCheck,
    password,
    passwordCheck,
  } = props;

  return (
    <div
    // className={styles.authPanel}
    >
      <div
      // className={"center " + styles.authForm}
      >
        <h2
        >
          {isLogin ? "Вход" : "Регистрация"}
        </h2>
        <input
          type={"text"}
          style={{ marginBottom: "5px" }}
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {isLogin ? (
          <div></div>
        ) : (
          <input
            type={"text"}
            style={{ marginBottom: "5px" }}
            placeholder="Имя"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          placeholder="Пароль"
          style={{ marginBottom: "5px" }}
          value={password}
          type={"password"}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLogin ? null : (
          <input
            placeholder="Повторите пароль"
            style={{ marginBottom: "5px" }}
            value={passwordCheck}
            type={"password"}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        )}
        <div style={{ marginBottom: "10px" }}>
          {isLogin ? (
            <div
              // className={"textHover"}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(REGISTRATION_ROUTE)}
            >
              Регистрация
            </div>
          ) : (
            <div
              // className={"textHover"}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Есть аккаунт? Войдите
            </div>
          )}
        </div>
        <input
          type={"submit"}
          onClick={() => accept()}
          // className={"button hover"}
          value={isLogin ? "Вход" : "Регистрация"}
          style={{ marginBottom: "10px" }}
        ></input>
        {isLogin ? (
          <div
            // className={"textHover"}
            style={{ cursor: "pointer" }}
            onClick={() => setIsChangePassword(true)}
          >
            Сменить пароль
          </div>
        ) : (
          <div></div>
        )}
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
      </div>
    </div>
  );
};

export default AuthPanel;
