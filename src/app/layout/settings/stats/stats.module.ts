import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from "../../../shared/index";
import { StatComponent } from "./stats.component";

@NgModule({
    imports: [
        CommonModule,

        PageHeaderModule
    ],
    declarations: [StatComponent]
})
export class StatModule { }