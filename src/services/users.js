
const getUsers = () => {
  return new Promise((resolve, reject) => {
    window.fetch("https://reqres.in/api/users?page=1&per_page=10")
      .then(res => {
        res.json().then(r => resolve(r))
      }, (res) => {
        reject(res);
      });
  })
};


export default {
  getUsers
};