import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sidebarOpened = false;

  public toggleSidebar(): void {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
