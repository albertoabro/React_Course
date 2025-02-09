import { useState, useMemo, useEffect } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';

import { addHours } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import '../calendarStyles.css';
import { getLocale } from '../../helpers/getLocales';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root')

export const CalendarModal = ( { messages, language } ) => {

    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { activeEvent } = useCalendarStore();

    const locale = getLocale(language);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        note: '',
        start: new Date(),
        end: addHours( new Date(), 2 ),
        user: {
            _id: '123',
            name: 'Alberto',
        }
    });

    const titleClass = useMemo(() => {
        
        if(!formSubmitted) return '';

        return (formValues.title.length > 0 )
                    ? ''
                    : 'is-invalid'


    }, [ formValues.title, formSubmitted ]);

    useEffect(() => {
        if (activeEvent) {
            setFormValues({ ...activeEvent });
        }    
        
    }, [ activeEvent ]);

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    };  

    const onDateChange = ( event, changing ) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        closeDateModal();
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);
        
        if( formValues.title.length === 0 ) return;
    }

    const formatBtnTime = ( field ) =>{

        if(formValues[field].toLocaleTimeString().length === 7 )
            return formValues[field].toLocaleTimeString().substring(0,4);

        return formValues[field].toLocaleTimeString().substring(0,5);
    };

    const checkTimes = () => {
        return (formValues.start && formValues.start.toDateString() === new Date().toDateString() )
            ? new Date()
            : new Date(new Date().setHours( 0, 0, 0, 0 ))
    }

    return (
        <Modal
            isOpen={ isDateModalOpen }
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-bg"
            closeTimeoutMS={ 200 }
        >

            <h1> {messages.newEvent} </h1>
            <hr />
            <form className="container" onSubmit={ onSubmit }>

                <div className="form-group mb-2 d-flex flex-column">
                    <label >{messages.startDate}</label>
                    <DatePicker 
                        className='form-control p+1'
                        selected={ formValues.start }
                        onChange={ (event) => { onDateChange( event, 'start' ) } }
                        dateFormat="Pp"
                        minDate={ new Date() }
                        minTime={ checkTimes() }
                        maxTime={ new Date().setHours( 23, 59 ) }
                        showTimeSelect
                        locale={locale}
                        timeCaption={ messages.timeWord }
                        customInput={
                            <button className='example-custom-input'>
                                { formValues.start.toLocaleDateString() + ', ' + formatBtnTime('start') }
                            </button>
                        }
                    />
                </div>

                <div className="form-group mb-2 d-flex flex-column">
                    <label>{messages.endDate}</label>
                    <DatePicker 
                        className='form-control p+1'
                        selected={ formValues.end }
                        onChange={ (event) => { onDateChange( event, 'end' ) } }
                        dateFormat="Pp"
                        minDate={ formValues.start }
                        minTime={ checkTimes() }
                        maxTime={ new Date().setHours( 23, 59 ) }
                        showTimeSelect
                        locale={locale}
                        timeCaption={ messages.timeWord } 
                        customInput={
                            <button className='example-custom-input'>
                                { formValues.start.toLocaleDateString() + ', ' + formatBtnTime('end') }
                            </button>
                        }   
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>{messages.titleNotes}</label>
                    <input 
                        type="text" 
                        className= {`form-control ${ titleClass }`}
                        placeholder={messages.titleEvent}
                        name="title"
                        autoComplete="off"
                        value={ formValues.title }
                        onChange={ onInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">{messages.descriptionEvent}</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder={messages.note}
                        rows="5"
                        name="notes"
                        value={ formValues.note }
                        onChange={ onInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">{messages.additionalInformation}</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> {messages.saveBtn} </span>
                </button>

            </form>

        </Modal>
    )
}
