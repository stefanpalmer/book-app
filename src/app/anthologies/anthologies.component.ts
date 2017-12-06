import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BookService } from '../shared/book.service';

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
    let anthologyEditor = '';
    let anthologyPublisher = '';
    let anthologyYear = null;
    let anthologyPages = null;
    let anthologyStories = new FormArray([]);
    let anthologyIsbn = '';
    let anthologyReview = '';

    this.anthologyForm = new FormGroup({
      'title': new FormControl(anthologyTitle),
      'editor': new FormControl(anthologyEditor),
      'publisher': new FormControl(anthologyPublisher),
      'year': new FormControl(anthologyYear),
      'pages': new FormControl(anthologyPages),
      'stories': anthologyStories,
      'isbn': new FormControl(anthologyIsbn),
      'review': new FormControl(anthologyReview),
    });
  }

}
