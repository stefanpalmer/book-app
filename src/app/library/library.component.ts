import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
  id: number;
  subscription: Subscription;

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.bookService.booksChanged.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.books = this.bookService.getBooks();
    console.log(this.bookService.getBooks());
  }

  onEditBook() {
    this.router.navigate(['id'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
