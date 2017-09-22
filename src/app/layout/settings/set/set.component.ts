import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../../router.animations";
import{SettingsComponent} from "../settings.component"

@Component({
    selector: 'app-set',
    templateUrl: './set.component.html',
    styleUrls: ['./set.component.scss'],
    animations: [routerTransition()]
})
export class SetComponent implements OnInit {
    constructor() { }
    ngOnInit() { }


}
