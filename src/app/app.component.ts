import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-data-bindings';


  onShowAlertClicked(count: number): void {
    alert(`Count: ${count}`);
  }
}
