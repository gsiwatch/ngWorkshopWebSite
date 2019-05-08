import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private clickMessage: string;

    sendEmail() {
      this.clickMessage = `Thanks for the interest.
       Gaurish will reach out to you shortly
       if he fail to do so, please feel free to email him gaurish.siwatch@quickenloans.com
       `;
    }
}
