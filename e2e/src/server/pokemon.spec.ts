import axios from 'axios';

describe('GET /api/pokemons', () => {
  it('should return `Salamèche` as id 1', async () => {
    const response = await axios.get('/api/pokemons');
    expect(response.data.data).toHaveLength(1);
  });
});
