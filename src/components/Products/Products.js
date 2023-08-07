import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../store/slice/Slice";
// import { Container } from "@mui/material";
import Style from "./styled";
// import { NavLink } from "react-router-dom";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.counter.Products;
  });

  useEffect(() => {
    // dispatch(Product({method:"POST", url:"/users",base:0, config:{
    //   body: {
    //     name: "TestNow",
    //     email: "Email@email.com",
    //     password: "PASSWORD",
    //     confirm_password: "PASSWORD"
    //   }
    // } }))
    dispatch(Product({ url: "/Products" }));
  }, [dispatch]);

  console.log("data:", data);
  return (
    <Style>
      <div className="main">
        <div className="container">
          <div className="w-full col-lg6">
            <div id="media-gallery">
              <div id="swiper-container">
                <img
                  id="responsive-image"
                  src="https://s3-alpha-sig.figma.com/img/9347/f011/0d36d4666bb215a203b91d3a229c4e80?Expires=1691971200&Signature=BgWWfy8beAoGTaMPaqMbZXIzqytPsh9m7c-wR4tU6YrcO-jdg5XX~H6bOjstdLZLzmMTVs8YsWg79~Vn3GFGrzqZ4qsb8JrA5bUlkU8MJ7xEUNtc~CZm0eR5x8D5c~T7ZBqt-21z0UuJGpHvRXEGv43MQdasNp2LyNEwIBHCMT60b1Acot7yQb3bg6BEVyxkl-ruw8y44INJhCErGyuZpSTxZqLpNmgxFOMVQzPpt4ffCuntn4K-FzfIiJkTlMmMxdditUM8Jf4NfZAfSrZidLWApBIwPIn6Lwdq7hvO9vbu~ZvX2D3a0WCl9ik6qkuTd36SV8i6XaaMtoBiVT-q-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div className="sf-media-nav">
                <div className="swiper-wrapper">
                  {data?.[0]["image-gallery"]?.map((currElm, id) => {
                    return (
                      <div className="swiper-side" key={id}>
                        <div className="sf-prod-media">
                          <img id="responsive-image" src={currElm} alt="" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full col-lg6"></div>
        </div>
      </div>
    </Style>
  );
};

export default Products;
