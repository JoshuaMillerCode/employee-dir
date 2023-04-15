import './App.css';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import employeeData from './data';
import { useState } from 'react';

function App() {
  // State for all the employees
  const [employees, setEmployees] = useState(employeeData);
  // State for the one employee selected by the user. This state is shared with the EmployeePage
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <HomePage
          employees={employees}
          setSelectedEmployee={setSelectedEmployee}
          setEmployees={setEmployees}
        />
        <EmployeePage employee={selectedEmployee} />
      </div>
    </div>
  );
}

export default App;
