import IncomeForm from '../components/IncomeForm';
import ExpenseForm from '../components/ExpenseForm';
import TargetforSaving from '../components/TargetforSaving';
import TransferforSaving from '../components/TransferforSaving';
import { useCallback, useState } from 'react';


function BudgetApp() {
  const [savingAmount, setSavingAmount] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);

  const getSavingAmount = useCallback((amount: number)=>{
    setSavingAmount(amount);
  }, []);

  const getTotalIncomeAmount = useCallback((amount: number)=> {
    setTotalIncomeAmount(amount);
    console.log(totalIncomeAmount)
  },[]);

  const getTotalExpenseAmount = useCallback((amount: number)=> {
    setTotalExpenseAmount(amount);
    console.log(totalExpenseAmount)
},[]);
  

  return (
    <div className='container'>
      <IncomeForm onGetTotalIncomeAmount={getTotalIncomeAmount} />
      <ExpenseForm onGetTotalExpenseAmount={getTotalExpenseAmount} />
      <TargetforSaving savingAmount={savingAmount} />
      <TransferforSaving ongetSavingAmount={getSavingAmount} 
      totalIncomeAmount={totalIncomeAmount}
      totalExpenseAmount={totalExpenseAmount}
      />
    </div>
  );
}
export default BudgetApp;
