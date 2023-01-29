import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    ProfilesComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    MenubarModule
  ]
})
export class MaintenanceModule { }
