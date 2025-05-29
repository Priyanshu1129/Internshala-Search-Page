import { useState } from "react";
import useFetchInternships from "./hooks/useFetchInternships";
import InternshipCard from "./components/InternshipCard";
import FilterPanel from "./components/FilterPanel";
import filterInternships from "./utils/filterInternships";
import "./App.css";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";

export default function App() {
  const { internships, loading } = useFetchInternships();

  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    duration: "",
    stipend: 0,
    startDate: "",
    cityInternship: false,
    workFromHome: false,
    partTime: false,
    jobOffer: false,
    fastResponse: false,
    earlyApplicant: false,
    forWomen: false,
  });

  const filteredInternships = filterInternships(internships, filters);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
        {internships
          ? `${Object.keys(internships).length} Total Internship`
          : "Internship Search"}
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={3} md={3}>
          <FilterPanel filters={filters} setFilters={setFilters} />
        </Grid>

        <Grid item xs={12} sm={9} md={9}>
          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : filteredInternships?.length > 0 ? (
            filteredInternships.map((internship) => (
              <Box key={internship.id} mb={2}>
                <InternshipCard internship={internship} />
              </Box>
            ))
          ) : (
            <Typography variant="body1" align="center" sx={{ mt: 4 }}>
              No internships found.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
