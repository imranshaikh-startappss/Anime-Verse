import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../store/slice/Slice";
import { Container } from "@mui/material";
import Style from "./styled";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.counter;
  });
  console.log(data)

  useEffect(() => {
    // dispatch(Product({method:"POST", url:"/users",base:0, config:{
    //   body: {
    //     name: "TestNow",
    //     email: "Email@email.com",
    //     password: "PASSWORD",
    //     confirm_password: "PASSWORD"
    //   }
    // } }))  
    dispatch(Product({url: '/users'}))  
  },[dispatch]);
  return (
    <Style>
      <div className="main">
        <Container fixed>
          <div className="container">
            <NavLink to={"/"}>Home</NavLink>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <span>Products List</span>
            
          </div>
        </Container>
        <div className="left">
        </div>
      </div>
    </Style>
  );
};

export default Products;
