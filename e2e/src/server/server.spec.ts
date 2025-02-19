import request from 'supertest';
import { defaultUrl } from '../constants';

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await request(defaultUrl).get(`/api`);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello API' });
  });
});
