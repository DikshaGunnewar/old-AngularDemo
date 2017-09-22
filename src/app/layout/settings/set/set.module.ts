import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from "../../../shared/index";
import { SetComponent } from "./set.component";
import { SetRoutingModule } from "./set.routing-module";

@NgModule({
    imports: [
        CommonModule,
        SetRoutingModule,
        PageHeaderModule
    ],
    declarations: [SetComponent]
})
export class SetModule { }