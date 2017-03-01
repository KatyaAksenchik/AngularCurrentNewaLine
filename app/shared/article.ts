
export class Article{
    constructor( 
                 public id: number,
                 public articleName: string,
                 public imgUrl: string,
                 public tag: {},
                 public previewText: string,
                 public articleText: string,
                 public authorName: string,
                 public publishDate: string,
                 public authorLogin: string,
                 public published: boolean = false
    ){}
}
