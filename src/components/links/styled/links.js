import React from "react";
import { Ullist } from "../../footer/styled";
import { useState } from "react";
import { useEffect } from "react";

const LinksComponent = (props) => {
  // const { links, title } = props;
  // const [data, setData] = useState();
  // const fetchData = async () => {
  //   const response = await fetch("linkData.json");
  //   try {
  //     const jsonData = await response.json();
  //     console.log("jsonDAta", jsonData);
  //     setData(jsonData.links);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("support links: ", data, "aboutLInks: ", data);
  // const { links, title } = props;
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   // setData(links);
  // }, []);
  // console.log("data: ", links);
  return (
    <div>
      {/* <h5>{title}</h5>
      <Ullist>
        {links &&
          links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
      </Ullist> */}
    </div>
  );
};

export default LinksComponent;
