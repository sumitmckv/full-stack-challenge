import { Request, Response } from 'express';
import Company from '../model/company';
import { IFounderDoc } from '../model/founder';
import FounderService from '../service/FounderService';

export default class CompanyController {
  async getCompanies(req: Request, res: Response) {
    try {
      const companies = await Company.find({}).populate('founders');
      res.json(companies);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async getCompany(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const company = await Company.findById(id).populate('founders');
      res.json(company);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async addCompany(req: Request, res: Response) {
    try {
      const { data } = req.body;
      const company = new Company(data);
      const newCompany = await company.save();
      res.status(201).json(newCompany);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async updateCompany(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { data } = req.body;
      const updatedCompany = await Company.updateOne({ _id: id }, data);
      res.json(updatedCompany);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async deleteCompany(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedCompany = await Company.deleteOne({ _id: id });
      res.json(deletedCompany);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async addFounder(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { data } = req.body;
      const founderService = new FounderService();
      const founder: IFounderDoc = await founderService.addFounder(data);
      const updatedCompany = await Company.updateOne(
        { _id: id },
        {
          $push: { founders: founder._id },
        }
      );
      res.json(updatedCompany);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
