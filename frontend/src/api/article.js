import {post, get} from './index';

function addArticle(body) {
    // console.log('here', body);
    return post('/articles/add', body).then(response => response.data);
}

function getAllArticles() {
    console.log('getAllArticles');
    return get('/articles/list').then(response => response.data);
}

export default {
    addArticle,
    getAllArticles
}
