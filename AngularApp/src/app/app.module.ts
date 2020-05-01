import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'getAPIResponse',
    pathMatch: 'full'
  },
  {
    path: 'getAPIResponse',
    component: PostsComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent // Posts Component injected here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


