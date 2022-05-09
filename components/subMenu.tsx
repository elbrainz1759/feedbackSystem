import { useRouter } from "next/router";
import React, { useState } from "react";

import {
  Grid,
  Typography,
} from "@material-ui/core";

import { subRoutes } from "../data/routes";

const SubMenu = () => {
  const path = subRoutes;
  const tabs = (
    <>
      <Grid container justify="flex-end" spacing={4} style={{width:"100%"}}>
        {path.map(({ name, link }) => (
          <Grid item key={link}>
            <Typography>{name}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <div style={{
        width: "100%",
        backgroundColor: "#00A4CCFF",
        color: "white",
        borderBottom: "2px solid #F1F5F8",
        padding: "16px 0 16px 0",
      }}>
    {tabs}
    </div>
  );
};
export default SubMenu;
