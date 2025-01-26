import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { addNewNote, removeNote, setActiveNote, setNote, setPhotosToActiveNote, setSaving, updateNote } from "../../../src/store/journal/journalSlice";
import { startDeletingNote, startLoadingNotes, startNewNote, startSavingNote, startUploadingFiles } from "../../../src/store/journal/thunks";
import { FirebaseBD } from "../../../src/firebase/config";
import { fileUpload } from "../../../src/helpers/fileUpload";

jest.mock('../../../src/helpers/fileUpload', () => ({
    fileUpload: jest.fn()
}));

describe('Testing in thunks of journal', () => {
  
    const uid = 'TEST-UID';
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    afterEach( async() => {
        const collectionRef = collection( FirebaseBD, `${uid}/journal/notes`);
        const { docs } = await getDocs( collectionRef );
        await Promise.all( docs.map( doc => deleteDoc( doc.ref ) ) );
    })

    test('startNewNote have to call setSaving,' +
        'addNewNote and setActiveNote ', async() => {
        
        getState.mockReturnValue( { auth: { uid } } );
        
        await startNewNote()( dispatch, getState );

        const newNote = {
            title: '',
            body: '',
            id: expect.any( String ),
            date: expect.any( Number ),
            imageUrls: []
        };
        
        expect( dispatch ).toHaveBeenCalledWith( setSaving() );
        expect( dispatch ).toHaveBeenCalledWith( addNewNote ( newNote) );
        
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote( newNote ) );
    });

    test('startSavingNote have to call setSaving and updateNote', async() => {
        
        const note = {
            title: 'title1',
            body: 'body of note 1',
            id: '1',
            date:1,
            imageUrls: []
        };

        getState.mockReturnValue({ 
            auth: { uid },
            journal: { active: note }
        });

        await startNewNote()( dispatch, getState);

        await startSavingNote()( dispatch, getState );        

        expect( dispatch ).toHaveBeenCalledWith( setSaving() );
        expect( dispatch ).toHaveBeenCalledWith( updateNote( note ) );   
    });

    test('startDeletingNote have to call removeNote', async() => {
      
        const note = {
            title: 'title1',
            body: 'body of note 1',
            id: expect.any( String ),
            date: expect.any( Number ),
            imageUrls: []
        };
    
        getState.mockReturnValue({ 
            auth: { uid },
            journal: { active: note }
        });
    
        await startNewNote()( dispatch, getState);

        await startDeletingNote()( dispatch, getState );
        
        expect( dispatch ).toHaveBeenCalledWith( removeNote( note ) );
    });

    test('startLoadingNotes have to call loadNotes and setNote ', async() => {
        
        const notes = [{
            title: '',
            body: '',
            id: expect.any( String ),
            date: expect.any( Number ),
            imageUrls: []
        }];
    
        getState.mockReturnValue( { auth: { uid } } );

        await startNewNote()( dispatch, getState);

        await startLoadingNotes()( dispatch, getState );

        expect( dispatch ).toHaveBeenCalledWith( setNote( notes ));
    });
    
    test('startUploadingFiles have to call setSaving, setPhotosToActiveNote ', async() => {
        
        const files = [
            'photo1.jpg',
            'photo2.jpg',
        ];

        const urlFiles = [
            'https://image1.jpg',
            'https://image2.jpg',
        ];

        let i = 0;
        fileUpload.mockImplementation( () => {
            const url = urlFiles[i];
            i++;
            return Promise.resolve(url);
        });

        await startUploadingFiles( files )( dispatch );
        
        expect( dispatch ).toHaveBeenCalledWith( setSaving() );
        expect( dispatch ).toHaveBeenCalledWith( setPhotosToActiveNote( urlFiles ) );
    })
    
    
})
