import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpensDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpensesListFilters />
        <ExpensesList />
    </div>
);

export default ExpensDashboardPage;