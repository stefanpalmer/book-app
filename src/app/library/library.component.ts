import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
