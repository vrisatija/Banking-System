const {
    getIfsc, getBankDetails, getBranches, getBankNames,
  } = require('./banks.services');
  const models = require('../../models');
  const bank={
    BANK: 'SBI',
    IFSC: 'SBI0020',
    BRANCH: 'JAMMU',
    ADDRESS: 'JAMMU',
    CITY1: 'JAMMU',
    CITY2: 'JAMMU',
    STATE: 'J&K',
    STD_CODE: 22,
    PHONE: '09090',
}

  describe('getIfsc function', () => {
    it('should return ifsc if bank and branch is present', async () => {
        
        jest.spyOn(models.BankDetails, 'findAll').mockResolvedValue(bank)
        const ifsc = await getIfsc('SBI', 'JAMMU');
        expect(ifsc).toStrictEqual(bank);
    });
    it('should throw an error if bank or branch is not present', async () => {
      try {
        jest.spyOn(models.BankDetails, 'findAll').mockResolvedValue([])
        await getIfsc('SB', 'JAMMU');
      } catch (err) {
        expect(err.message).toEqual('BAD REQUEST - Bank details not found ');
        expect(err.code).toEqual(404);
      }
    });
  });
  describe('getBankDetails function', () => {
    it('should return bank details when ifsc code is given', async () => {
        
        jest.spyOn(models.BankDetails, 'findAll').mockResolvedValue(bank)
        const bankDetails = await getBankDetails('ABHY0065001');
        expect(bankDetails).toStrictEqual(bank);
    });
    it('should throw an error if ifsc is not present', async () => {
      try {
        jest.spyOn(models.BankDetails, 'findAll').mockResolvedValue([])
        await getBankDetails('ABHY0065001vs');
      } catch (err) {
        expect(err.message).toEqual('BAD REQUEST -IFSC not found');
        expect(err.code).toStrictEqual(404);
      }
    });
  });
  describe('getBankNames function', () => {
    it('should give all bank names', async () => {
       bankNames=[ {BANK: 'kotak'},{BANK: 'SBI'}]
       jest.spyOn(models.BankDetails, 'findAll').mockResolvedValue(bankNames)
        const allBankNames = await getBankNames();
        expect(allBankNames).toStrictEqual(['kotak','SBI']);
    });
  });
  describe('getBranches function', () => {
    it('should give all branch names', async () => {
       branchNames=[ {BRANCH: 'delhi'},{BRANCH: 'gurugram'}]
       jest.spyOn(models.BankDetails, 'findAll').mockResolvedValue(branchNames)
        const allBranchNames = await getBranches();
        expect(allBranchNames).toStrictEqual(['delhi','gurugram']);
    });
  });