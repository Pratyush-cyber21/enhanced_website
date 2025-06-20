const clocks = [
  { id: "india", zone: "Asia/Kolkata" },
  { id: "newyork", zone: "America/New_York" },
  { id: "toronto", zone: "America/Toronto" },
  { id: "london", zone: "Europe/London" },
  { id: "paris", zone: "Europe/Paris" },
  { id: "berlin", zone: "Europe/Berlin" },
  { id: "moscow", zone: "Europe/Moscow" },
  { id: "tokyo", zone: "Asia/Tokyo" },
  { id: "beijing", zone: "Asia/Shanghai" },
  { id: "sydney", zone: "Australia/Sydney" },
  { id: "saopaulo", zone: "America/Sao_Paulo" },
  { id: "johannesburg", zone: "Africa/Johannesburg" },
  { id: "mexico", zone: "America/Mexico_City" },
  { id: "dubai", zone: "Asia/Dubai" },
  { id: "seoul", zone: "Asia/Seoul" },
  { id: "bangkok", zone: "Asia/Bangkok" },
  { id: "singapore", zone: "Asia/Singapore" },
  { id: "lagos", zone: "Africa/Lagos" },
  { id: "buenosaires", zone: "America/Argentina/Buenos_Aires" },
  { id: "istanbul", zone: "Europe/Istanbul" },
];

function updateClocks() {
  clocks.forEach(clock => {
    const time = new Date().toLocaleTimeString('en-US', {
      timeZone: clock.zone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    document.getElementById(clock.id).textContent = time;
  });
}

setInterval(updateClocks, 1000);
updateClocks();