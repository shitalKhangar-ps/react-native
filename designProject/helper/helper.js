export const getFormattedDates = () => {
  const today = new Date();
  const dates = [];
  for (let i = -2; i <= 20; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const day = date.getDate().toString().padStart(2, '0');
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    dates.push(`${day} ${weekday}`);
  }
  return dates;
};

export const getTodayFormattedDate = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const weekday = today.toLocaleDateString('en-US', { weekday: 'short' });
  return `${day} ${weekday}`;
};

export const activities = [
  { id: '1', type: 'Check In', time: '10:00 am', date: 'April 17, 2023', status: 'On Time', imageSource: require('../images/checkin.png') },
  { id: '2', type: 'Break In', time: '12:30 am', date: 'April 17, 2023', status: 'On Time', imageSource: require('../images/BreakIcon.png') },
  { id: '3', type: 'Break', time: '16:30 am', date: 'April 17, 2023', status: 'On Time', imageSource: require('../images/BreakIcon.png') },
  { id: '4', type: 'Check Out', time: '17:30 am', date: 'April 17, 2023', status: 'On Time', imageSource: require('../images/BreakIcon.png') },
];

export const attendanceData = [
  {
    id: '1',
    type: 'Check In',
    // imageSource: require('../images/checkin.png'),
    imageSource: require('../images/checkin.png'),
    time: '10:20 am',
    status: 'On Time',
  },
  {
    id: '2',
    type: 'Check Out',
    imageSource: require('../images/checkout.png'),
    time: '07:00 pm',
    status: 'Go Home',
  },
  {
    id: '3',
    type: 'Break Time',
    imageSource: require('../images/BreakIcon.png'),
    time: '0:30 min',
    status: 'Avg Time 30 min',
  },
  {
    id: '4',
    type: 'Total Days',
    imageSource: require('../images/daysIcon.png'),
    time: '28',
    status: 'Working Days',
  }
];