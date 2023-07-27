import React from "react";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CustomizedAppBar } from "./Styled";

function Search() {
  const headerItems = [
    { title: "Account", icon: <PersonOutlineIcon /> },
    { title: "Wishlist", icon: <StarBorderIcon /> },
    { title: "Cart", icon: <ShoppingBagOutlinedIcon /> },
  ];
  return (
    <>
      <CustomizedAppBar>
        <Container maxWidth="xl">
          <div className="row">
            <div className="d-flex mt-3">
              <div className="d-md-flex d-none d-sm-none justify-content-start col-lg-2 col-md-2">
                <h1>
                  <b>Anime</b>
                </h1>
              </div>
              <div className="d-flex justify-content-center col-lg-8 col-md-8 col-sm-12 pt-2">
                <TextField
                  id="outlined-basic"
                  // label="Search"
                  variant="outlined"
                  className="InputField"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <NavLink to="/">
                          <SearchIcon />
                        </NavLink>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="d-md-flex d-none d-sm-none justify-content-end col-lg-2 col-md-2">
                {headerItems.map((items, index) => {
                  return (
                    <>
                      <Tooltip
                        key={index}
                        title={items.title}
                        className="header-search-items"
                      >
                        <IconButton>{items.icon}</IconButton>
                      </Tooltip>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="Search-Btn text-center">
              <span>Popular Searches: </span>
              {/* <Button>T-Shirt</Button>
              <Button>Blue</Button>
              <Button>Jacket</Button> */}
              <div className="SearchSectionBtn">
                <NavLink to="/">Blue</NavLink>
                <NavLink to="/">Jacket</NavLink>
                <NavLink to="/">T-Shirt</NavLink>
              </div>
            </div>
          </div>
        </Container>
      </CustomizedAppBar>
    </>
  );
}
export default Search;
