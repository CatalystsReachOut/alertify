import React, { useState } from "react";

function item(props) {
  return (
    <li >
      {props.text}
    </li>
  );
}

export default item;