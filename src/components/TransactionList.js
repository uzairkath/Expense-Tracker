import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext';
import { Transactions } from './Transactions';


export default function TransactionList() {
    const {transactions} = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul className='list' >
                {transactions.map(transaction => (
                    <Transactions key={transaction.id} transaction={transaction} />
                ))}
            </ul>

        </>
    )
}