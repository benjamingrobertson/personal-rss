import Articles from './articles';

export default {
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
