import request from 'supertest';
import { defaultUrl } from '../constants';

describe('GET /api/ping', () => {
  it('should return pong on get', async () => {
    const response = await request(defaultUrl).get('/api/ping');

    expect(response.status).toBe(200);
    expect(response.body.response).toBe('pong');
  });

  it('should return the correct version', async () => {
    const response = await request(defaultUrl).get('/api/ping');

    expect(response.status).toBe(200);
    expect(response.body.version).toEqual('1');
  });
});
