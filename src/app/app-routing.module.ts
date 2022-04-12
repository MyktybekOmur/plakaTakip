import { GirenAracComponent } from './pages/giren-arac/giren-arac.component';
import { CikanAracComponent } from './pages/cikan-arac/cikan-arac.component';
import { PlatesComponent } from './pages/plates/plates.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PlatesComponent },
  { path: 'cikan-arac', component: CikanAracComponent },
  { path: 'giren-arac', component: GirenAracComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlatesComponent, CikanAracComponent,GirenAracComponent];