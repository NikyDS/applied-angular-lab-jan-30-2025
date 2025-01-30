import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Welcome Home</p>
    <p>Yay, you are home</p>
  `,
  styles: ``,
})
export class HomeComponent {}
