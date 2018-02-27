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
      '9780312536633',
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
        new Story('The Will', 'Walter M. Miller', false),
        new Story('Anybody Else Like Me?', 'Walter M. Miller', false),
        new Story('Crucifixus Ethiam', 'Walter M. Miller', false),
        new Story('I', 'Walter M. Miller', false),
        new Story('Dreamer', 'Walter M. Miller', false),
        new Story('Dumb Waiter', 'Walter M. Miller', false),
        new Story('Blood Bank', 'Walter M. Miller', false),
        new Story('Big Joe and the Nth Generation', 'Walter M. Miller', false),
        new Story('The Big Hunger', 'Walter M. Miller', false),
        new Story('Conditionally Human', 'Walter M. Miller', false),
      ],
      '9780575079779',
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
      '9780441478125',
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
      '9780486290270',
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
