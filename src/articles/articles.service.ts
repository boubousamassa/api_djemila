import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  async create(articleData: Partial<Article>): Promise<Article> {
    const article = this.articlesRepository.create(articleData);
    return this.articlesRepository.save(article);
  }

  async findAll(): Promise<Article[]> {
    return this.articlesRepository.find();
  }

  async update(id: number, articleData: Partial<Article>): Promise<Article> {
    await this.articlesRepository.update(id, articleData);
    return this.articlesRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
