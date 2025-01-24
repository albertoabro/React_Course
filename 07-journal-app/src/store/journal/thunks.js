import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { addNewNote, setActiveNote, setNote, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadingNote";


export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseBD, `${uid}/journal/notes`) );
        await setDoc ( newDoc, newNote );

        newNote.id = newDoc.id;

        //dispatch
        dispatch( addNewNote( newNote ) );

        dispatch( setActiveNote( newNote ) );
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        if(uid === null) return;

        const notes = await loadNotes( uid );

        dispatch( setNote ( notes ));
    }
}

export const startSavingNote = () => {
    return async( dispatch, getState ) => {
        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToBD = { ...note };
        delete noteToBD.id;

        const docRef = doc( FirebaseBD, `${ uid }/journal/notes/${ note.id }` );
        await setDoc(docRef, noteToBD, { merge: true });

        dispatch( updateNote( note ) );
    }
}