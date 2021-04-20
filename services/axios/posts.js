import {get} from 'services/axios/request';

const ARTICLES_URL = "https://dev.to/api/articles/me/published";

const ArticleService = {
    getPublishedArticles: () => {
        return get(ARTICLES_URL).then(res => res)
    }
}

export default ArticleService;
export {ArticleService};
