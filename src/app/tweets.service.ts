import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  apiURL: string = "https://fake-tweets-api.herokuapp.com/tweets";
  constructor(private httpClient: HttpClient) {}
  // Mi creo un metodo per prendere i Tweet
  public showTweet() :Promise<Tweet[]> {
    return this.httpClient.get<Tweet[]>(this.apiURL).toPromise();
  }
  // Mi creo un metodo per prendere i Tweet in base all'id
  public byId(id:Number) :Promise<Tweet> {
    return this.httpClient.get<Tweet>(`${this.apiURL}/${id}`).toPromise();
  }
 
  // Mi creo un metodo per creare un nuovo tweet
  public add(tweet: Tweet) : Promise<Tweet>{
    return this.httpClient.post<Tweet>(this.apiURL, tweet, {}).toPromise();
  }
}
