import React from "react";
import { useHeader } from "../../hooks";
import "./index.css";
import { MdOutlineQueueMusic } from "react-icons/md";

const Header = () => {
  const { location, handleNavigate } = useHeader();

  return (
    <div className={"headerContainer"}>
      <div className="navigationLinks">
        <div
          onClick={() => handleNavigate("artists")}
          className={`navigationItem ${
            location.pathname == "/" ? "active" : ""
          }`}
        >
          <div className="navigationIcon">
            <MdOutlineQueueMusic size={25} />
          </div>
          <p className="navigationText">Artistas</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
