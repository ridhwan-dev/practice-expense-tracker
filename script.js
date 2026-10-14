console.log("Expense Tracker is ready!");
const expenseForm = document.getElementById("add-expense-form");
const expenseList = document.getElementById("expense-list");
expenseForm.addEventListener("submit",function(event) {
    event.preventDefault();
    const expenseName = document.getElementById("expense-name").value;
    const expenseAmount = document.getElementById("expense-amount").value;
    const expenseCurrency = document.getElementById("expense-currency").value;
    



    console.log(expenseName);
    console.log(expenseAmount);
    console.log(expenseCurrency);

    const expenseItem = document.createElement("li");
    expenseItem.textContent = expenseName + " - " + expenseAmount + " " + expenseCurrency;
    expenseList.appendChild( expenseItem );
    expenseForm.reset();






});
