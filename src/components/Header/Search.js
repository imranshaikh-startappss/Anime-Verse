import React from "react";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { NavLink } from "react-router-dom";
import { CustomizedAppBar } from "./Styled";

function Search() {
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
                <Tooltip title="Account" className="header-search-items">
                  <IconButton>
                    <PersonOutlineIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Wishlist" className="header-search-items">
                  <IconButton>
                    <StarBorderIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Cart" className="header-search-items">
                  <IconButton>
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                </Tooltip>
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
