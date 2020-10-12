const dateString = (datetime) => new Date(datetime * 1000).toDateString();
const timeString = (datetime) => new Date(datetime * 1000).toLocaleTimeString();

export { dateString, timeString };
