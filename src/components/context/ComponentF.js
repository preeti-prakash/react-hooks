import React from "react";
import { UserContext, channelContext } from "../../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              return{" "}
              {(channel) => {
                return (
                  <div>
                    User Context va;ue is {user}, Channel is {channel}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;

//context api helps to access props in a nested nodes without manually passing the props at each leavel of the DOM tree
//nesting multiple context values. To avoid nesting of JSX we use the useContext() hook to make it simpler
