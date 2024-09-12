import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { services } from "./data";
import { ChevronRight } from "@mui/icons-material";

export function OfflineExchangeLocationsCard() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "16px",
        padding: "16px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        Офлайн-обменники
      </Typography>
      <List sx={{ padding: "0" }}>
        {services.map((service, index) => (
          <ListItem
            onClick={() => window.open(service.mapLink, "_blank")}
            key={index}
            sx={{
              paddingInline: 0,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <ListItemIcon
                sx={{
                  backgroundColor: "secondary.light",
                  minWidth: "32px",
                  minHeight: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              >
                {service.icon}
              </ListItemIcon>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexGrow: 1,
                borderBottom:
                  index !== services.length - 1 ? "1px solid #e0e0e0" : "none",
                paddingBottom: "8px",
              }}
            >
              <ListItemText
                sx={{ margin: 0 }}
                primary={<Typography>{service.title}</Typography>}
                secondary={
                  service.adress && (
                    <Typography sx={{ opacity: ".5", fontSize: "12px" }}>
                      {service.adress}
                    </Typography>
                  )
                }
              />
              <ChevronRight sx={{ color: "#b0b0b0", marginLeft: "auto" }} />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
