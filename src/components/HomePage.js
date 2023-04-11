import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

export default function HomePage({
  employees,
  setSelectedEmployee,
  setEmployees,
}) {
  return (
    <div className="home-page">
      <Header text="Employee Directory" />
      <SearchBar setEmployees={setEmployees} employees={employees} />
      <EmployeeList
        employees={employees}
        setSelectedEmployee={setSelectedEmployee}
      />
    </div>
  );
}
