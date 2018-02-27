import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css']
})

export class NovelsComponent implements OnInit {
  subscription: Subscription;
  editedBook: Book;
  editedNumberIndex: number;
  editMode = false;
  novelsForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.editedNumberIndex = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.bookService.updateBook(this.editedNumberIndex, this.novelsForm.value);
      this.router.navigate(['../../'], {relativeTo: this.route});
    } else {
      this.bookService.addBook(this.novelsForm.value);
      this.router.navigate(['../library'], {relativeTo: this.route});
    }
  }

  onCancelNew() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  
  onCancelEdit() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  private initForm() {
    let novelTitle = '';
    let novelAuthor = '';
    let novelPublisher = '';
    let novelYear = null;
    let novelPages = null;
    let novelSeries = '';
    let novelSeriesNum = null;
    let novelStories = new FormArray([]);
    let novelIsbn = '';
    let novelReview = '';

    if (this.editMode) {
      const book = this.bookService.getBook(this.editedNumberIndex);
      novelTitle = book.title;
      novelAuthor = book.author;
      novelPublisher = book.publisher;
      novelYear = book.year;
      novelPages = book.pages;
      novelSeries = book.series;
      novelSeriesNum = book.seriesnum;
      novelStories;
      novelIsbn = book.isbn;
      novelReview = book.review;
    }

    this.novelsForm = new FormGroup({
      'title': new FormControl(novelTitle, Validators.required),
      'author': new FormControl(novelAuthor, Validators.required),
      'publisher': new FormControl(novelPublisher),
      'year': new FormControl(novelYear, Validators.max(2018)),
      'pages': new FormControl(novelPages, Validators.min(1)),
      'series': new FormControl(novelSeries),
      'seriesnum': new FormControl(novelSeriesNum),
      'stories': novelStories,
      'isbn': new FormControl(novelIsbn, Validators.pattern(/^\d{13}$/)),
      'review': new FormControl(novelReview),
    });
  }

}
