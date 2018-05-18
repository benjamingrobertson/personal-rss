import Articles from './articles';

export default {
  Query: {
    articles(obj, args, { userId }) {
      if (userId === undefined) {
        userId = null;
      }

      // return articles added via graphiql
      //return Articles.find().fetch();

      return Articles.find({ userId }).fetch();
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
