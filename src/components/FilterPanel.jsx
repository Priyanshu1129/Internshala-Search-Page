import {
  Paper,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Slider,
  Collapse,
  IconButton,
  Box,
} from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function FilterPanel({ filters, setFilters }) {
  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSliderChange = (e, newValue) => {
    setFilters({ ...filters, stipend: newValue });
  };

  const toggleMoreFilters = () => setShowMore(!showMore);

  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <Stack spacing={1.5}>
        <Typography variant="body2" fontWeight={500}>
          Profile
        </Typography>
        <TextField
          name="profile"
          placeholder="e.g. Marketing"
          value={filters.profile}
          onChange={handleChange}
          size="small"
          fullWidth
        />

        <Typography variant="body2" fontWeight={500}>
          Location
        </Typography>
        <TextField
          name="location"
          placeholder="e.g. Delhi"
          value={filters.location}
          onChange={handleChange}
          size="small"
          fullWidth
        />

        <FormControlLabel
          control={
            <Checkbox
              name="cityInternship"
              checked={filters.cityInternship || false}
              onChange={handleChange}
              size="small"
            />
          }
          label={
            <Typography variant="body2">Internships in my city</Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              name="workFromHome"
              checked={filters.workFromHome || false}
              onChange={handleChange}
              size="small"
            />
          }
          label={<Typography variant="body2">Work from home</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="partTime"
              checked={filters.partTime || false}
              onChange={handleChange}
              size="small"
            />
          }
          label={<Typography variant="body2">Part-time</Typography>}
        />

        <Typography variant="body2" fontWeight={500}>
          Desired minimum monthly stipend (₹)
        </Typography>
        <Slider
          name="stipend"
          value={filters.stipend || 0}
          onChange={handleSliderChange}
          step={1000}
          min={0}
          max={10000}
          marks={[
            { value: 0, label: "0" },
            { value: 2000, label: "2K" },
            { value: 4000, label: "4K" },
            { value: 6000, label: "6K" },
            { value: 8000, label: "8K" },
            { value: 10000, label: "10K" },
          ]}
          valueLabelDisplay="auto"
        />

        {/* Toggle Button */}
        <Box>
          <Typography
            variant="body2"
            onClick={toggleMoreFilters}
            sx={{
              color: "primary.main",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {showMore ? "View less filters" : "View more filters"}
            <IconButton size="small" sx={{ ml: 0.5 }}>
              {showMore ? (
                <ExpandLessIcon fontSize="small" />
              ) : (
                <ExpandMoreIcon fontSize="small" />
              )}
            </IconButton>
          </Typography>
        </Box>

        {/* Expandable Section */}
        <Collapse in={showMore}>
          <Stack spacing={1.5} sx={{ mt: 1 }}>
            <Typography variant="body2" fontWeight={500}>
              Starting from (or after)
            </Typography>
            <TextField
              name="startDate"
              type="date"
              size="small"
              value={filters.startDate || ""}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <Typography variant="body2" fontWeight={500}>
              Max. duration (months)
            </Typography>
            <Select
              name="duration"
              value={filters.duration || ""}
              onChange={handleChange}
              displayEmpty
              size="small"
              fullWidth
              renderValue={(selected) =>
                selected ? selected : "Choose duration"
              }
            >
              <MenuItem value="">Choose duration</MenuItem>
              <MenuItem value="1 month">1 month</MenuItem>
              <MenuItem value="2 months">2 months</MenuItem>
              <MenuItem value="3 months">3 months</MenuItem>
              <MenuItem value="4 months">4 months</MenuItem>
              <MenuItem value="6 months">6 months</MenuItem>
              <MenuItem value="12 months">12 months</MenuItem>
            </Select>

            <FormControlLabel
              control={
                <Checkbox
                  name="jobOffer"
                  checked={filters.jobOffer || false}
                  onChange={handleChange}
                  size="small"
                />
              }
              label={
                <Typography variant="body2">
                  Internships with job offer
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="fastResponse"
                  checked={filters.fastResponse || false}
                  onChange={handleChange}
                  size="small"
                />
              }
              label={<Typography variant="body2">Fast response</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="earlyApplicant"
                  checked={filters.earlyApplicant || false}
                  onChange={handleChange}
                  size="small"
                />
              }
              label={<Typography variant="body2">Early applicant</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="forWomen"
                  checked={filters.forWomen || false}
                  onChange={handleChange}
                  size="small"
                />
              }
              label={
                <Typography variant="body2">Internships for women</Typography>
              }
            />
          </Stack>
        </Collapse>
      </Stack>
    </Paper>
  );
}
