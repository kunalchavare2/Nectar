import React from "react";
import LoadingStyle from "./Loading.styled";
import LoadingImg from "../../Atoms/Loading/LoadingImg";
import Drawer from "./../../Atoms/Drawer/Drawer";

const Loading = ({ showLoading }) => {
  const extraStyles = `  
    backdrop-filter: blur(3px) saturate(180%);
    -webkit-backdrop-filter: blur(3px) saturate(180%);
    background-color: rgba(255, 255, 255, 0);
    z-index:199;
    `;
  return (
    <LoadingStyle>
      <Drawer isOpen={showLoading} extraStyles={extraStyles}>
        <LoadingImg className="loading" />
      </Drawer>
    </LoadingStyle>
  );
};

export default Loading;
