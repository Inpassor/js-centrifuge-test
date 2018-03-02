import {Component} from '@angular/core';

import {AppService} from '@app/services';

@Component({
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})

export class ErrorComponent {

    constructor(private _appService: AppService) {
        this._appService.title = 'Error';
    }

}
