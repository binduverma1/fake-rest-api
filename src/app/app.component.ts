import { Component, OnInit } from '@angular/core';

import { FakeService } from './fake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: any [];

  constructor(private fakeService: FakeService) { }

  ngOnInit() {
    this.fakeService.getBooks()
      .subscribe(
        books => {
          this.books = books;
        }
      );
  }
}
