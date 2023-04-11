import './App.css';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import employeeData from './data';
import { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState(employeeData);
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
