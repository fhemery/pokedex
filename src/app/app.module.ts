import { Module } from '@nestjs/common';
import { FirebaseModule } from 'nestjs-firebase';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingModule } from './ping/ping.module';
import { PokemonsController } from './pokemon/pokemons.controller';

@Module({
  imports: [
    PingModule,
    FirebaseModule.forRoot({
      googleApplicationCredential: 'src/assets/pokedex-firebase-key.json',
    }),
  ],
  controllers: [AppController, PokemonsController],
  providers: [AppService],
})
export class AppModule {}
