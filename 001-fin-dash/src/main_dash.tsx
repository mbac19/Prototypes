import Box from "@mui/material/Box";
import Icon from "./icon";
import Typography from "@mui/material/Typography";

export default function MainDash() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <Typography sx={{ marginBottom: "20px" }}>Dashboard</Typography>
          <CreditCard />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <Typography>Upcoming Payments</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginRight: "20px",
          marginTop: "32px",
        }}
      >
        <Typography sx={{ marginBottom: "12px" }}>
          Recent Transactions
        </Typography>
        <TransactionItem />
        {/* TODO: TRANSACTION */}
      </Box>
    </Box>
  );
}

function CreditCard() {
  return (
    <Box
      sx={{
        background: "green",
        borderRadius: "12px",
        width: "250px",
        height: "150px",
      }}
    ></Box>
  );
}

interface TransactionItemProps {}

function TransactionItem(props: TransactionItemProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          padding: "20px",
        }}
      >
        <Icon side={40} sx={{ marginRight: "30px" }} />
        <Typography>Taxi Trips</Typography>
      </Box>
      <Box sx={{ backgroundColor: "#DDD", height: "1px" }} />
    </Box>
  );
}
