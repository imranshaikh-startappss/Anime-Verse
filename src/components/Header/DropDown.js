import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";

const CustomizedAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: "white",
  color: "black",
  // "&:hover": {
  //   background: "none !important",
  // },
});

const DropDown = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div>
        <div className="HeaderNavbar">
          <AppBar
            position="static"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <div className="Header-items">
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
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
                  {/* <Typography
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
                letterSpacing: "5px",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography> */}
                  {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page, index) => (
                  <CustomizedButton
                    className="NavbarItems"
                    key={page.label + index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#000000",
                      display: "block",
                      fontSize: "14px",
                      fontFamily: "SF-Body-font",
                      textTransform: "initial",
                      fontWeight: "600",
                      marginRight: "10px",
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
                    onMouseOver={(e) => {
                      handleClick(e);
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

                    {page?.isSelected ? (
                      <>
                        <KeyboardArrowUpIcon fontSize="small" />
                      </>
                    ) : (
                      <KeyboardArrowDownIcon fontSize="small" />
                    )}
                  </CustomizedButton>
                ))}
              </Box> */}
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    <MegaMenu model={pages} className="MegaMenu" />
                  </Box>
                </div>
                <div className="logo">
                  <Typography className="logoTypography">
                    Anime Verse
                  </Typography>
                </div>
                <div className="search_section">
                  <Tooltip title="Search">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Account">
                    <IconButton>
                      <PersonOutlineIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Wishlist">
                    <IconButton>
                      <StarBorderIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Cart">
                    <IconButton>
                      <ShoppingBagOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </div>
    </>
  );
};
export default DropDown;
{
  selectedMainMenuIndex === ""
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
    : pages?.[selectedMainMenuIndex]?.items?.map((subPage, subIndex) => (
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
              // marginTop: "20px",
              padding: "15px 0px",
            }}
          >
            {subPage[0]?.label}
            <KeyboardArrowRightIcon />
          </Typography>
        </MenuItem>
      ));
}
