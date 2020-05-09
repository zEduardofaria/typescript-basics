import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Eduardo', email: 'z.eduardofaria@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    
    emailService.sendMail({
      to: { name: 'Eduardo Faria', email: 'z.eduardofaria@gmail.com' },
      message: { subject: 'Welcome to the system made with TypeScript', body: 'Welcome' }
    });

    res.send();
  }
};