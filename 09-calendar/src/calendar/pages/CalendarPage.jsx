import { useState, useEffect } from "react";
import { Calendar } from "react-big-calendar";

import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar } from "../../components/Navbar";
import { CalendarEvent } from "../components/CalendarEvent";
import { localizer } from "../helpers/calendarLocalizer";
import { CalendarModal } from "../components/CalendarModal";
import { useLanguage } from "../../hooks/useLanguage";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { BtnAddNewEvent } from "../components/BtnAddNewEvent";
import { BtnDeleteEvent } from "../components/BtnDeleteEvent";
import { useAuthStore } from "../../auth/hooks/useAuthStore";

const events = [];

export const CalendarPage = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { language, changeLanguage, messages } = useLanguage();
  const { events, setActiveEvent, startLoadingEvents, error } = useCalendarStore();

  const [currentView, setCurrentView] = useState(localStorage.getItem('lastView') || 'month');
  const [currentDate, setCurrentDate] = useState(new Date()); 

  const eventStyleGetter = (event, start, end, isSelected) => {

    const isMyEvent = ( user.uid === event.user._id) || ( user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return {style}
  };

  const onDoubleClick = ( event ) => {
    openDateModal();
  };

  const onSelect = ( event ) => {
    setActiveEvent( event );
  };

  const onViewChange = ( event ) => {
    localStorage.setItem('lastView', event);
    setCurrentView(event);
  };

  useEffect(() => {
    startLoadingEvents();
    
  }, []);

  return (
    <>
      <Navbar onChangeLanguage= { changeLanguage } messages={ messages } languages={ language }/>

      <Calendar
        culture={ language }
        messages={ messages }
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        defaultView={currentView}
        view={currentView}
        onView={ onViewChange }
        onNavigate={ setCurrentDate }
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        style={{ height: 'calc( 100vh - 80px )', width: '100%' }}
      />

      <CalendarModal messages={messages} language={language}/>
      <BtnDeleteEvent />
      <BtnAddNewEvent />
    </>
  )
}
