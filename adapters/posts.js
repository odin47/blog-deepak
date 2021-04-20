import {Posts} from 'services';

const getArticles = () => {
    return Posts.getPublishedArticles().then(res => res)
}

export {
    getArticles
}