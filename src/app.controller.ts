import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOkResponse } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({
    description: "server online",
    type: Object,
  })
  @Get()
  getHello(): object {
    return this.appService.getHello();
  }
}
