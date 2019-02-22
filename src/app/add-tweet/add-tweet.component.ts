import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit {

  public author: string;
  public message: string;

  constructor(public tweetsService: TweetsService, public router: Router) { };

  ngOnInit() {
  }

  addTweet() {
    this.tweetsService.add({ author: this.author, message: this.message})
    .then(result => {
      console.log(result);
      this.router.navigate([`/tweets/${result.id}`])
    })
  }


  
}       
