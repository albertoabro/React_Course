import { TurnedInNot } from "@mui/icons-material";
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../store/journal/journalSlice";

export const SidebarItem = ({ note }) => {

    const dispatch = useDispatch() ;

    const { title, body } = note;

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [ title ])

    const onNoteSelected = () => {
        dispatch( setActiveNote( note ) );
    } 

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onNoteSelected}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid2 container>
          <ListItemText primary={ newTitle } />
          <ListItemText
            secondary={ body }
          />
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};
