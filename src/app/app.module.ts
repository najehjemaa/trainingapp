import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { SessionItemComponent } from 'src/app/session-item/session-item.component';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SessionItemListComponent } from 'src/app/session-item-list/session-item-list.component';


const appRoutes: Routes = [
  {
  path: 'list',
  component: SessionItemListComponent},
  {
  path: 'admin',
  loadChildren: () => import('src/app/admin/admin.module').then(x => x.AdminModule),
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
