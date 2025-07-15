import { useState } from 'react';
import FormField from '../../components/ui/formField/FormField';

export default function ReservationForm( {
    availableTimes,
    submitData
}) {

    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultDate = availableTimes[0];
    const minimumGuests = 1;
    const maximumGuests = 10;

    const invalidDateErrorMessage = 'Please choose a valid date';
    const invalidTimeErrorMessage = 'Please choose a valid time';
    const invalidOccasionErrorMessage = 'Please choose a valid occasion';
    const invalidNumberOfGuestsErrorMessage = `Please enter a number between ${minimumGuests} and ${maximumGuests}`;

    const guestHint = `Minimum of ${minimumGuests} and max limit ${maximumGuests}`;

    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultDate);
    const [guests, setGuests] = useState(minimumGuests);
    const [occasion, setOccasion] = useState('Birthday');

    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isGuestsValid = () => guests !== '';
    const isOccasionValid = () => occasion !== '';
    const hasHint = () => guests < minimumGuests || guests > maximumGuests;

    function handleSumbit(e) {
        e.preventDefault();
        // console.log('Date:', date);
        // console.log('Time:', time);
        // console.log('Guests:', guests);
        // console.log('Occasion:', occasion);
        submitData({ date, time, guests, occasion });
        ClearForm();
    }

    const ClearForm = () => {
        setDate(minimumDate);
        setTime('17:00');
        setGuests(1);
        setOccasion('Birthday');
    }

    return (
        <form
            className='reservation-form'
            onSubmit={handleSumbit}
        >
            <FormField
                label='Choose date'
                htmlFor='reservation-date'
                hasError={!isDateValid()}
                errorMessage={invalidDateErrorMessage}
            >
                <input
                type='date'
                id='reservation-date'
                name='reservation-date'
                min={minimumDate}
                value={date}
                required={true}
                onChange={e => setDate(e.target.value)}
                />
            </FormField>
            <FormField
                label='Time'
                htmlFor='reservation-time'
                hasError={!isTimeValid()}
                errorMessage={invalidTimeErrorMessage}
            >
                <select
                    id='reservation-time'
                    className='reservation-time'
                    name='reservation-time'
                    value={time}
                    required={true}
                    onChange={e => setTime(e.target.value)}
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                        {time}
                        </option>
                    ))}
                </select>
            </FormField>
            <FormField
                label='Guests'
                htmlFor='guests'
                hasError={!isGuestsValid()}
                errorMessage={invalidNumberOfGuestsErrorMessage}
                hasHint={!hasHint()}
                hintMessage={guestHint}
            >
                <input
                    type='number'
                    id='guests'
                    className='guests'
                    name='guests'
                    min={minimumGuests}
                    max={maximumGuests}
                    value={guests}
                    required={true}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </FormField>
            <FormField
                label='Occasion'
                htmlFor='occasion'
                hasError={!isOccasionValid()}
                errorMessage={invalidOccasionErrorMessage}
            >
                <select
                    id='occasion'
                    className='occasion'
                    name='occasion'
                    value={occasion}
                    required={true}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </FormField>
            <input
                className='btn'
                type='submit'
                value='Make Your reservation'
                aria-label='On click make your reservation'
            />
        </form>
    );
}