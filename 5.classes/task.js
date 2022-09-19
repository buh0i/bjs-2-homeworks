"use strict"

//task1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set stateAmount(value) {
        if (value < 0) {
            this.state = 0;
        } else if (value > 100) {
            this.state = 100;
        } else {
            this.state = value;
        }
    }

    get stateAmount() {
        return this.state;
    } 
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
    }
}

class FantasticBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
    }
}

class DetectiveBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
    }
}

//task2

class Library {
    constructor(name, books) {
        this.name = String(name);
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value) {   
        for (let i = 0; i < this.books.length; i++) {
            for (let l = 0; l < Object.entries(this.books[i]).length; l++) {
                if (Object.entries(this.books[i]) === [type, value]) {
                    return this.books[i];
                } else {
                    return null
                }
           }
        }
    }
    
    giveBookByName(bookName) {
       for (let i = 0; i < this.books.length; i++) {
        for (let l = 0; l < Object.values(this.books[i]).length; l++) {
            if (Object.values(this.books[i])[l] === bookName) {
                return this.books[i] && delete this.books[i];
            } else {
                return null
            }
        }
       }
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.books)

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


console.log(Object.entries(Library.books));