import { Box, ThemeProvider, Typography } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTelegram, useTelegramTheme } from "../../hooks";

export function RootLayout() {
  const theme = useTelegramTheme();
  const { tg } = useTelegram();
  const navigate = useNavigate();

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.BackButton.show();

    const handleBackButtonClick = () => {
      navigate(-1);
      tg.BackButton.hide();
    };

    tg.onEvent("backButtonClicked", handleBackButtonClick);

    return () => {
      tg.offEvent("backButtonClicked", handleBackButtonClick);
    };
  }, [tg, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "393px",
            margin: "0 auto",
            padding: "15px",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
