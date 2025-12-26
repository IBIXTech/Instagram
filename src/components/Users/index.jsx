import "./index.css";

const Users = (props) => {
  const { usersList, handleRemoveUser } = props;
  const { id, name, userId, imageUri } = usersList;

  const onDelete = () => {
    handleRemoveUser(id);
  };

  return (
    <ul>
      <li className="user-list-item" key={id}>
        <img src={imageUri} className="user-img" />
        <div className="user-details">
          <p className="user-name">{name}</p>
          <p className="user-id">{userId}</p>
        </div>

        <button className="remove-btn" onClick={onDelete}>
          x
        </button>
      </li>
    </ul>
  );
};

export default Users;
