import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from "./settings.component";
// import{SetComponent} from "./set/set.component"
// import{StatComponent} from "./stats/stats.component"


const routes: Routes = [
    { path: '', component: SettingsComponent ,

    children:[{ path: 'set', loadChildren: './set/set.module#SetModule' },
            { path: 'stats', loadChildren: './stats/stats.module#StatModule' },
            { path: 'access', loadChildren: './access/access.module#AccessModule' }]          


            // { path: 'upgradeAccount', loadChildren: './upgradeAccount/upgradeAccount.module#UpgradeAccountModule' },
            // { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },  
    // { path: '', component: SettingsComponent },
    // {path: 'set', component: SettingsComponent},
    // {path: 'stats', component: SettingsComponent}
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
