exports.Note = class Note{
    constructor(bookId , title , description , publisher , author , book_pages){
        this.bookId = bookId ; 
        this.title = title ; 
        // this.isbn = isbn ; 
        this.description = description ; 
        this.publisher = publisher ; 
        this.author = author ; 
        this.book_pages = book_pages ; 
    }
}