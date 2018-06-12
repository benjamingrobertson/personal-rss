import Articles from './articles';

// Articles.rawCollection().drop();

export default {
  Query: {
    articles(obj, args, { userId }) {
      if (userId === undefined) {
        userId = null;
      }

      // return articles added via graphiql
      //return Articles.find().fetch();

      return Articles.find({ userId }).fetch();
    },
    article(obj, { _id }, { userId }) {
      if (userId === undefined) {
        userId = null;
      }

      const article = Articles.find({ _id }).fetch()[0];

      return { ...article };
    }
  },

  Mutation: {
    createArticle(obj, args, { userId }) {
      if (userId) {
        const articleId = Articles.insert({
          title,
          description,
          link,
          content,
          feedId,
          date
        });
      }
    }
  }
};
