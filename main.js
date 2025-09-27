function getPrayerTimes() {
  const select = document.getElementById("city");
  const city = select.value;
  //   const country = select.options[select.selectedIndex].dataset.country;
  let selectedText = select.options[select.selectedIndex].text;
  document.getElementById("cityName").textContent = selectedText;
  axios
    .get(`https://api.aladhan.com/v1/timingsByCity`, {
      params: {
        city: city,
        country: "ُEgypt",
        method: 5,
      },
    })
    .then((response) => {
      const timings = response.data.data.timings;
      const date =
        response.data.data.date.hijri.weekday.ar + " - " +
        response.data.data.date.hijri.date +
        " - " +
        response.data.data.date.gregorian.date;

      document.getElementById("theDate").textContent = `التاريخ : ${date}`;
      document.getElementById("fajr").textContent = timings.Fajr;
      document.getElementById("sunrise").textContent = timings.Sunrise;
      document.getElementById("dhorTime").textContent = timings.Dhuhr;
      document.getElementById("aserTime").textContent = timings.Asr;
      document.getElementById("maghrib").textContent = timings.Maghrib;
      document.getElementById("isha").textContent = timings.Isha;
    })
    .catch((error) => console.error("Error:", error));
}

getPrayerTimes();

document.getElementById("city").addEventListener("change", getPrayerTimes);
