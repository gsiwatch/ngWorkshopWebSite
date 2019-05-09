import { Component } from '@angular/core';
import * as emailJs from 'emailjs-com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public clickMessage: string;
    private firstNameValue: string;
    private lastNameValue: string;
    showFirstNameError: boolean;
    showLastNameError: boolean;

    sendEmail(firstName: string, lastName: string) {
        this.showFirstNameError = false;
        this.showLastNameError = false;
        this.clickMessage = '';
        if (!firstName) {
            this.firstNameValue = 'firstName is required';
            this.showFirstNameError = true;
        }
        if (!lastName) {
            this.lastNameValue = 'lastName is required';
            this.showLastNameError = true;
        }
        if (!firstName || !lastName) {
            return;
        }

        const templateParams = {
            name: `${firstName} ${lastName}`,
            notes: 'I am interested!!'
        };

        emailJs.send('gmail', 'template_gNR36YhK', templateParams, 'user_kWg7moTuSFdmWfMgeGdwL')
            .then((response) => {
                this.clickMessage = `Successfully sent the email, GaurishSiwatch will respond back soon`;
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                this.clickMessage = `Sending email failed please email to gaurishsiwatch@quickenloans.com`;
                console.log('FAILED...', error);
            });
    }
}
