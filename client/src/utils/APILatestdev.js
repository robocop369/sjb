import axios from "axios";

export default {
  fetchUsers: function() {
    return axios
      .get("https://api.github.com/orgs/github/public_members")
      .then(res => {
        const users = res.data;
        return users.map(user => {
          return {
            login: user.login,
            image: user.avatar_url,
            profileUrl: user.html_url
          };
        });
      });
  }
};
