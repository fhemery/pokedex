import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsController } from './pokemons.controller';
import { INestApplication } from '@nestjs/common';
import { FakeAuthMiddleware } from '../modules/auth/fake-auth-middleware.service';
import request from 'supertest';

describe('PokemonsController INTEGRATION TEST', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsController],
    }).compile();

    app = module.createNestApplication();
    app.setGlobalPrefix('api');
    app.use(new FakeAuthMiddleware().use);
    await app.init();
  });

  it('should call the database', async () => {
    FakeAuthMiddleware.SetUser('alice');

    const result = await request(app.getHttpServer()).post('/api/pokemons', {
      id: 4,
      name: 'Carapuce',
    });
    expect(result.status).toBe(201);
    expect(result.headers.location).toBe(
      'http://localhost:3000/api/pokemons/1'
    );
  });
});
