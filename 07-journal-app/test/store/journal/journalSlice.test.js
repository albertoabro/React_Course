import { addNewNote, journalSlice, removeNote, setActiveNote, setClearNoteLogout, setNote, setPhotosToActiveNote, setSaving, updateNote } from "../../../src/store/journal/journalSlice";
import { demoNote, initialState, notesWithNoteState, noteUpdateState } from "../../helpers/fixtures/journalFixtures";

describe('Testing in journalSlice', () => {
  

    test('should return initialState', () => {
        
        const state = journalSlice.reducer( initialState, {});

        expect( state ).toEqual( initialState );
    });

    test('should add new note', () => {
      
        const state = journalSlice.reducer(initialState, addNewNote( demoNote ));

        expect( state ).toEqual({
            notes: [{ 
                id: '123ABC',
                title: 'note1',
                body: 'body of note 1',
                date: '01/26/2025',
                imageUrls: ['https://demoImage.jpg'],
            }],
            isSaving: false,
            messageSaved: '',
            active: null,
            error:null,
        })
    });

    test('should remove a note', () => {
      
        const notes = journalSlice.reducer(notesWithNoteState, addNewNote( demoNote ));
        const state = journalSlice.reducer(notes, removeNote( demoNote ) );

        expect( state ).toEqual(notesWithNoteState);
    });

    test('should update a note', () => {
      
        const state = journalSlice.reducer(noteUpdateState, updateNote( demoNote ));

        expect( state ).toEqual({
            notes: [ {
                id: '123ABC',
                title: 'note1',
                body: 'body of note 1',
                date: '01/26/2025',
                imageUrls: ['https://demoImage.jpg'],
            } ],
            isSaving: false,
            messageSaved: 'note1, successfully updated',
            active: null,
            error:null,
        });
    });
    
    test('should active note', () => {
      
        const newNote = journalSlice.reducer(initialState, addNewNote( demoNote ));
        const state = journalSlice.reducer(newNote, setActiveNote( demoNote ));

        expect( state ).toEqual({
            notes: [ {
                id: '123ABC',
                title: 'note1',
                body: 'body of note 1',
                date: '01/26/2025',
                imageUrls: ['https://demoImage.jpg'],
            } ],
            isSaving: false,
            messageSaved: '',
            active: {
                id: '123ABC',
                title: 'note1',
                body: 'body of note 1',
                date: '01/26/2025',
                imageUrls: ['https://demoImage.jpg'],
            },
            error:null,
        });
    });
    
    test('should set note', () => {
        
        const state = journalSlice.reducer(initialState, setNote( [ demoNote ] ));

        expect( state ).toEqual({
            notes: [{ 
                id: '123ABC',
                title: 'note1',
                body: 'body of note 1',
                date: '01/26/2025',
                imageUrls: ['https://demoImage.jpg'],
            }],
            isSaving: false,
            messageSaved: '',
            active: null,
            error:null,
        });
    });

    test('should set saving true', () => {
      
        const newNote = journalSlice.reducer(initialState, addNewNote( demoNote ));
        const state = journalSlice.reducer(newNote, setSaving());

        expect( state.isSaving ).toBeTruthy();
    });
    
    test('should set photos to active note', () => {
      

        const newNote = journalSlice.reducer(initialState, addNewNote( demoNote ) );
        const activeNote = journalSlice.reducer(newNote, setActiveNote( demoNote ) );

        const state = journalSlice.reducer(activeNote, setPhotosToActiveNote(['https://demoImage2.jpg']));

        expect( state ).toEqual({
            notes: [ {
                id: '123ABC',
                title: 'note1',
                body: 'body of note 1',
                date: '01/26/2025',
                imageUrls: ['https://demoImage.jpg'],
            } ],
            isSaving: false,
            messageSaved: '',
            active: {
                id: '123ABC',
                title: 'note1',
                body: 'body of note 1',
                date: '01/26/2025',
                imageUrls: ['https://demoImage.jpg', 'https://demoImage2.jpg'],
            },
            error:null,
        });
    });

    test('should clear note when logout', () => {
      
        const state = journalSlice.reducer(notesWithNoteState, setClearNoteLogout() );

        expect( state ).toEqual( initialState );
    });
})
