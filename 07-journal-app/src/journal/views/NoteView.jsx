import { useMemo, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote } from "../../store/journal/thunks";

export const NoteView = () => {
    
    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { title, body, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo( () => {
       return new Date( date ).toUTCString();
    }, [date]);

    useEffect( () => {
        dispatch( setActiveNote(formState) );

    }, [ formState ]);

    useEffect(() => {
        if(messageSaved.length >0 )
            Swal.fire('Note updated', messageSaved, 'success');
    }, [messageSaved]);

    const fileInputRef = useRef();

    const onSaveNote = () => {
        dispatch( startSavingNote() );
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0 ) return;
        console.log(target.files)
       // dispatch ( startUploadingFiles( target.files() ));
    }

  return (
    <Grid2
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid2>
        <Typography fontSize={39} fontWeight="light">
          {" "}
          {dateString}
        </Typography>
      </Grid2>

      <Grid2>
        <input 
            type="file"
            multiple
            accept="image/*"
            ref = { fileInputRef }
            onChange={ onFileInputChange }
            style={{ display: 'none' }}
        />
      </Grid2>

      <Grid2>

        <IconButton 
            color="primary"
            disabled={isSaving}
            onClick={ () => fileInputRef.current.click() }
        >
            <UploadFileOutlined/>
        </IconButton>

        <Button 
            onClick={ onSaveNote }
            disabled={isSaving}
            color="primary" 
            sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid2>

      <Grid2 container width="100%">
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert a title"
          value={ title }
          label="Title"
          name="title"
          sx={{ border: "none", mb: 1 }}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What's happen today?"
          name="body"
          value={ body }
          minRows={5}
          onChange={onInputChange}
        />
      </Grid2>

      <ImageGallery />
    </Grid2>
  );
};
