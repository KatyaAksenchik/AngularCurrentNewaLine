/**
 * Created by Katsiaryna on 9/02/2017.
 */

export class Article{
    constructor( public articleName: string,
                 public imgUrl: string,
                 public articleText: string,
                 public authorName: string,
                 public published: boolean = false
    ){}
}
