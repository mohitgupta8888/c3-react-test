import React, { Component } from "react";
import userService from './services/users';
import UserCard from './components/UserCard';
import Loader from './components/Loader';

export class PearsonUsers extends Component {

  static mergeUniqueItems = (source, items) => {
    return source.concat(items).filter((user, index, self) => (index === self.findIndex((t) => (
      t.id === user.id
    ))))
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentDidMount() {
    userService.getUsers().then(response => {
      this.setState({
        isLoading: false,
        users: PearsonUsers.mergeUniqueItems(this.state.users, response.data)
      })
    });
  }

  confirmDelete = (id) => {
    const userIndex = this.state.users.findIndex(u => u.id === id);
    if (userIndex <= -1) {
      return;
    }
    const userInfo = this.state.users[userIndex];
    const { first_name, last_name } = userInfo;
    if (!window.confirm(`Are you sure to delete ${first_name} ${last_name} ?`)) {
      return;
    }

    this.setState({
      user: [...this.state.users.splice(userIndex, 1)]
    });
  }

  render() {
    return (
      <div className="row pearon-users">
        <div className="col-12">
          <div className="row">
            <div className="col s12">
              <h1 className="page-title">Pearson User Management</h1>
            </div>
          </div>
          {/* Render users here */}
          <div className="row users-container">
            <div className="col-12">
              <div className="card-deck">
                {
                  this.state.isLoading && <Loader />
                }
                {
                  this.state.users.map((userInfo, index) => {
                    return (
                      <UserCard
                        key={userInfo.id}
                        {...userInfo}
                        onDelete={this.confirmDelete}
                      />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}