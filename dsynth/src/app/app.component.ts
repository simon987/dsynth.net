import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: []
})
export class AppComponent {

    constructor(private translate: TranslateService) {

        translate.addLangs([
            'en',
            'fr',
            'ru'
        ]);

        translate.setDefaultLang('en');
    }

    langList: any[] = [
        {lang: 'fr', display: 'Français'},
        {lang: 'en', display: 'English'},
        {lang: 'ru', display: 'Русский'},
    ];

    langChange(lang: any) {
        this.translate.use(lang.lang);
    }
}
