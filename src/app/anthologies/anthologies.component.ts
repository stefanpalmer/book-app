import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-anthologies',
  templateUrl: './anthologies.component.html',
  styleUrls: ['./anthologies.component.css']
})
export class AnthologiesComponent implements OnInit {
  anthologyForm: FormGroup;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
  /*  const newBook = new Book(
      this.anthologyForm.value['title'],
      this.anthologyForm.value['editor'],
      this.anthologyForm.value['publisher'],
      this.anthologyForm.value['year'],
      this.anthologyForm.value['pages'],
      this.anthologyForm.value['stories'],
      this.anthologyForm.value['isbn'],
      this.anthologyForm.value['review']
    ) ; */
    this.bookService.addBook(this.anthologyForm.value);
  }

  onAddStory() {
    (<FormArray>this.anthologyForm.get('stories')).push(
      new FormGroup({
        'storyTitle': new FormControl(null),
        'storyAuthor': new FormControl(null),
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
