import React from "react";

const UserCard = (props) => {
  const { id, first_name, last_name, avatar } = props;
  return (
    <div className="user-container">
      <div className="card">
        <div className="user-avatar">
          <img className="card-img-top" alt="Avatar" src={avatar} />
        </div>
        <div className="card-body user-info">
          <h5 className="card-title">{`${first_name} ${last_name}`}</h5>
        </div>
        <div className="card-footer">
          <a href="javascript: void(0)" onClick={() => props.onDelete(id)}>Delete</a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;