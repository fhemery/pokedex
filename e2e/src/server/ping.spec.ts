import axios from 'axios';

describe('GET /api/ping', () => {
  it('should return pong on get', async () => {
    const response = await axios.get('/api/ping');

    expect(response.status).toBe(200);
    expect(response.data).toEqual({ response: 'pong' });
  });
});
