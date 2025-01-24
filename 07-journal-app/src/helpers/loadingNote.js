import { collection, getDocs } from "firebase/firestore/lite";
import { startLoadingNotes } from "../store/journal/thunks";
import { FirebaseBD } from "../firebase/config";

export const loadUserNotes = ( dispatch ) =>{
    dispatch( startLoadingNotes() );
}

export const loadNotes = async(uid) => {

    const collectionRef = collection(FirebaseBD, `${ uid }/journal/notes`);
    const docs = await getDocs( collectionRef );

    const notes = [];

    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
    });

    return notes;
}