import { Request, Response } from 'express';

interface controller {
  (req: Request, res: Response): void;
}