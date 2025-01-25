import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { addNewNote, removeNote, setActiveNote, setNote, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadingNote";
import { fileUpload } from "../../helpers/fileUpload";


export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: [],
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

export const startUploadingFiles = ( files = [] ) => {
    return async ( dispatch ) => {
        dispatch( setSaving() );

        // await fileUpload( files[ 0 ] ); -> For 1 file
        const fileUploadPromises = [];

        for( const file of files)
            fileUploadPromises.push( fileUpload( file ) );

        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        
        const docRef = doc( FirebaseBD, `${ uid }/journal/notes/${ note.id }` );
        await deleteDoc( docRef );

        dispatch( removeNote( note ) );
    }
}