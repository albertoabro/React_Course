import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <>
        <Grid2 container justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid2>
                <Typography fontSize={ 39 } fontWeight='light'> 20/01/2025</Typography>
            </Grid2>

            <Grid2>
                <Button color="primary" sx={{ padding: 2}}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                    Save
                </Button>
            </Grid2>

            <Grid2 container width='100%'>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Insert a title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What's happen today?"
                    minRows={ 5 }
                />
            </Grid2>

            <ImageGallery />
        </Grid2>
    </>
  )
}

