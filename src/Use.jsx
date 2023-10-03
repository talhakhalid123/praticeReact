import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Tooltip from '@material-ui/core/Tooltip';

const Use = () => {
  
  const [count, setCount] = useState(0);

  const incrmun = () => {
    setCount(count + 1);
  };

  const decri = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("sorry you reached zero");
      setCount(0);
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "10px",
          boxShadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        }}
      >
        {count}
      </h1>
      <div style={{ textAlign: "center", margin: "23px" }}>
        <Tooltip title="add">
        <Button
          onClick={incrmun}
          style={{
            width: "150px",
            height: "50px",
            fontSize: "23px",
            backgroundColor: "pink",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          <AddIcon />
        </Button>
        </Tooltip>
        <Tooltip title="deleted">
        <Button
          onClick={decri}
          style={{
            width: "150px",
            height: "50px",
            fontSize: "23px",
            backgroundColor: "pink",
            cursor: "pointer",
          }}
        >
          <RemoveIcon />
        </Button>
        </Tooltip>

      </div>
    </>
  );
};

export default Use;
