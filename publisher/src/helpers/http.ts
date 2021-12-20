import { Request } from 'express';

export function getPaginationParams(request: Request) {
  const limit = Number(request.query.limite ?? 10);
  const offset = Number(request.query.inicio ?? 0);
  return { limit, offset };
}
