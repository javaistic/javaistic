import React from "react";

const Status = ({height=57,width=215}) => {
  return (
    <div>
      <iframe className="pt-2 pb-2"
        src="https://javaistic.instatus.com/embed-status/light-sm"
        height={height}
        width={width}
        fontSize="20px"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Status;
