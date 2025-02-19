import request from 'supertest';
import { defaultUrl } from '../constants';

describe('GET /api/pokemons', () => {
  it('should return `Salamèche` as id 1', async () => {
    const response = await request(defaultUrl).get('/api/pokemons');
    expect(response.body.data).toHaveLength(1);
  });
});
