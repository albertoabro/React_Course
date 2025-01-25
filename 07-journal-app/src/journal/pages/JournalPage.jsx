import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views/NoteView"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const note = useSelector(state => state.journal);
  const isSaving = useMemo( () => note.isSaving === true, [note.isSaving]);


  const onClickNewNote = () => {
    dispatch( startNewNote () );
  }

    return (
      <JournalLayout>

        {
          ( note.active != null ) 
            ? <NoteView /> 
            : <NothingSelectedView/>
        }
        
        
        <IconButton
          onClick={ onClickNewNote }
          disabled= {isSaving}
          size="large"
          sx={{ 
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize:30 }}/>
        </IconButton>
      </JournalLayout>
    )
  }

  