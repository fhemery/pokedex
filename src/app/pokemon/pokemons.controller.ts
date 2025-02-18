import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { RequestWithUser } from '../modules/auth/model/request-with-user';
import { Auth } from '../modules/auth/auth.decorator';

interface GetAllPokemonResponse {
  data: Pokemon[];
}

interface Pokemon {
  id: number;
  name: string;
}

@Controller('pokemons')
export class PokemonsController {
  @Get()
  getAll(): Promise<GetAllPokemonResponse> {
    return Promise.resolve({ data: [{ id: 1, name: 'Salamèche' }] });
  }

  @Post()
  @Auth()
  create(@Body() pokemon: Pokemon, @Req() request: RequestWithUser): void {
    console.log(pokemon);

    request.res.location('http://localhost:3000/api/pokemons/1');
  }

  @Delete(':id')
  @HttpCode(204)
  deleteOne(@Param('id') id: string, @Req() req: RequestWithUser) {
    req.res.status(204);
  }
}
