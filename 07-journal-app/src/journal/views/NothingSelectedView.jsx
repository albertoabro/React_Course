import { StarOutline } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid2 container
    direction='column'
    alignItems='center'
    justifyContent='center'
    spacing={0}
    sx={{ minHeight:"calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: 3 }}
    >
        <Grid2 xs={12}>
            <StarOutline sx={{ fontSize: 100, color: 'white'}}/>
        </Grid2>
        <Grid2>
            <Typography variant="h5" color="white">Select or create a Note</Typography>
        </Grid2>
    </Grid2>
  )
}
