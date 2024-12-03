import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <label>FirstName</label>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        ></input>
        <label>LastName</label>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>
        <h2>Your firstname is {name.firstName}</h2>
        <h2>Your lastname is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounter3;

//A state variable can be a number, string, boolean, object, array
// the setState()  will merge the state
/** the useState setter hook will not merge and update the objects, should manually merge it and then pass
 *  value to the setter function. so we use the spread operator that copies all
 *  the properties of the state name and overrides the property firstName at firstName and lastName at lastName*/
