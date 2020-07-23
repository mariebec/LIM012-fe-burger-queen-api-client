import { rest } from 'msw';

const objUser = {
  id: 'u_001',
  email: 'example@gmail.com',
  roles: { admin: true }
};

export const handlers = [

  rest.get('http://localhost:3000/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 'u_001',
        email: 'example@gmail.com',
        roles: { admin: true }
      }),
    );
  }),
  
  rest.post('http://localhost:3000/users', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json(req.body),
    );
  }),

  rest.delete('http://localhost:3000/users/u_001', (req, res, ctx) => {
    return res(
      ctx.status(204),
      ctx.json({ message: 'El usuario ha sido eliminado' }),
    );
  }),

  rest.put('http://localhost:3000/users/u_001', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(req.body),
    );
  }),

]
