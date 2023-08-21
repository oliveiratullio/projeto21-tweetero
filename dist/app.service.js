"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const tweets_entity_1 = require("./entities/tweets.entity");
const user_entity_1 = require("./entities/user.entity");
let AppService = exports.AppService = class AppService {
    constructor() {
        this.users = [];
        this.tweets = [];
    }
    getUsers() {
        return this.users;
    }
    getUserByUsername(username) {
        return this.users.find((user) => user.username === username);
    }
    createUser(body) {
        const user = new user_entity_1.User(body.username, body.avatar);
        this.users.push(user);
        return user;
    }
    createTweet(body) {
        const userExists = this.users.find((user) => user.username === body.username);
        if (userExists) {
            const newTweet = new tweets_entity_1.Tweet(body.username, userExists.avatar, body.tweet);
            return this.tweets.push(newTweet);
        }
        return null;
    }
    getAllTweets() {
        return this.tweets.slice(this.tweets.length - 15);
    }
    getTweetsByUsername(username) {
        return this.tweets.filter((t) => t.username === username);
    }
    getTweetByPagination(page) {
        const tweetsPerPage = 15;
        const startIndex = (page - 1) * tweetsPerPage;
        return this.tweets.slice(startIndex, startIndex + tweetsPerPage);
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
//# sourceMappingURL=app.service.js.map