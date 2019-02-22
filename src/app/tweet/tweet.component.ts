import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  public tweets: Tweet[] = [];
  constructor(public tweetsService: TweetsService) { };


  ngOnInit() {
    let promise = this.tweetsService.showTweet();
    promise.then((results)=> {
      this.tweets = results;
      console.log(this.tweets);
    })
  }

}
