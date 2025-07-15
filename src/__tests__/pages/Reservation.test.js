// import { render, fireEvent } from '@testing-library/react';
// import { Routes, Route } from 'react-router-dom';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import Reservation from '../../pages/reservation/Reservation';



// test('renders Reservation component', () => {
//     render(
//         <Routes>
//             <Route path="/reservation" element={<Reservation />} />
//         </Routes>
//     );
//     const h1Element = screen.getByText(/Book Now/i);
//     expect(h1Element).toBeInTheDocument();
// });

// test("initializeTimes returns the expected initial times", () => {
//         // Define the expected initial times based on your implementation
//         const expectedInitialTimes = [
//             "17:00",
//             "18:00",
//             "19:00",
//             "20:00",
//             "21:00",
//             "22:00",
//         ];
//         // Call the initializeTimes function and assert that it returns the expected value
//         const actualInitialTimes = initializeTimes();
//         expect(actualInitialTimes).toEqual(expectedInitialTimes);
// });

// Mock the updateTimes function
// const mockUpdateTimes = jest.fn();

// test('ReservationForm can be submitted by the user', () => {
//   render(<Reservation availableTimes={[]} updateTimes={mockUpdateTimes} />);

//   // Fill in form fields (you may need to adjust the selectors based on your form structure)
//   const dateInput = screen.getByLabelText('Choose date');
//   const timeSelect = screen.getByLabelText('Choose time');
//   const guestsInput = screen.getByLabelText('Number of guests');
//   const occasionSelect = screen.getByLabelText('Occasion');

//   fireEvent.change(dateInput, { target: { value: '2024-12-31' } });
//   fireEvent.change(timeSelect, { target: { value: '19:00' } });
//   fireEvent.change(guestsInput, { target: { value: '4' } });
//   fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

//   // Simulate form submission
//   const submitButton = screen.getByText('Make Your reservation');
//   fireEvent.click(submitButton);

//   // Verify that the updateTimes function was called with the selected date
//   expect(mockUpdateTimes).toHaveBeenCalledWith('2024-12-31');

//   // Add assertions to verify the form behavior
// });

// test('Date input field is working', () => {
//     // Render your component containing the date input field
//     const { getByLabelText } = render(<Reservation />);

//     // Find the date input field by its label text
//     const dateInput = getByLabelText('Choose date');

//     // Simulate user interaction: set a date value
//     fireEvent.change(dateInput, { target: { value: '2023-12-31' } });

//     // Assert that the input value has changed
//     expect(dateInput.value).toBe('2023-12-31');
//   });