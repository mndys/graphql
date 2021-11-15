import { Injectable } from '@nestjs/common'
import authors from 'src/data/authors'

@Injectable()
export class AuthorService {
  async findById(authorId) {
    const author = authors.filter((author) => author.id === authorId)
    return author.length ? author[0] : null
  }

  async findMany() {
    return authors
  }
}
