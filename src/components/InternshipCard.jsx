import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
  Grid,
  Stack,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

const InternshipCard = ({ internship }) => {
  const {
    id,
    title,
    company_name,
    company_logo,
    location_names,
    work_from_home,
    duration,
    stipend,
    start_date,
    application_deadline,
    labels_app_in_card,
    posted_by_label,
    is_premium_internship,
    office_days,
  } = internship;

  const location = work_from_home
    ? "Remote"
    : location_names?.length > 0
    ? location_names.join(", ")
    : "Location not specified";

  console.log("Internship Card Rendered:", internship);

  return (
    <Card variant="outlined">
      <CardContent sx={{ px: 2, py: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Box display="flex" alignItems="center" gap={2}>
            <Box>
              <Typography variant="body1">{title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {company_name}
              </Typography>
              <Stack direction="row" spacing={1} mt={1}>
                {labels_app_in_card?.map((label, idx) => (
                  <Chip key={idx} label={label} size="small" color="primary" />
                ))}
              </Stack>
            </Box>
          </Box>
          {company_logo ? (
            <Avatar
              src={`https://internshala.com/static/images/company_logo/${company_logo}`}
              alt={company_name}
            />
          ) : (
            <Avatar>{company_name.charAt(0)}</Avatar>
          )}
        </Box>
        <Stack direction="row" spacing={4} mt={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOnOutlinedIcon fontSize="small" />
            <Typography variant="body2">{location}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <CalendarTodayOutlinedIcon fontSize="small" />
            <Typography variant="body2">{duration}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <PaymentsOutlinedIcon fontSize="small" />
            <Typography variant="body2">
              {stipend?.salary || "Unpaid"}
            </Typography>
          </Box>
        </Stack>

        <Chip
          label={posted_by_label}
          icon={<HistoryOutlinedIcon fontSize="small" />}
          size="small"
          sx={{
            marginTop: 1.5,
            height: 24,
            padding: "2px",
            backgroundColor: "#f5f5f5",
            fontSize: "0.75rem",
            color: "text.secondary",
            "& .MuiChip-icon": {
              marginLeft: 0,
              marginRight: 0,
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
