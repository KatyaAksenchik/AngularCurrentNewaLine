
export class Article{
    constructor( 
                 public id: number,
                 public articleName: string,
                 public imgUrl: string,
                 public articleText: string,
                 public authorName: string,
                 public published: boolean = false
    ){}
}
