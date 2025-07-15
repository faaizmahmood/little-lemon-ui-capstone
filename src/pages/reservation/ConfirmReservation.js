import { FaCheckCircle } from 'react-icons/fa';

import './confirmReservation.css';

function ConfirmedReservation() {
  return (
    <main className='container'>
      <article>
          <h1><FaCheckCircle
            aria-hidden='true'
            className='icon'
          /> Confirmed Reservation</h1>
          <p>Thank you for booking with us.</p>
          <p>You will receive an email with all the details.</p>
        </article>
    </main>
  );
}

export default ConfirmedReservation;