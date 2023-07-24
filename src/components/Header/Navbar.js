import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { MegaMenu } from "primereact/megamenu";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import { TextField } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";
import Search from "./Search";
import { useEffect } from "react";
import { useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CustomizedAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: "white !important",
  color: "black !important",
});
const CustomizedLoginButton = styled(Button)({
  width: "100% !important",
  color: "#ffffff !important",
  fontSize: "14px !important",
  padding: "8.75px 28px !important",
  backgroundColor: "#000000 !important",
  textTransform: "capitalize !important",
  marginBottom: "15px !important",
  border: "1px solid red !important",
  borderRadius: "10px !important",
  "&:hover": {},
});
const CustomizedRegisterButton = styled(Button)({
  width: "100% !important",
  color: "#000000 !important",
  fontSize: "14px !important",
  padding: "8.75px 28px !important",
  backgroundColor: "#ffffff !important",
  textTransform: "capitalize !important",
  border: "1px solid red !important",
  borderRadius: "10px !important",
  "&:hover": {
    backgroundColor: "#000000 !important",
    color: "#ffffff !important",
  },
});
const CustomizedBackButton = styled(Button)({
  display: "flex !important",
  justifyContent: "flex-start !important",
  alignItems: "center !important",
  color: "#000000 !important",
  fontWeight: "bold !important",
  // marginBottom: "40px !impotrant",
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedMainMenuIndex, setselectedMainMenuIndex] = React.useState("");
  const [selectedMainMenuItems, setselectedMainMenuItems] = React.useState("");
  const [showSearchIcon, setShowSearchIcon] = React.useState(true);

  const pages = [
    {
      label: "Men",
      items: [
        [
          {
            label: "Clothing",
            items: [
              { label: "New in" },
              { label: "View all" },
              { label: "T-Shirts" },
              { label: "Jackets & Coats" },
              { label: "Hoodies & Sweatshirts" },
              { label: "Shorts" },
              { label: "Co-ord sets" },
              { label: "Gift card" },
            ],
          },
        ],
        [
          {
            label: "Footwear",
            items: [
              { label: "View all" },
              { label: "Sneakers" },
              { label: "Slider" },
            ],
          },
        ],
        [
          {
            label: "Accessories",
            items: [{ label: "Sunglasses" }, { label: "Pins" }],
          },
        ],
        [
          {
            label: "Brands",
            items: [
              { label: "Adidas" },
              { label: "New Balance" },
              { label: "Essentials by Koovs" },
              { label: "BALL Copenhagen" },
              { label: "Bravesoul" },
              { label: "The couture club" },
              { label: "Arkk copenhagen" },
              { label: "SHU" },
              { label: "Nike" },
              // { label: "Tigerbear" },
              // { label: "Keen" },
              // { label: "Sive" },
              // { label: "Kangol" },
              // { label: "Comatoes" },
            ],
          },
        ],
      ],
    },
    {
      label: "Women",
      items: [
        [
          {
            label: "Clothing",
            items: [
              { label: "New in" },
              { label: "View all" },
              { label: "Lounge & sleep wear" },
              { label: "Lingerie & innerwear" },
              { label: "Tops" },
              { label: "T-Shirts" },
              { label: "Sweatshirts" },
              { label: "Bodysuit" },
              { label: "Outerwear" },
              { label: "Jeans" },
              { label: "Dress" },
              { label: "Shorts" },
            ],
          },
        ],
        [
          {
            label: "Shoes",
            items: [
              { label: "New in" },
              { label: "View all" },
              { label: "Sneakers" },
              { label: "Heels" },
              { label: "Sliders & flip flops" },
              { label: "Boots" },
            ],
          },
        ],
        [
          {
            label: "Brands",
            items: [
              { label: "Adidas" },
              { label: "New Balance" },
              { label: "Bravesoul" },
              { label: "Koovs sport" },
              { label: "Tigerbear" },
              { label: "Koovs" },
              { label: "KDenim" },
              { label: "Public desire" },
              { label: "Keen" },
              // { label: "SHU" },
              // { label: "Arkk copenhagen" },
              // { label: "The couture club" },
              // { label: "Nike" },
            ],
          },
        ],
        [
          {
            label: "Accesssories",
            items: [
              { label: "Sunglasses" },
              { label: "Pins" },
              { label: "Caps & Hats" },
            ],
          },
        ],
      ],
    },
    {
      label: "Unisex",
      items: [
        [
          {
            label: "Clothing",
            items: [
              { label: "New In" },
              { label: "View all" },
              { label: "T-shirts" },
              { label: "Sweatshirts and Hoodies" },
              { label: "Joggers" },
              { label: "Pants" },
              { label: "Shorts" },
              { label: "Outerwear" },
            ],
          },
        ],
        [
          {
            label: "Footwear",
            items: [{ label: "Slides" }],
          },
        ],
        [
          {
            label: "Accessories",
            items: [
              { label: "View all" },
              { label: "Caps and Hats" },
              { label: "Sunglasses" },
            ],
          },
        ],
      ],
    },
    {
      label: "Artist collab",
      items: [
        [
          {
            label: "Brands",
            items: [{ label: "George Thomas" }, { label: "Boomranng" }],
          },
        ],
      ],
    },
    // {
    //   label: "Collection",
    //   items: [
    //     [
    //       {
    //         label: "Brands",
    //         items: [
    //           { label: "Neon Range" },
    //           { label: "Y2K" },
    //           { label: "Goof fest" },
    //           { label: "Summer Tees" },
    //           { label: "Varsity" },
    //           { label: "Retrograde" },
    //           { label: "Field day" },
    //           { label: "Supernove" },
    //           { label: "General store" },
    //         ],
    //       },
    //     ],
    //   ],
    // },
  ];
  const showSearchOption = () => {
    setShowSearchIcon(!showSearchIcon);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickNavmainMenu = (index) => {
    setselectedMainMenuIndex(index);
  };
  // const handleClickNavmainMenuItems = (index) => {
  //   setselectedMainMenuItems(index);
  // };
  const searchMenuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!searchMenuRef.current.contains(event.target)) {
        if (!showSearchIcon) setShowSearchIcon(!showSearchIcon);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <div className="HeaderNavbar">
        <CustomizedAppBar ref={searchMenuRef}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <div className="Header-items">
                <div className="d-lg-none d-md-flex flex-grow-1">
                  <IconButton onClick={handleOpenNavMenu}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                  >
                    {selectedMainMenuItems === "" && (
                      <>
                        {selectedMainMenuIndex === ""
                          ? pages.map((page, index) => (
                              <>
                                <MenuItem
                                  key={index}
                                  onClick={() => {
                                    handleClickNavmainMenu(index);
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      width: "18.75rem",
                                      display: "flex",
                                      justifyContent: "space-between",
                                      padding: "10px 0px",
                                      // marginTop: "20px",
                                    }}
                                  >
                                    {page.label}
                                    <KeyboardArrowRightIcon />
                                  </Typography>
                                </MenuItem>
                                {index === pages.length - 1 && (
                                  <div className="container">
                                    <h4>My Account</h4>
                                    <CustomizedLoginButton variant="contained">
                                      Login
                                    </CustomizedLoginButton>
                                    <CustomizedRegisterButton variant="contained">
                                      Register
                                    </CustomizedRegisterButton>
                                  </div>
                                )}
                              </>
                            ))
                          : pages?.[selectedMainMenuIndex]?.items?.map(
                              (subPage, subIndex) => (
                                <>
                                  {subIndex === 0 && (
                                    <CustomizedBackButton
                                      size="small"
                                      onClick={() => {
                                        setselectedMainMenuIndex("");
                                      }}
                                    >
                                      <ArrowBackIcon /> Back
                                    </CustomizedBackButton>
                                  )}
                                  <MenuItem
                                    key={subIndex}
                                    onClick={() => {
                                      setselectedMainMenuItems(subIndex);
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        width: "18.75rem",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "15px 0px",
                                      }}
                                    >
                                      {subPage[0]?.label}
                                      <KeyboardArrowRightIcon />
                                    </Typography>
                                  </MenuItem>
                                </>
                              )
                            )}
                      </>
                    )}

                    {pages?.[selectedMainMenuIndex]?.items?.[
                      selectedMainMenuItems
                    ]?.[0]?.items?.map((subPagesPage, subPagesIndex) => {
                      return (
                        <>
                          {subPagesIndex === 0 && (
                            <CustomizedBackButton
                              size="small"
                              onClick={() => {
                                setselectedMainMenuItems("");
                              }}
                            >
                              <ArrowBackIcon /> Back
                            </CustomizedBackButton>
                          )}
                          <MenuItem
                            key={subPagesIndex}
                            onClick={() => {
                              // handleClickNavmainMenuItems(subPagesIndex);
                            }}
                          >
                            <Typography
                              sx={{
                                width: "18.75rem",
                                display: "flex",
                                justifyContent: "flex-start",
                                padding: "5px 0px",
                              }}
                            >
                              {subPagesPage?.label}
                            </Typography>
                          </MenuItem>
                        </>
                      );
                    })}
                    {/* <Typography>
                      <h1>My Account</h1>
                      <Button variant="contained">Login</Button>
                      <br />
                      <Button variant="contained">Register</Button>
                    </Typography> */}
                  </Drawer>
                </div>
                <div className="d-none d-lg-flex flex-grow-1">
                  <MegaMenu
                    model={pages}
                    orientation="horizontal"
                    breakpoint="96px"
                    className="MegaMenu"
                  />
                </div>
              </div>
              <div className="logo justify-content-start">
                <Typography className="logoTypography">Anime</Typography>
              </div>
              <div className="search_section col-md-1 d-flex justify-content-end">
                {showSearchIcon ? (
                  <Tooltip
                    title="Search"
                    className="d-flex justify-content-center"
                  >
                    <IconButton onClick={showSearchOption}>
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Search />
                )}
                <Tooltip
                  title="Account"
                  className="d-lg-flex d-none d-md-none justify-content-center"
                >
                  <IconButton>
                    <PersonOutlineIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Wishlist"
                  className="d-lg-flex d-none d-md-none justify-content-center"
                >
                  <IconButton>
                    <StarBorderIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Cart" className="d-flex justify-content-center">
                  <IconButton>
                    <ShoppingBagOutlinedIcon className="d-flex justify-content-center" />
                  </IconButton>
                </Tooltip>
              </div>
            </Toolbar>
          </Container>
        </CustomizedAppBar>
      </div>
    </>
  );
}
export default Navbar;
