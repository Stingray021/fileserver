import React, { useEffect, useState } from "react";
import { getFileName, getFiles } from "../http/fileAPI";

const Main = () => {
  const [fileList, setFileList] = useState([]);
  const [imgURL, setImgURL] = useState("");
  useEffect(() => {
    getFiles().then((data) => {
      setFileList(data.fileList);
      console.log(data.fileList);
    });
  }, []);
  const getFile = (name) => {
    console.log("click");
    getFileName(name).then((data) => {
      const file = new Blob([data.data], {
        type: data.type,
      });
      const fileURL = URL.createObjectURL(file);
      const newWindow = window.open();
      newWindow.location.href = fileURL;
    });
  };

  return (
    <div className="page">
      <div className="contentBlock">
        <div>
          <h1>Список файлов</h1>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "40px",
            marginRight: "40px",
            flexDirection: "column",
          }}
        >
          {fileList?.map((fileName) => (
            <input
              style={{ marginTop: "15px" }}
              className="button"
              type="button"
              key={fileName}
              value={fileName}
              onClick={(e) => getFile(e.target.value)}
            ></input>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
