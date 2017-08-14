//our root app component
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>{{greet}}</h2>
    </div>`
})
export class AppComponent {
	greet:string="Hello Angular2!";
}