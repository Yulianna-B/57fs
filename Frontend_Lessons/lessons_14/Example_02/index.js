const hopInterval = setInterval(() => {
    console.log("Hop!");
  }, 3000);
  
  setTimeout(() => {
    clearInterval(hopInterval); // остановит интервал через 10 секунд
  }, 10000);
  