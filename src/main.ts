import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //use pipes for validation
  app.useGlobalPipes(new ValidationPipe());

  //swagger doc strts here
  const config = new DocumentBuilder()
    .setTitle("NestBackend Learn")
    .setDescription("API documented as learning Nest")
    .setVersion("1.0")
    .addTag("Nest Backend")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3500);
}
bootstrap();
