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

const pages = ["Men", "Wonen", "Unisex", "Artist collab", "Collection"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          width: "300px",
                        }}
                      >
                        {page}
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
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#000000",
                      display: "block",
                      fontSize: "14px",
                      fontFamily: "cursive",
                      textTransform: "initial",
                      fontWeight: "600",
                      marginRight: "10px",
                      boxSizing: "border-box",

                      "&::after": {
                        content: '""',
                        display: "block",
                        borderRadius: "1px",
                        marginBottom: "3px",
                        background: "transperent ",
                      },
                      "&:hover::after": {
                        borderBottom: "3px solid black",
                        marginBottom: "0px",
                        background: "transperent ",
                      },
                    }}
                  >
                    {page}
                    <KeyboardArrowDownIcon fontSize="small" />
                  </Button>
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
                  fontSize: "40px",
                  fontWeight: "bold",
                  fontFamily: "cursive",
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
                background: "tran",
              }}
            >
              <Tooltip title="Search">
                <IconButton>
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
