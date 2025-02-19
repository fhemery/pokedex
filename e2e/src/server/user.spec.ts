import request from 'supertest';
import { defaultFirebaseUrl, defaultUrl } from '../constants';

describe('POST /api/users', () => {
  it('should return 201 if user is authenticated', async () => {
    const auth = await request(defaultFirebaseUrl).post('').send({
      email: 'fhemery@hemit.fr',
      password: 'Test123!',
      returnSecureToken: true,
    });

    expect(auth.status).toBe(200);
    const token = auth.body.idToken;
    console.log(token);

    const userResponse = await request(defaultUrl)
      .post('/api/users')
      .set('Authorization', `Bearer ${token}`)
      .send({});
    expect(userResponse.status).toBe(201);
  });

  it('should return 401 if user is not authenticated', async () => {
    const response = await request(defaultUrl).post('/api/users').send({});
    expect(response.status).toBe(401);
  });
});
