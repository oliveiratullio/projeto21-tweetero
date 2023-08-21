import { AppService } from './app.service';
import { Response } from 'express';
import { CreateTweetDto } from 'src/dtos/tweet.dto';
import { CreateUserDto } from 'src/dtos/user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllTweets(query: any, res: Response): Response<any, Record<string, any>>;
    getTweetsByUsername(username: string): import("./entities/tweets.entity").Tweet[];
    createUser(body: CreateUserDto, res: Response): Response<any, Record<string, any>>;
    createTweet(body: CreateTweetDto, res: Response): Response<any, Record<string, any>>;
}
