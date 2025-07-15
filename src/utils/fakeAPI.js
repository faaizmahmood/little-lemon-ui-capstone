// Helper function to seed a random number generator based on a given seed
function seededRandom({ seed }) {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return () => (s = s * a % m) / m;
  };

// Helper function to generate an array of consecutive dates starting from a given date
function generateDateRange(startDate, numberOfDays) {
  const dateArray = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < numberOfDays; i++) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
}

// Helper function to format a date as "YYYY-MM-DD"
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Generate an array of consecutive dates for a date picker (e.g., for 7 days starting from today)
export function generateDateOptions(numberOfDays) {
  const today = new Date();
  const dateOptions = generateDateRange(today, numberOfDays);

  return dateOptions.map((date) => formatDate(date));
}

// Generate an array of available times for a select dropdown menu (e.g., for a specific date)
export function generateTimeOptions(date) {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ':00');
    if (random() < 0.5) result.push(i + ':30');
  }

  return result;
}

export function submitAPI(data) {
  console.log("submitData called\n", data);
  return true;
}