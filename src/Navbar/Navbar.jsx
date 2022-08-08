import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import logo from "./logo.png";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function () {
  const textRef = useRef();
  const view = useSelector((state) => state.view.view);
  const transition = useSelector((state) => state.view.transition);
  console.log(transition);
  useEffect(() => {
    if (transition === "transition_to_home") {
      gsap.to(textRef.current, {
        color: "black",
        delay: 0.7,
      });
    }
  });
  return (
    <AppBar
      sx={{
        zIndex: 9999,
        background: "transparent",
        boxShadow: "none",
      }}
      position="fixed"
    >
      <Box
        sx={{
          ml: 4,
          mt: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Siqi Liu"
          src={logo}
          sx={{
            mr: 1,
            borderRadius: "25%",
          }}
        />
        <a style={{ textDecoration: "none" }} href={"http://portfoliu.net"}>
          <Typography
            ref={textRef}
            sx={{
              fontWeight: "bold",
            }}
            color={"white"}
            variant={"h5"}
          >
            Siqi Liu
          </Typography>
        </a>
      </Box>
    </AppBar>
  );
}