import React from "react";
import { Ullist } from "../../footer/styled";
import { Product } from "../../../store/slice/Slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const LinksComponent = (props) => {
  const { links, title } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Product({ url: "/LINKS", base: "2" }));
  }, []);

  return (
    <div>
      <h5>{title}</h5>
      <Ullist>
        {links?.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.title}</a>
            </li>
          );
        })}
      </Ullist>
    </div>
  );
};

export default LinksComponent;
