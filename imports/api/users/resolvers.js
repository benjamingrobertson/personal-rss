export default {
  Query: {
    user(object, arguments, { user }) {
      // console.log(user);
      return user || {};
    }
  },
  User: {
    email: (user) => {
      if (user.emails) {
        return user.emails[0].address;
      }
    },
    name: (user) => {
      if (user.profile) {
        return user.profile.name;
      }
    }
  }
};
