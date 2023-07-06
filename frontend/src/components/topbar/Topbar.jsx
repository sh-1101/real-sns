import React from "react";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input
            type="text"
            className="searchInput"
            placeholder="探し物何ですか？"
          />
        </div>
      </div>
      <div className="topberRight">
        <div className="topbarIconItem">1</div>
        <div className="topbarIconItem">2</div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
  );
}
