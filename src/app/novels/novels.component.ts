import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})
export class NovelsComponent implements OnInit {
  @ViewChild('form') novelsForm: NgForm;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newBook = new Book(value.title, value.author, value.publisher,
      value.year, value.pages, value.series, value.seriesnum, value.stories,
      value.isbn, value.review);

    this.bookService.addBook(newBook);
    form.reset();
  }

}
