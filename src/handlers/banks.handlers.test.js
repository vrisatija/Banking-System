const { CustomException } = require('../constants/error');
const services = require('../services/banks.services');
const {
  getIfsc, getBankDetails, getBranches, getBankNames, insertBankDetails,
} = require('./banks.handlers');
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};
const mockRequest = () => {
  const req = {};
  req.params = { bankName: 'SBI', branchName: 'JAMMU', ifsc: 'SBI0020' };
  return req;
};
describe('getIfsc function', () => {
  it('should send bank details ', async () => {
    const bankdetails = {
      ADDRESS: 'JAMMU',
      BANK: 'SBI',
      BRANCH: 'JAMMU',
      CITY1: 'JAMMU',
      CITY2: 'JAMMU',
      IFSC: 'SBI0020',
      PHONE: '09090',
      STATE: 'J&K',
      STD_CODE: 22,
    };
    jest.spyOn(services, 'getIfsc').mockResolvedValue(bankdetails);
    const res = mockResponse();
    const req = mockRequest();
    await getIfsc(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ ifsc: bankdetails });
  });
  it('should catch error if thrown by getifsc service', async () => {
    jest.spyOn(services, 'getIfsc').mockRejectedValue(CustomException('ERROR', 500));
    const res = mockResponse();
    const req = mockRequest();
    await getIfsc(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'There\'s something wrong!  Failed: \n Error: ERROR' });
  });
});
describe('getBankDetails function', () => {
  it('should send bank details', async () => {
    const bankdetails = {
      ADDRESS: 'JAMMU',
      BANK: 'SBI',
      BRANCH: 'JAMMU',
      CITY1: 'JAMMU',
      CITY2: 'JAMMU',
      IFSC: 'SBI0020',
      PHONE: '09090',
      STATE: 'J&K',
      STD_CODE: 22,
    };
    jest.spyOn(services, 'getBankDetails').mockResolvedValue(bankdetails);
    const res = mockResponse();
    const req = mockRequest();
    await getBankDetails(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ bankDetails: bankdetails });
  });
  it('should catch error if thrown by getBankDetails service', async () => {
    jest.spyOn(services, 'getBankDetails').mockRejectedValue(CustomException('ERROR', 500));
    const res = mockResponse();
    const req = mockRequest();
    await getBankDetails(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'There\'s something wrong!  Failed: \n Error: ERROR' });
  });
});
describe('getBranches function', () => {
  it('should send all the branches Name', async () => {
    const mockBranches = ['TRIKUTA NAGAR', 'GANDHI NAGAR'];
    jest.spyOn(services, 'getBranches').mockResolvedValue(mockBranches);
    const res = mockResponse();
    const req = mockRequest();
    await getBranches(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ bankBranches: mockBranches });
  });
});
describe('getBankNames function', () => {
  it('should send all the bank names', async () => {
    const mockBanks = ['SBI', 'KOTAK'];
    jest.spyOn(services, 'getBankNames').mockResolvedValue(mockBanks);
    const res = mockResponse();
    const req = mockRequest();
    await getBankNames(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ bankNames: mockBanks });
  });
});
describe('insertBankDetails function', () => {
  it('should insert all the bank details into db', async () => {

    jest.spyOn(services, 'insertBankDetails').mockResolvedValue({});
    const res = mockResponse();
    const req = mockRequest();
    await insertBankDetails(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});