import React, { useState } from "react";
import { Drawer } from "antd";

const DrawerSearch = (props) => {
  const { movieInfo, open, setOpen, onClose } = props;

  return (
    <>
      <Drawer
        style={{ textAlign: "center" }}
        title={`${movieInfo.Title}`}
        placement="right"
        size={"large"}
        onClose={onClose}
        open={open}
      >
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "18px",
            width: "40%",
          }}
          src={`${movieInfo.Poster}`}
          alt=""
        />
        <h4>Genre: </h4>
        {`${movieInfo.Genre}`}
        <h4>Plot: </h4>
        {`${movieInfo.Plot}`}
      </Drawer>
    </>
  );
};

export default DrawerSearch;
