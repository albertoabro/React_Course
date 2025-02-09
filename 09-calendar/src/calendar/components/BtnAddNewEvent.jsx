import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore"

export const BtnAddNewEvent = () => {

  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClickModal = (event) => {

    setActiveEvent({
       title: '',
        note: '',
        start: new Date().toISOString(),
        end: addHours( new Date(), 2 ).toISOString(),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'Alberto',
        }
    });

    openDateModal();
  };

  return (
    <button 
      className="btn btn-primary fab"
      onClick={ handleClickModal }
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
