import { useRef } from 'react';
import employeeData from '../data';

export default function SearchBar({ setEmployees }) {
  const input = useRef(null);

  const handleChange = () => {
    const filtered = employeeData.filter((employee) => {
      return employee.name
        .toLowerCase()
        .includes(input.current.value.toLowerCase());
    });

    setEmployees(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleChange}
        ref={input}
        placeholder="Search Name"
      />
    </div>
  );
}
