import { Request, Response } from 'express';
import Founder, { IFounder } from '../model/founder';
import FounderService from '../service/FounderService';

export default class FounderController {
  async getFounders(req: Request, res: Response) {
    try {
      const founders = await Founder.find({});
      res.json(founders);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getFounder(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const founder = await Founder.findById(id);
      res.json(founder);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async addFounder(req: Request, res: Response) {
    try {
      const { data } = req.body;
      const founderService = new FounderService();
      const newFounder = founderService.addFounder(data);
      res.status(201).json(newFounder);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
