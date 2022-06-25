import * as types from '../action-types';

export default {
    addArticle(payload) {
        return {type: types.ADD_ARTICLE, payload};
    },
    getAllArticles(payload) {
        return {type: types.GET_ALL_ARTICLES, payload};
    }
}
