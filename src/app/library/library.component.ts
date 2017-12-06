import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.subscription = this.bookService.booksChanged.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.books = this.bookService.getBooks();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
