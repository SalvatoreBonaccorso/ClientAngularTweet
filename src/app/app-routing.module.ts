import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetComponent } from './tweet/tweet.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';

const routes: Routes = [
  {path : "tweets",component:TweetComponent},
  {path : "tweets/create",component:AddTweetComponent},
  {path : "tweets/:id",component:TweetDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
