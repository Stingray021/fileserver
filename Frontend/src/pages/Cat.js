import React, {useState} from "react";

const Cat = () => {
  const [imgURL, setImgURL] = useState("");

  const getImage = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cat");
      const data = await response.json();
      setImgURL(data.url);
      console.log(data.url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page">
      <div className="contentBlock">
        <div>
          <h1>Cat</h1>
        </div>
        <div>      
          <input className="button" type="button" onClick={getImage} value="Жми!"></input>
        </div>
        <div className="imgBlock">
          <img src={imgURL}></img>
        </div>
      </div>
    </div>
  );
};

export default Cat;
