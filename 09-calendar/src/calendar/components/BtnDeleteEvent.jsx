import { useCalendarStore } from "../../hooks/useCalendarStore";

export const BtnDeleteEvent = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDeleteEvent = (event) => {
        startDeletingEvent();
    };

  return (
    <button 
      className="btn btn-danger fab-danger"
      onClick={ handleDeleteEvent }
      style={{
        display: hasEventSelected ? '' : 'none'
      }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
