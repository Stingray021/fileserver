import React, { useEffect, useState } from "react";
import { getJokes } from "../http/jokesAPI";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getJokes().then((data) => {
      // console.log(data.jokes);
      setJokes(data.jokes);
    });
  }, []);

  return (
    <div className="page">
      <div className="contentBlock">
        <div>
          <h1>Jokes</h1>
        </div>
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          {jokes.map((value, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: value }}
              style={{
                marginTop: "15px",
                textAlign: "left",
                borderTop: "2px solid #4d415c",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jokes;
