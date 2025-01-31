import { Controller, Get } from '@nestjs/common';

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
}
