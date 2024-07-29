import React, { useContext} from "react";
import { Navigate } from "react-router-dom";
import { Context } from "..";

const NonAuthPanel = () => {
  const { user } = useContext(Context);

  return user.isAuth ? (
    <Navigate to="/main" />
  ) : (
    <div className="page">
      <div className="contentBlock">
        <div>
          <h1>Авторизируйся!</h1>
        </div>
      </div>
    </div>
  );
};

export default NonAuthPanel;
