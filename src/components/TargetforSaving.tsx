import React, { ChangeEvent, FormEvent, useState } from "react";

const TargetforSaving = (props: { savingAmount: number })=> {
    let [target, setTarget] = useState(0);
    const handlereset = ()=> {
        setTarget(0);
    }
    
    const handletarget = ( event: ChangeEvent<HTMLInputElement>)=> {
        const {value} = event.target;
        setTarget(Number(value));
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>

            <div className="form-feild">
                <label htmlFor="target"> Set Target </label>
                <input type="number" name="amount" id="target" value={target} onChange={handletarget} required />
                <button onClick={handlereset}> Reset </button>
                <p> Current Saving: {props.savingAmount} </p>
                <p> Target: {target} </p>
                <p>
                    Progress: <progress max={20000}  value={props.savingAmount} />
                </p>
            </div>
        </form>
    </div>
 );
}

export default TargetforSaving;