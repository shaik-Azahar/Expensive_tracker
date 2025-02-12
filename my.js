    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function renderExpenses() {
        const expenseList = document.getElementById('expenses');
        const totalSpan = document.getElementById('total');
        expenseList.innerHTML = '';
        let total = 0;
        expenses.forEach((expense, index) => {
            total += expense.amount;
            const li = document.createElement('li');
            li.innerHTML = expense.desc + " - $" + expense.amount + ' <button onclick="removeExpense(' + index + ')">X</button>';
            expenseList.appendChild(li);
        });
        totalSpan.textContent = total;
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    // Attach functions to the global window object
    window.addExpense = function () {
        const desc = document.getElementById('desc').value;
        const amount = parseFloat(document.getElementById('amount').value);
        if (desc && amount) {
            expenses.push({ desc, amount });
            renderExpenses();
        }
        document.getElementById('desc').value = '';
        document.getElementById('amount').value = '';
    };

    window.removeExpense = function (index) {
        expenses.splice(index, 1);
        renderExpenses();
    };

    renderExpenses();
