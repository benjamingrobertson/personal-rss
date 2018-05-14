import Feeds from './feeds';

export default {
  Query: {
    feeds(obj, args, { userId }) {
      if (userId === undefined) {
        userId = null;
      }

      return Feeds.find({ userId }).fetch();
    }
  }
};
