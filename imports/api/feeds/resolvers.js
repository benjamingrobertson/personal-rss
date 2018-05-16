import Feeds from './feeds';
import Parser from 'rss-parser';

// Feeds.rawCollection().drop();

export default {
  Query: {
    feeds(obj, args, { userId }) {
      if (userId === undefined) {
        userId = null;
      }

      return Feeds.find({ userId }).fetch();
    }
  },

  // Feed: {
  //   articles: (feed) => {

  //   }
  // },

  Mutation: {
    createFeed(object, { url }, { userId }) {
      if (userId) {
        let feedData = {};
        let title = '';
        let feedId = null;

        let parser = new Parser();
        let feedInfo = parser.parseURL(url);

        feedInfo
          .then((data) => {
            feedId = Feeds.insert({
              url,
              name: data.title,
              description: data.description,
              userId,
              articles: data.items
            });
          })
          .then((feedId) => Feeds.findOne(feedId));
      } else {
        throw new Error('Unauthorized');
      }
    }
  }
};
