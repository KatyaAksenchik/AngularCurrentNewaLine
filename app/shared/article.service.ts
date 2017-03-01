import  {articles} from './data';
import  {Article} from './article';


export class ArticleService {
    articles = articles;
    id = articles[articles.length - 1].id + 1;
    temporaryArticle;
    

    getArticles() {
        return this.articles;
    }
    
    setTemporaryArticle(currentArticle){
        currentArticle.id=0;
        this.temporaryArticle=currentArticle;
    }
    
    getTemporaryArticle(){
        return this.temporaryArticle;
    }

    clearTemporaryArticle(){
        this.temporaryArticle={};
    }

    addArticle(currentArticle) {
        let newArticle = new Article(
                    this.id, 
                    currentArticle.articleName,
                    currentArticle.imgUrl,
                    currentArticle.tag, 
                    currentArticle.previewText,
                    currentArticle.articleText, 
                    currentArticle.authorName,
                    currentArticle.publishDate,
                    currentArticle.authorLogin,
                    currentArticle.published
        );
        this.articles.push(newArticle);
        this.id++;
        alert("Добавлена новость");
    }

    deleteArticle(article) {

        let index = this.articles.indexOf(article);
        if (index > -1) {
            this.articles.splice(index, 1);
        }
    }

    editArticle(article:Article, currentArticle) {
        return currentArticle = {
            id: article.id,
            articleName: article.articleName,
            imgUrl: article.imgUrl,
            tag: article.tag,
            previewText: article.previewText,
            articleText: article.articleText,
            authorName: article.authorName,
            publishDate: article.publishDate,
            authorLogin: article.authorLogin,
            published: article.published
        }
    }

    publishArticle(article:Article) {
        article.published = !article.published;
        article.publishDate = ""+(new Date());
    }

    findArticle(id){
        for(let i=0; i<this.articles.length; i++){
            if(this.articles[i].id==id){
                return this.articles[i];
            }
        }
    }

}
