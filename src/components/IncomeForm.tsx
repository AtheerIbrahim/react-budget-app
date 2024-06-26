import React, { ChangeEvent, FormEvent, useState } from "react";

type IncomeType = {
    id?: number;
    source: string;
    amount: number;
    date: string;
};

type IncomeFormProps = {
    onGetTotalIncomeAmount: (amount: number)=> void;
}

const IncomeForm = (props: IncomeFormProps)=> {
    const [amounterror, setError] = useState('');
    const [sourceError, setsourceError] = useState('');
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [incomes, setIncomes] = useState<IncomeType[]>([]);

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
        const income = {
            id: new Date().getMilliseconds(),
            source: source,
            amount: amount,
            date: date,
        };

        if (income.amount < 0 ){
            setError('Negative numbers not allowed');
            return;
        }
        if (income.source.length < 3 ){
            setsourceError('minimum letter is 3');
            return;
        }

        setIncomes((prevIncomes) => [...prevIncomes, income]);
        console.log(incomes);
        const total = incomes.reduce((totalV, currentV)=> totalV + currentV.amount, 0);
        props.onGetTotalIncomeAmount(total);
        setSource('');
        setAmount(0);
        setDate('');
    }

    const handledelete = (id: number | undefined)=> {
        const deleteitem = incomes.filter((income)=> income.id !== id);
        setIncomes(deleteitem);
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>

            <div className="form-feild">
                <label htmlFor="source"> Income source </label>
                <input type="text" name="source" id="source" value={source} onChange={handleSource} required />
                {sourceError && <p className="message-error"> {sourceError}</p>}
            </div>

            <div className="form-feild">
                <label htmlFor="amount"> Amount of income </label>
                <input type="number" name="amount" id="amount" value={amount} onChange={handleAmount} required />
                {amounterror && <p className="message-error"> {amounterror}</p>}
            </div>

            <div className="form-feild">
                <label htmlFor="date"> Date of income </label>
                <input type="date" name="date" id="date" value={date} onChange={handleDate} required />
            </div>
            <button> Add Income </button>

        </form>

        <ul>
            {incomes.map((income)=> {
                return <li key={income.id}>
                {income.source}: {income.amount} EUR on {income.date} 
                <button onClick={()=> handledelete(income.id)}> Delete </button>
                </li>;})
            }
        </ul>
    </div>
 );
}

export default IncomeForm;