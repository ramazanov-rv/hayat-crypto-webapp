import { Box, Typography } from "@mui/material";

import {
  FormatListBulletedRounded,
  HomeRounded,
  Person,
  SmsRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../../../hooks";
import { CustomIconButton } from "../..";

export function Navigation() {
  const { tg } = useTelegram();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Box sx={{ width: "33.333%", display: "grid", placeItems: "center" }}>
        <CustomIconButton onClick={() => navigate("/history")}>
          <FormatListBulletedRounded sx={{ width: "20px" }} />
        </CustomIconButton>
        <Typography sx={{ paddingTop: ".25rem" }}>История</Typography>
      </Box>

      <Box sx={{ width: "33.333%", display: "grid", placeItems: "center" }}>
        <CustomIconButton onClick={() => navigate("/")}>
          <HomeRounded sx={{ width: "18px", paddingTop: ".1rem" }} />
        </CustomIconButton>
        <Typography sx={{ paddingTop: ".25rem" }}>Главная</Typography>
      </Box>

      <Box
        sx={{
          width: "33.333%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CustomIconButton onClick={() => navigate("/profile")}>
          <Person sx={{ width: "20px" }} />
        </CustomIconButton>
        <Typography sx={{ paddingTop: ".25rem" }}>Профиль</Typography>
      </Box>
    </Box>
  );
}
