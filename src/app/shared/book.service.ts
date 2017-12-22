import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Story } from '../anthologies/story.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BookService {
  booksChanged = new Subject<Book[]>();
  startedEditing = new Subject<number>();

  private books: Book[] = [

    new Book(
      'The Forever War',
      'Joe Haldeman',
      'St. Martin Griffin',
      1974,
      202,
      'Forever War Series',
      1,
      [],
      '978-0312536633',
      'After this third or fourth read, this is still as fabulous a story as it was the first time I read it many years ago.'
    ),

    new Book(
      'Dark Benediction',
      'Walter M. Miller',
      'Gollancz',
      1980,
      661,
      '',
      null,
      [
        new Story('Walter M. Miller', 'The Will', false),
        new Story('Walter M. Miller', 'Anybody Else Like Me?', false),
        new Story('Walter M. Miller', 'Crucifixus Ethiam', false),
        new Story('Walter M. Miller', 'I', false),
        new Story('Walter M. Miller', 'Dreamer', false),
        new Story('Walter M. Miller', 'Dumb Waiter', false),
        new Story('Walter M. Miller', 'Blood Bank', false),
        new Story('Walter M. Miller', 'Big Joe and the Nth Generation', false),
        new Story('Walter M. Miller', 'The Big Hunger', false),
        new Story('Walter M. Miller', 'Conditionally Human', false),
      ],
      '978-0575079779',
      "Walter Miller's fiction has long been a favorite of mine. A Canticle for Leibowitz is not just one of my favorite science fiction novels, but one of my favorite novels altogether."
    ),

    new Book(
      'The Left Hand of Darkness',
      'Ursula K. Le Guin',
      'Ace Books',
      1959,
      359,
      'Hainish Cycle',
      6,
      [],
      '978-0441478125',
      'This book is a classic so there is really nothing I can say that others have not already said, and better. It is science fiction that addresses the social consequences of contact between people from different planets rather than fixating on technology and the things that can go wrong.'
    ),

    new Book(
      'The Island of Doctor Moreau',
      'H. G. Wells',
      'Dover Publications',
      1896,
      604,
      '',
      null,
      [],
      '978-0486290270',
      "The mad scientist has been with us since the early 1800s. And while H.G. Wells didn't create the mad scientist stereotype, he certainly gave it a boost in his harrowing novella beast-men forced to live like humans, a crazy scientist carrying out mad plans, and a bland Englishman stuck in the middle of it."
    )

  ];

  getBooks() {
    return this.books.slice();
  }

  getBook(index: number) {
    return this.books[index];
  }

  addBook(book: Book) {
    this.books.push(book);
    this.booksChanged.next(this.books.slice());
  }

  updateBook(index: number, newBook: Book) {
    this.books[index] = newBook;
    this.booksChanged.next(this.books.slice());
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    this.booksChanged.next(this.books.slice());
  }
}
