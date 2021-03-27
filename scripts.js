const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const Transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    }
]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    total() {
        //entradas -  saídas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction) { 

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="amount">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação">
        </td>
        `

        return html
    }
}

Transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})