import { Component, ChangeDetectionStrategy, resource } from '@angular/core';

type Book = {
  id: number;
  title: string;
  author: string;
  year: Date;
};

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        @for (book of newsBooks.value(); track book.id) {
          <tr>
            <th>{{ book.id }}</th>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.year }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>`,
  styles: ``,
})
export class BooksComponent {
  newsBooks = resource<Book[], unknown>({
    loader: () =>
      fetch('/api/books')
        .then((r) => r.json())
        .then((r) => r['data']),
  });
}
