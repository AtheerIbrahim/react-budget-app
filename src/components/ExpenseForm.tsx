import React, { ChangeEvent, FormEvent, useContext, useState } from "react";

type ExpenseType = {
    id?: number;
    source: string;
    amount: number;
    date: string;
};

type ExpenseFormProps = {
    onGetTotalExpenseAmount: (amount: number)=> void;
} 

const ExpenseForm = (props: ExpenseFormProps)=> {
    const [amounterror, setError] = useState('');
    const [sourceError, setsourceError] = useState('');
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [expenses, setExpenses] = useState<ExpenseType[]>([]);
    
    const handleSource = ( event: ChangeEvent<HTMLInputElement>)=> {
        const {value} = event.target;
        setSource(value);
    }

    const handleAmount = ( event: ChangeEvent<HTMLInputElement>)=> {
        const {value} = event.target;
        setAmount(Number(value));
    }

    const handleDate = ( event: ChangeEvent<HTMLInputElement>)=> {
        const {value} = event.target;
        setDate(value);
    }

    const handleSubmit = (event: FormEvent)=> {
        event.preventDefault();
        const expense = {
            id: new Date().getMilliseconds(),
            source: source,
            amount: amount,
            date: date,
        };

        if (expense.amount < 0 ){
            setError('Negative numbers not allowed');
            return;
        }
        if (expense.source.length < 3 ){
            setsourceError('minimum letter is 3');
            return;
        }

        setExpenses((prevExpense) => [...prevExpense, expense]);
        console.log(expenses);
        const totalAmount = expenses.reduce((total, currentV)=> total + currentV.amount, 0);
        props.onGetTotalExpenseAmount(totalAmount);
        setSource('');
        setAmount(0);
        setDate('');
    }

    const handledelete = (id: number | undefined)=> {
        const deleteitem = expenses.filter((expense)=> expense.id !== id);
        setExpenses(deleteitem);
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>

            <div className="form-feild">
                <label htmlFor="source"> Expense source </label>
                <input type="text" name="source" id="source" value={source} onChange={handleSource} required />
                {sourceError && <p className="message-error"> {sourceError}</p>}
            </div>

            <div className="form-feild">
                <label htmlFor="amount"> Amount of expense </label>
                <input type="number" name="amount" id="amount" value={amount} onChange={handleAmount} required />
                {amounterror && <p className="message-error"> {amounterror}</p>}
            </div>

            <div className="form-feild">
                <label htmlFor="date"> Date of expense </label>
                <input type="date" name="date" id="date" value={date} onChange={handleDate} required />
            </div>
            <button> Add Expense </button>

        </form>

        <ul>
            {expenses.map((expense)=> {
                return (
                <li key={expense.id}>
                {expense.source}: {expense.amount} EUR on {expense.date} 
                <button onClick={()=> handledelete(expense.id)}> Delete </button>
                </li>
                );
            })
            }
        </ul>
    </div>
 );
}

export default ExpenseForm;