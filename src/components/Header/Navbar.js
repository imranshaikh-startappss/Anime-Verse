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
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

const CustomizedAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: "white !important",
  color: "black !important",
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedMainMenuIndex, setselectedMainMenuIndex] = React.useState("");

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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickNavmainMenu = (index) => {
    setselectedMainMenuIndex(index);
  };

  return (
    <div className="HeaderNavbar">
      <CustomizedAppBar>
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
                  {selectedMainMenuIndex === ""
                    ? pages.map((page, index) => (
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
                              padding: "15px 0px",
                            }}
                          >
                            {page.label}
                            <KeyboardArrowRightIcon />
                          </Typography>
                        </MenuItem>
                      ))
                    : pages?.[selectedMainMenuIndex]?.items?.map(
                        (subPage, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            onClick={() => {
                              // handleClickNavmainMenu(subIndex);
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
                        )
                      )}
                  <Typography>
                    <h1>My Account</h1>
                    <Button variant="contained">Login</Button>
                    <br />
                    <Button variant="contained">Register</Button>
                  </Typography>
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
              <Tooltip title="Search" className="d-flex justify-content-center">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
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
      <CustomizedAppBar>
        <Container maxWidth="xl">
          <div className="row">
            <div className="d-flex mt-3">
              <div className="d-md-flex d-none d-sm-none justify-content-start col-lg-2 col-md-2">
                <h1>
                  <b>koovs</b>
                </h1>
              </div>
              <div className="d-flex justify-content-center col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-2">
                <TextField
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                  className="InputField"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
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
              <p>
                Popular Searches : <Button>T-Shirt</Button>
                <Button>Blue</Button>
                <Button>Jacket</Button>
              </p>
            </div>
          </div>
        </Container>
      </CustomizedAppBar>
    </div>
  );
}
export default Navbar;
