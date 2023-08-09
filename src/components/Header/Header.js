import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { CustomizedAppBar, CustomizedMultiLingualButton } from "./Styled";
import { useTranslation } from "react-i18next";
import MultiLingual from "./MultiLingual";
import { Container, Toolbar } from "@mui/material";

export default function Header() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <div className="Header-top">
        <CustomizedAppBar>
          <Container maxWidth="xl">
            {/* <Toolbar> */}
            <div className="Header-section d-flex align-items-center">
              <div className="btn col-lg-4 d-flex justify-content-start">
                <CustomizedMultiLingualButton>
                  <FacebookIcon />
                  {/* <span>1.8M Follower</span> */}
                  <span>{t("1.8M Follower")}</span>
                </CustomizedMultiLingualButton>
                <CustomizedMultiLingualButton>
                  <InstagramIcon />
                  <span>{t("682 Follower")}</span>
                </CustomizedMultiLingualButton>
              </div>
              <div className="col-lg-4 d-flex justify-content-center">
                <h6> {t("text")} </h6>
              </div>
              <MultiLingual />
              {/* <div className="col-lg-4 d-flex justify-content-end">
                <CustomizedMultiLingualButton
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  English
                </CustomizedMultiLingualButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>English</MenuItem>
                  <MenuItem onClick={handleClose}>Hindi</MenuItem>
                  <MenuItem onClick={handleClose}>French</MenuItem>
                </Menu>
              </div> */}
            </div>
            {/* </Toolbar> */}
          </Container>
        </CustomizedAppBar>
      </div>
    </>
  );
}
