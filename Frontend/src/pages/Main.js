import React, { useEffect, useState } from "react";

const Main = () => {
  const [fileList, setFileList] = useState([]);
  const [imgURL, setImgURL] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/api/file/").then((res) => {
      res.json().then((data) => {
        console.log(data.fileList);
        setFileList(data.fileList);
      });
    });
  }, []);
  const getFile = (name) => {
    console.log("click");
    fetch("http://localhost:8080/api/file/" + name).then((res) => {
      res.blob().then((data) => {
        const file = new Blob([data], {
          type: res.headers.get("Content-Type"),
        });
        const fileURL = URL.createObjectURL(file);
        const pdfWindow = window.open();
        pdfWindow.location.href = fileURL;
      });

    });
  };

  return (
    <div className="page">
      <div className="contentBlock">
        <div>
          <h1>Список файлов</h1>
        </div>
        <div style={{display: "flex",marginLeft: "40px", marginRight: "40px", flexDirection: "column"}}>
        {fileList?.map((fileName) => (
        <input
          style={{marginTop: "15px"}}
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
