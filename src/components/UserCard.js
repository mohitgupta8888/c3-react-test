import React from "react";

const UserCard = (props) => {
  const { id, first_name, last_name, avatar } = props;
  return (

    <div class="card user-container">
      <div className="user-avatar">
        <img class="card-img-top" alt="Avatar" src={avatar} />
      </div>
      <div class="card-body user-info">
        <h5 class="card-title">{`${first_name} ${last_name}`}</h5>
      </div>
      <div class="card-footer">
        <a href="javascript: void(0)" onClick={() => props.onDelete(id)}>Delete</a>
      </div>
    </div>
  );
};

export default UserCard;