import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`
})

export class AppComponent {
    pageHeader: string = "Page Header";
    name: string = "test";
    userText = "Ernie";
}