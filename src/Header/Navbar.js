import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CustomizedButton = styled(Button)({
  background: "none !important",
  "&:hover": {
    background: "none !important",
  },
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [pages, setPages] = React.useState([
    { label: "Men" },
    { label: "Women" },
    { label: "Unisex" },
    { label: "Artist collab" },
    { label: "Collection" },
  ]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="HeaderNavbar">
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div
              className="items"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
              }}
            >
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          width: "300px",
                        }}
                      >
                        {page.label}
                        <span>
                          <KeyboardArrowRightIcon
                            sx={{
                              fontSize: "20px",
                              textAlign: "end",
                            }}
                          />
                        </span>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page, index) => (
                  <CustomizedButton
                    className="NavbarItems"
                    key={page.label + index}
                    onClick={handleCloseNavMenu}
                    disableRipple={true}
                    disableElevation={true}
                    sx={{
                      my: 2,
                      color: "#000000",
                      display: "block",
                      fontSize: "14px",
                      fontFamily: "SF-Body-font",
                      textTransform: "initial",
                      fontWeight: "600",
                      marginRight: "1px",
                      boxSizing: "border-box",

                      "&::after": {
                        content: '""',
                        display: "block",
                        borderRadius: "1px",
                        marginBottom: "2px",
                      },
                      "&:hover::after": {
                        borderBottom: "2px solid black",
                        marginBottom: "0px",
                      },
                    }}
                    onMouseOver={() => {
                      let pagesTemp = JSON.parse(JSON.stringify(pages));
                      pagesTemp = pagesTemp.map((item, subindex) => {
                        if (subindex === index) {
                          item.isSelected = true;
                          // console.log(0);
                        } else {
                          item.isSelected = false;
                          // console.log(1);
                        }
                        return item;
                      });
                      setTimeout(() => {
                        setPages(pagesTemp);
                      }, 100);
                    }}
                    onMouseOut={() => {
                      let pagesTemp = JSON.parse(JSON.stringify(pages));
                      pagesTemp = pagesTemp.map((item, subindex) => {
                        item.isSelected = false;
                        return item;
                      });
                      setTimeout(() => {
                        setPages(pagesTemp);
                      }, 100);
                    }}
                  >
                    {page.label}
                    {/* {
                      <KeyboardArrowDownIcon
                        style={
                          page?.isSelected
                            ? {
                                transform: "rotate(180deg)",
                              }
                            : {}
                        }
                        fontSize="small"
                      />
                    } */}
                    {/* <KeyboardArrowDownIcon fontSize="small"> */}
                    {page?.isSelected ? (
                      <KeyboardArrowUpIcon fontSize="small" />
                    ) : (
                      <KeyboardArrowDownIcon fontSize="small" />
                    )}
                    {/* </KeyboardArrowDownIcon> */}
                  </CustomizedButton>
                ))}
              </Box>
            </div>
            <div
              className="logo"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "40%",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "SF-Body-font",
                  color: "#000000",
                }}
              >
                Anime Verse
              </Typography>
            </div>
            <div
              className="search_section"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
              }}
            >
              <Tooltip title="Search">
                <IconButton className="Tooltip">
                  <SearchIcon style={{ color: "#3d3d3d" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Account">
                <IconButton>
                  <PersonOutlineIcon style={{ color: "#3d3d3d" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Wishlist">
                <IconButton>
                  <StarBorderIcon style={{ color: "#3d3d3d" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cart">
                <IconButton>
                  <ShoppingBagOutlinedIcon style={{ color: "#3d3d3d" }} />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
