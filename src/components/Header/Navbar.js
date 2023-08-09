import React from "react";
import { useEffect, useRef } from "react";
import { MegaMenu } from "primereact/megamenu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Search from "./Search";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { CustomizedAppBar } from "./Styled";
import DrawerMenu from "./DrawerMenu";
import axios from "axios";

function Navbar() {
  const [showSearchIcon, setShowSearchIcon] = React.useState(true);
  const [pages, setPages] = React.useState([]);

  const headerItems = [
    // { title: "Search", icon: <SearchIcon /> },
    {
      title: "Account",
      icon: <PersonOutlineIcon />,
      className: "d-lg-flex d-none d-md-none justify-content-center",
      key: "account", // Add a unique 'key' prop for this item
    },
    {
      title: "Wishlist",
      icon: <StarBorderIcon />,
      className: "d-lg-flex d-none d-md-none justify-content-center",
      key: "wishlist", // Add a unique 'key' prop for this item
    },
    {
      title: "Cart",
      icon: <ShoppingBagOutlinedIcon />,
      className: "d-flex justify-content-center",
      key: "cart", // Add a unique 'key' prop for this item
    },
  ];

  useEffect(() => {
    async function getData() {
      let data = await axios.get("data.json");
      setPages(data.data);
    }
    getData();
  }, []);

  const showSearchOption = () => {
    setShowSearchIcon(!showSearchIcon);
  };

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
        <CustomizedAppBar
          ref={searchMenuRef}
          sx={{ position: "absolute", top: "51px" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <div className="Header-items">
                <DrawerMenu />
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
                {headerItems.map((items) => {
                  return (
                    <>
                      <Tooltip
                        key={items.key}
                        title={items.title}
                        className={items.className}
                      >
                        <IconButton>{items.icon}</IconButton>
                      </Tooltip>
                    </>
                  );
                })}
              </div>
            </Toolbar>
          </Container>
        </CustomizedAppBar>
      </div>
    </>
  );
}
export default Navbar;
