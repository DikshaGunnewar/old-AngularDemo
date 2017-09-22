import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { SetComponent } from "./set/set.component";
import { ChartsModule } from "ng2-charts";
import { StatComponent } from "./stats/stats.component";
import { AccessComponent } from "./access/access.component";


@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        PageHeaderModule,
        ChartsModule
    ],
    declarations: [SettingsComponent,
                    SetComponent,
                    StatComponent,
                    AccessComponent]
})
export class SettingsModule { }
