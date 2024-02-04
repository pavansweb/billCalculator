const billInput = document.getElementById('billTotalInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  const bill = Number(billInput.value)
  const total = bill
  const perPersonTotal = total / numberOfPeople

  perPersonTotalDiv.innerText = `₹${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
  numberOfPeople += 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return
  }

  numberOfPeople -= 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}
