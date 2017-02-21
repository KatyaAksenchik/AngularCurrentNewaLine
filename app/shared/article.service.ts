import  {articles} from './data';
import  {Article} from './article';

export class ArticleService {
    articles = articles;


    getArticles() {
        return this.articles;
    }

    addArticle(currentArticle:Article) {
        let newArticle: Article = new Article(currentArticle.id, currentArticle.articleName, currentArticle.imgUrl, currentArticle.articleText, "katya");
        this.articles.push(newArticle);
        alert("Добавлена новость");
    }

    deleteArticle(article:Article) {
        console.log("delete");
        let index = this.articles.indexOf(article);
        if (index > -1) {
            this.articles.splice(index, 1);
        }
    }

    editArticle(article: Article, currentArticle) {
       return currentArticle={
            id: article.id,
            articleName: article.articleName,
            imgUrl: article.imgUrl,
            articleText: article.articleText,
            authorName: article.authorName,
            published: article.published
        }
    }

    publishArticle(article:Article) {
        article.published = !article.published ;
    }

}
