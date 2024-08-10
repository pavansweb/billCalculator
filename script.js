const billInput = document.getElementById('billTotalInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);
  if (isNaN(bill) || bill <= 0) {
    perPersonTotalDiv.innerText = `₹0.00`;
    return;
  }

  const perPersonTotal = bill / numberOfPeople;
  perPersonTotalDiv.innerText = `₹${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) return;

  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

// Initialize the calculation with default values
calculateBill();
