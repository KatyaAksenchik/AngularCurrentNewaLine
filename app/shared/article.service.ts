import  {articles} from './data';
import  {Article} from './article';


export class ArticleService {
    articles = articles;
    UserArticle;
    id = articles[articles.length - 1].id + 1;

    getArticles() {
        return this.articles;
    }

    getUserArticles(user) {
        this.UserArticle = this.articles.filter(
            article => article.authorName === user);
        console.log(this.UserArticle);
        return this.UserArticle;
    }

    addArticle(currentArticle:Article) {
        console.log(this.id);
        let newArticle:Article = new Article(this.id, currentArticle.articleName, currentArticle.imgUrl, currentArticle.articleText, currentArticle.authorName);
        this.articles.push(newArticle);
        console.log(this.articles);
        this.UserArticle.push(newArticle);
        console.log(this.UserArticle);
        this.id++;
        alert("Добавлена новость");
    }

    deleteArticle(article:Article) {

        let index = this.articles.indexOf(article);
        if (index > -1) {
            this.articles.splice(index, 1);
        }


        let index_user = this.UserArticle.indexOf(article);
        if (index_user > -1) {
            this.UserArticle.splice(index_user, 1);
        }

    }

    editArticle(article:Article, currentArticle) {
        return currentArticle = {
            id: article.id,
            articleName: article.articleName,
            imgUrl: article.imgUrl,
            articleText: article.articleText,
            authorName: article.authorName,
            published: article.published
        }
    }

    publishArticle(article:Article) {
        article.published = !article.published;
    }

    findArticle(id){
        for(let i=0; i<this.articles.length; i++){
            if(this.articles[i].id==id){
                return this.articles[i];
            }
        }
    }

}
