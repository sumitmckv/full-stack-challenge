import Founder, { IFounder, IFounderDoc } from '../model/founder';

export default class FounderService {
  async addFounder(req: IFounder): Promise<IFounderDoc> {
    const founder = new Founder(req);
    return founder.save();
  }
}
