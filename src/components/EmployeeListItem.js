export default function EmployeeListItem({
  name,
  position,
  img,
  id,
  handleClick,
  color,
}) {
  return (
    <div
      className="list-item"
      style={{ backgroundColor: color }}
      onClick={() => {
        handleClick(id);
      }}
    >
      <img className="pic" src={img} />
      <div className="">
        <h3>{name}</h3>
        <h6>{position}</h6>
      </div>
    </div>
  );
}
