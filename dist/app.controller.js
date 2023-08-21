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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const tweet_dto_1 = require("./dtos/tweet.dto");
const user_dto_1 = require("./dtos/user.dto");
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getAllTweets(query, res) {
        if (query.page === undefined) {
            return res.status(200).send(this.appService.getAllTweets());
        }
        if (query.page < 1 || isNaN(query.page)) {
            return res.sendStatus(400);
        }
        return res
            .status(200)
            .send(this.appService.getTweetByPagination(query.page));
    }
    getTweetsByUsername(username) {
        console.log(username);
        return this.appService.getTweetsByUsername(username);
    }
    createUser(body, res) {
        this.appService.createUser(body);
        return res.sendStatus(200);
    }
    createTweet(body, res) {
        const tweet = this.appService.createTweet(body);
        if (tweet) {
            return res.sendStatus(201);
        }
        return res.sendStatus(401);
    }
};
__decorate([
    (0, common_1.Get)('/tweets'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllTweets", null);
__decorate([
    (0, common_1.Get)('/tweets/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTweetsByUsername", null);
__decorate([
    (0, common_1.Post)('/sign-up'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/tweets'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tweet_dto_1.CreateTweetDto, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createTweet", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map