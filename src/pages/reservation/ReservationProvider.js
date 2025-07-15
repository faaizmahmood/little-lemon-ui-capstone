import { useContext, createContext, useReducer, useMemo } from 'react';

// Define the initial state for your reservation feature
const initialState = {
    selectedDate: null,
    selectedTime: null,
};

export const ReservationContext = createContext();

export function useReservation() {
    return useContext(ReservationContext);
}

function reservationReducer(state, action) {
    switch (action.type) {
        case 'SELECT_DATE':
            console.log('action.payload:', action.payload);
            return { ...state, selectedDate: action.payload };
        case 'SELECT_TIME':
            console.log('action.payload:', action.payload);
            return { ...state, selectedTime: action.payload };
        default:
            return state;
    }
}

export function ReservationProvider({ children }) {
    // State for storing reservations
    // const [reservations, setReservations] = useState([]);
    const [state, dispatch] = useReducer(reservationReducer, initialState);

    // Function for adding a new reservation
    // const addReservation = (reservation) => {
    //     dispatch([...state, reservation]);
    // };

    // Function for removing a reservation
    // const removeReservation = (reservationId) => {
    //     dispatch(state.filter((reservation) => reservation.id !== reservationId));
    // };

    // // Value object to be passed to consumers
    // const reservationContextValue = {
    //     state,
    //     addReservation,
    //     removeReservation,
    // };
    // in the reservationcontext.provider below value={reservationContextValue}

    // Memoize the context value to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({ state, dispatch }), [state]);

    // Return the provider component with the context value
    return (
        <ReservationContext.Provider value={contextValue}>
            {children}
        </ReservationContext.Provider>
    );
};
