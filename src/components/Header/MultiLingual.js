import React from "react";
import { useEffect } from "react";
import { Menu, MenuItem, Toolbar } from "@mui/material";
import { CustomizedMultiLingualButton } from "./Styled";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function MultiLingual() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (changedLanguage) => {
    i18n.changeLanguage(changedLanguage);
    setAnchorEl(null);
  };
  return (
    <>
      <div className="col-lg-4 d-flex justify-content-end">
        <CustomizedMultiLingualButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {t("LanguageBtn")}
        </CustomizedMultiLingualButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          // onChange={handleLanguageChange}
          value={localStorage.getItem("i18nextLng")}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem value="en" onClick={() => handleClose("en")}>
            {t("English")}
          </MenuItem>
          <MenuItem value="fr" onClick={() => handleClose("fr")}>
            {t("French")}
          </MenuItem>
          <MenuItem value="js" onClick={() => handleClose("js")}>
            {t("Japanese")}
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}
export default MultiLingual;
