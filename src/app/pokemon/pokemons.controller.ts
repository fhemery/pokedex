import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { RequestWithUser } from '../modules/auth/model/request-with-user';
import { Auth } from '../modules/auth/auth.decorator';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

interface GetAllPokemonResponse {
  data: IPokemon[];
}

interface IPokemon {
  id: number;

  name: string;
}

class Pokemon implements IPokemon {
  @IsNumber()
  @Min(1)
  @Max(1025)
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}

class PokemonToCreate {
  @IsString()
  @IsNotEmpty()
  name: string;
}

const allPokemons: IPokemon[] = [{ id: 1, name: 'Salamèche' }];

@Controller('pokemons')
export class PokemonsController {
  @Get()
  getAll(): Promise<GetAllPokemonResponse> {
    return Promise.resolve({ data: allPokemons });
  }

  @Post()
  @Auth()
  create(@Body() pokemon: Pokemon, @Req() request: RequestWithUser): void {
    console.log(pokemon instanceof Pokemon);
    console.log(new Pokemon() instanceof Pokemon);
    if (allPokemons.find((p) => p.id === pokemon.id)) {
      throw new BadRequestException('This pokemon is already registered');
    }
    allPokemons.push(pokemon);

    request.res.location('http://localhost:3000/api/pokemons/1');
  }

  @Delete(':id')
  @HttpCode(204)
  deleteOne(@Param('id') id: string, @Req() req: RequestWithUser) {
    req.res.status(204);
  }
}
