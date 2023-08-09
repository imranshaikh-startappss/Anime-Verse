import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useEffect } from "react";
import { CustomizedLoginButton } from "./Styled";
import { CustomizedRegisterButton } from "./Styled";
import { CustomizedBackButton } from "./Styled";
import { CustomizedTypography } from "./Styled";

function DrawerMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedMainMenuIndex, setselectedMainMenuIndex] = React.useState("");
  const [selectedMainMenuItems, setselectedMainMenuItems] = React.useState("");
  const [pages, setPages] = React.useState([]);

  useEffect(() => {
    async function getData() {
      let data = await axios.get("data.json");
      setPages(data.data);
    }
    getData();
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const resetData = () => {
  //   // Reset all relevant state variables to their initial values
  //   setselectedMainMenuIndex("");
  //   setselectedMainMenuItems("");
  // };

  const handleCloseNavMenu = () => {
    setselectedMainMenuIndex("");
    setselectedMainMenuItems("");
    setAnchorElNav(null);
  };

  const handleClickNavmainMenu = (index) => {
    setselectedMainMenuIndex(index);
  };
  return (
    <>
      <div className="d-lg-none d-md-flex flex-grow-1">
        <IconButton onClick={handleOpenNavMenu}>
          <MenuIcon />
        </IconButton>
        <Drawer open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
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
                        <CustomizedTypography>
                          {page.label}
                          <KeyboardArrowRightIcon />
                        </CustomizedTypography>
                      </MenuItem>

                      {index === pages.length - 1 && (
                        <div className="container" style={{ margin: "auto" }}>
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
                          <CustomizedTypography>
                            {subPage[0]?.label}
                            <KeyboardArrowRightIcon />
                          </CustomizedTypography>
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
                  <CustomizedTypography>
                    {subPagesPage?.label}
                  </CustomizedTypography>
                </MenuItem>
              </>
            );
          })}
        </Drawer>
      </div>
    </>
  );
}
export default DrawerMenu;
