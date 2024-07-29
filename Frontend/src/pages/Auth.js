import React, { useContext, useState } from "react";
// import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { useLocation, useNavigate } from "react-router-dom";
import { registration, login, changePassword } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import AuthPanel from "../components/AuthPanel/AuthPanel";
import ChangePassPanel from "../components/ChangePassPanel";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const [isChangePassword, setIsChangePassword] = useState(false);

  const changePass = async () => {
    changePassword(username, password, passwordCheck)
      .then((data) => {
        if (data.id) {
          setIsChangePassword(false);
          setPasswordCheck("");
          setPassword("");
          setError("");
        } else setError("Ошибка смены пароля");
      })
      .catch((e) => {
        console.error(e.message);
        setError(e.message);
      });
  };

  const accept = async () => {
    try {
      let data;
      if (isLogin) {
        if (!password || !username) throw new Error("Не все поля заполнены");
        data = await login(username, password);
      } else {
        if (!password || !username || !name)
          throw new Error("Не все поля заполнены");
        if (password !== passwordCheck) throw new Error("Пароли не совпадают");
        data = await registration(username, password, name);
      }
      if (data.error) throw new Error(data.error);
      user.setUser({ userId: data.id });
      user.setIsAuth(true);
      navigate(MAIN_ROUTE);
    } catch (e) {
      console.error(e.message);
      setError(e.message);
    }
  };
  return (
    <div
      className={"page center"}
      // style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}
    >
      {isChangePassword ? (
        <ChangePassPanel
          setUsername={setUsername}
          username={username}
          error={error}
          setPassword={setPassword}
          setPasswordCheck={setPasswordCheck}
          password={password}
          passwordCheck={passwordCheck}
          setIsChangePassword={setIsChangePassword}
          changePassword={changePass}
        ></ChangePassPanel>
      ) : (
        <AuthPanel
          setName={setName}
          setUsername={setUsername}
          name={name}
          username={username}
          error={error}
          isLogin={isLogin}
          setPassword={setPassword}
          setPasswordCheck={setPasswordCheck}
          password={password}
          passwordCheck={passwordCheck}
          accept={accept}
          setIsChangePassword={setIsChangePassword}
        ></AuthPanel>
      )}
    </div>
  );
});

export default Auth;
