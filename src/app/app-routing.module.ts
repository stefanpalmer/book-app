import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { NovelsComponent } from './novels/novels.component';
import { AnthologiesComponent } from './anthologies/anthologies.component';
import { LibraryComponent } from './library/library.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'novel', component: NovelsComponent },
  { path: 'anthology', component: AnthologiesComponent },
  { path: 'library/:id/edit-novel', component: NovelsComponent },
  { path: 'library/:id/edit-anthology', component: AnthologiesComponent },
  { path: 'library', component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
