export const initialState = {
    notes: [],
    isSaving: false,
    messageSaved: '',
    active: null,
    error:null,
};

export const noteUpdateState = {
    notes: [ {
        id: '123ABC',
        title: 'note0',
        body: 'body of note 0',
        date: '01/26/2025',
        imageUrls: ['https://image0.jpg'],
    } ],
    isSaving: false,
    messageSaved: '',
    active: null,
    error:null,
}

export const notesWithNoteState = {
    notes: [ {
        id: '000AAA',
        title: 'note0',
        body: 'body of note 0',
        date: '01/26/2025',
        imageUrls: ['https://image0.jpg'],
    } ],
    isSaving: false,
    messageSaved: '',
    active: null,
    error:null,
}

export const demoNote = {
    id: '123ABC',
    title: 'note1',
    body: 'body of note 1',
    date: '01/26/2025',
    imageUrls: ['https://demoImage.jpg'],
}