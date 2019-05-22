import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() passPage = new EventEmitter<string>();

  changePage(page: string) {
    this.passPage.emit(page);
  }
}
