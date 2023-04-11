import Header from './Header';

export default function EmployeePage({ employee }) {
  const loaded = () => {
    return (
      <div
        className="employee-page"
        style={{ backgroundColor: employee.color }}
      >
        <Header text="Employee" />
        <img src={employee.img} alt={employee.name} className="profile-img" />
        <div className="profile-details">
          <h2 className="profile-name">{employee.name}</h2>
          <p className="profile-position">{employee.position}</p>
          <div className="contact-info">
            <p>Office Phone: {employee.officePhone}</p>
            <p>Mobile Phone: {employee.mobilePhone}</p>
            <p>Email: {employee.email}</p>
          </div>
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="employee-page">
        <h2>No Employee Selected</h2>
      </div>
    );
  };

  return employee ? loaded() : loading();
}
