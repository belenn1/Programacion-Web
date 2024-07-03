document.addEventListener("DOMContentLoaded", () => {
  const apiURL =
    "https://v6.exchangerate-api.com/v6/76df39320a12dd4b918897b0/latest/USD";
  const fromCurrency = document.getElementById("from-currency");
  const toCurrency = document.getElementById("to-currency");
  const resultDiv = document.getElementById("result");

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const currencies = Object.keys(data.conversion_rates);
      currencies.forEach((currency) => {
        const optionFrom = document.createElement("option");
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromCurrency.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = currency;
        optionTo.textContent = currency;
        toCurrency.appendChild(optionTo);
      });
    })
    .catch((error) => console.error("Error fetching currencies:", error));

  document
    .getElementById("converter-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const amount = document.getElementById("amount").value;
      const fromCurrencyValue = fromCurrency.value;
      const toCurrencyValue = toCurrency.value;

      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          const rateFrom = data.conversion_rates[fromCurrencyValue];
          const rateTo = data.conversion_rates[toCurrencyValue];
          const convertedAmount = (amount / rateFrom) * rateTo;

          resultDiv.innerHTML = `${amount} ${fromCurrencyValue} = ${convertedAmount.toFixed(
            2
          )} ${toCurrencyValue}`;
        })
        .catch((error) => console.error("Error converting currencies:", error));
    });
});
