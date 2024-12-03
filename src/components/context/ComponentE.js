import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, channelContext } from "../../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(channelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default ComponentE;
