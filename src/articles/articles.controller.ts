import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  // Route pour obtenir tous les articles
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  // Route pour créer un nouvel article
  @Post()
  create(@Body() article: Article) {
    return this.articlesService.create(article);
  }
}
