import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Book } from 'src/book/book.schema'
import { BookService } from 'src/book/book.service'
import { Author } from './author.schema'
import { AuthorService } from './author.service'

@Resolver(() => Author)
export class AuthorResolver {
  constructor(
    private authorsService: AuthorService,
    private bookService: BookService,
  ) {}

  @Query(() => [Author])
  async authors() {
    return this.authorsService.findMany()
  }

  @ResolveField(() => [Book])
  async books(@Parent() parent: Author) {
    return this.bookService.findByAuthorId(parent.id)
  }
}
