import React from "react";
import { Ullist } from "../../footer/styled";

const LinksComponent = (props) => {
  return (
    <div>
      <h5>{props.title}</h5>
      <Ullist>
        {props.links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </Ullist>
    </div>
  );
};

export default LinksComponent;
