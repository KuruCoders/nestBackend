import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schems';
import { CreateBookDto } from './Dto/create.book.dto';
import { UpdateBookDto } from './Dto/update.book.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@UseGuards(AuthGuard())
@Controller('books')
export class BookController {
    constructor(private bookService: BookService) { }
    
    @ApiOkResponse({
        description: 'books Fetched',
        type:Book
    })
    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.bookService.findAll()
    }

    @ApiCreatedResponse({
        description: 'book created',
        type:CreateBookDto
    })
    @Post()
    async createBook(@Body() book:CreateBookDto): Promise<Book>{
        return this.bookService.create(book);
    }

    @ApiOkResponse({
        description: 'book Fetched',
        type:Book
    })
    @Get(':id')
    async getBookbyId(@Param('id') id:string): Promise<Book>{
        return this.bookService.findById(id)
    }

    @ApiOkResponse({
        description: 'book updated',
        type:UpdateBookDto
    })
    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() book: UpdateBookDto): Promise<Book>{
        return this.bookService.updateById(id, book);
    }

    @ApiOkResponse({
        description: 'book deleted',
        type:Book
    })
    @Put(':id')
    @Delete(':id')
    async deleteBook(@Param('id') id: string): Promise<Book>{
        return this.bookService.deleteById(id);
    }
}
