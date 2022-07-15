import {
  Grid,
  Paper,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export const Settings = () => (
  <Grid container justifyContent="center">
    <Grid item xs={12} sm={10} md={7} lg={5}>
      <Paper sx={{ padding: 5 }}>
        <Typography variant="h4">Settings</Typography>
        <FormGroup sx={{ marginTop: 3 }}>
          <FormControlLabel
            control={<Switch sx={{ m: 1 }} />}
            label="Dark mode"
            sx={{
              "& > .MuiFormControlLabel-label": { pt: 0.6 },
            }}
          />
        </FormGroup>
      </Paper>
    </Grid>
  </Grid>
);
