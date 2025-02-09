import { useDispatch, useSelector } from "react-redux";
import { setDateModalOpen } from "../store/ui/uiSlice";

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } = useSelector( state => state.ui);

    const openDateModal = () => {
        dispatch( setDateModalOpen( true ) );
    };

    const closeDateModal = () => {
        dispatch( setDateModalOpen( false ) );
    };

    return {
        isDateModalOpen,
        openDateModal,
        closeDateModal,
    }
}