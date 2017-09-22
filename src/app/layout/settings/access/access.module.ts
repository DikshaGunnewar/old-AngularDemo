import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from "../../../shared/index";
import { AccessComponent } from "./access.component";
import { AccessRoutingModule } from "./access.routing-module";

@NgModule({
    imports: [
        CommonModule,
        AccessRoutingModule,
        PageHeaderModule
    ],
    declarations: [AccessComponent]
})
export class AccessModule { }