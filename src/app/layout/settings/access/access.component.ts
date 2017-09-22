import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../../router.animations";


@Component({
    selector: 'app-access',
    templateUrl: './access.component.html',
    styleUrls: ['./access.component.scss'],
    animations: [routerTransition()]
})
export class AccessComponent implements OnInit {
    constructor() { }
    ngOnInit() { }


}
