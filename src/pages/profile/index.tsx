import { Box } from "@mui/material";
import {
  GeneralNavigationBlock,
  PersonalDataBlock,
  ReferralProgramBlock,
  SocialMediaBlock,
} from "../../components/pages/profile";
import { useTelegram } from "../../hooks";
import { UserWelcomeBanner } from "../../components/shared";

export function ProfilePage() {
  const { tg } = useTelegram();
  tg.BackButton.show();
  return (
    <>
      <UserWelcomeBanner />
      <Box sx={{ display: "grid", gap: "15px", marginTop: "30px" }}>
        <ReferralProgramBlock />
        <PersonalDataBlock />
        <GeneralNavigationBlock />
        <SocialMediaBlock />
      </Box>
    </>
  );
}
