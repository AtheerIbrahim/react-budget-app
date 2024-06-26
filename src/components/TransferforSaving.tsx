import React,{ChangeEvent, FormEvent, useState} from "react";

type TransferforSavingProps = {
    ongetSavingAmount: (amount: number) => void;
    totalIncomeAmount: number;
    totalExpenseAmount: number;
}

const TransferforSaving = (props: TransferforSavingProps)=> {
    const [amount, setAmount] = useState(0);
    const handlAmountChange = (event: ChangeEvent <HTMLInputElement>)=> {
        setAmount(Number(event.target.value));
    }
    const handleSubmit = (event: FormEvent)=> {
        event.preventDefault();
        props.ongetSavingAmount(amount);
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>

            <div className="form-feild">
                <p> Current balance: {props.totalIncomeAmount - props.totalExpenseAmount} </p>
                <label htmlFor="target"> Transfer to save account </label>
                <input type="number" name="amount" id="amount" onChange={handlAmountChange} required />
                <button> Transfer </button>
            </div>
        </form>
    </div>
 );
}

export default TransferforSaving;