import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schems';
import { CreateBookDto } from './Dto/create.book.dto';
import { UpdateBookDto } from './Dto/update.book.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@Controller('books')
export class BookController {
    constructor(private bookService: BookService) { }
    
    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.bookService.findAll()
    }

    @Post()
    async createBook(@Body() book:CreateBookDto): Promise<Book>{
        return this.bookService.create(book);
    }

    @Get(':id')
    async getBookbyId(@Param('id') id:string): Promise<Book>{
        return this.bookService.findById(id)
    }

    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() book: UpdateBookDto): Promise<Book>{
        return this.bookService.updateById(id, book);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: string): Promise<Book>{
        return this.bookService.deleteById(id);
    }
}
