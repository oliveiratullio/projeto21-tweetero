import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateTweetDto } from 'src/dtos/tweet.dto';
import { CreateUserDto } from 'src/dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/tweets')
  getAllTweets(@Query() query, @Res() res: Response) {
    if (query.page === undefined) {
      return res.status(200).send(this.appService.getAllTweets());
    }
    if (query.page < 1 || isNaN(query.page)) {
      return res.sendStatus(400)
    }
    return res
      .status(200)
      .send(this.appService.getTweetByPagination(query.page));
  }
  @Get('/tweets/:username')
  getTweetsByUsername(@Param('username') username: string) {
    console.log(username)
    return this.appService.getTweetsByUsername(username);
  }
  @Post('/sign-up')
  createUser(@Body() body: CreateUserDto, @Res() res: Response) {
    this.appService.createUser(body);
    return res.sendStatus(200)
  }

  @Post('/tweets')
  createTweet(@Body() body: CreateTweetDto, @Res() res: Response) {
    const tweet = this.appService.createTweet(body);
    if (tweet) {
      return res.sendStatus(201)
    }
    return res.sendStatus(401)
  }
}

