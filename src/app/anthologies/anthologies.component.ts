import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-anthologies',
  templateUrl: './anthologies.component.html',
  styleUrls: ['./anthologies.component.css']
})
export class AnthologiesComponent implements OnInit {
  id: number;
  editMode = false;
  anthologyForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.bookService.updateBook(this.id, this.anthologyForm.value);
      this.router.navigate(['../../'], {relativeTo: this.route});
    } else {
      this.bookService.addBook(this.anthologyForm.value);
      this.router.navigate(['../library']);
    }
  }

  onClear() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onAddStory() {
    (<FormArray>this.anthologyForm.get('stories')).push(
      new FormGroup({
        'title': new FormControl(null),
        'author': new FormControl(null),
        'original': new FormControl(null)
      })
    );
  }

  private initForm() {
    let anthologyTitle = '';
    let anthologyAuthor = '';
    let anthologyPublisher = '';
    let anthologyYear = null;
    let anthologyPages = null;
    let anthologyStories = new FormArray([]);
    let anthologyIsbn = '';
    let anthologyReview = '';

    if (this.editMode) {
      const book = this.bookService.getBook(this.id);
      anthologyTitle = book.title;
      anthologyAuthor = book.author;
      anthologyPublisher = book.publisher;
      anthologyYear = book.year;
      anthologyPages = book.pages;
      if (book['stories']) {
        for (let story of book.stories) {
          anthologyStories.push(
            new FormGroup({
              'title': new FormControl(story.title),
              'author': new FormControl(story.author),
              'original': new FormControl(story.original)
            })
          )
        }
      }
      anthologyIsbn = book.isbn;
      anthologyReview = book.review;
    }

    this.anthologyForm = new FormGroup({
      'title': new FormControl(anthologyTitle),
      'author': new FormControl(anthologyAuthor),
      'publisher': new FormControl(anthologyPublisher),
      'year': new FormControl(anthologyYear),
      'pages': new FormControl(anthologyPages),
      'stories': anthologyStories,
      'isbn': new FormControl(anthologyIsbn),
      'review': new FormControl(anthologyReview),
    });
  }

}
