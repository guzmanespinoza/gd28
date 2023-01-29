import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceModule } from './maintenance/maintenance.module';

const routes: Routes = [
  { path: 'maintenance', loadChildren: () => MaintenanceModule },
  { path: '**', redirectTo: 'maintenance/profiles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
