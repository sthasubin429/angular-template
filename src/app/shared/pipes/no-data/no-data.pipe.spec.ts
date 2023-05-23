import { NoDataPipe } from './no-data.pipe';

describe('NoDataPipe', () => {
  let pipe: NoDataPipe;

  beforeEach(() => {
    pipe = new NoDataPipe();
  });

  it('should return the value if it is not empty or falsy', () => {
    const value = 'Some data';
    const transformedValue = pipe.transform(value);
    expect(transformedValue).toBe(value);
  });

  it('should return the default message if the value is empty or falsy', () => {
    const emptyValue = '';
    const transformedEmptyValue = pipe.transform(emptyValue);
    expect(transformedEmptyValue).toBe('No Data');

    const falsyValue = false;
    const transformedFalsyValue = pipe.transform(falsyValue);
    expect(transformedFalsyValue).toBe('No Data');
  });

  it('should return the specified message if provided and the value is empty or falsy', () => {
    const emptyValue = '';
    const customMessage = 'Custom Message';
    const transformedEmptyValue = pipe.transform(emptyValue, customMessage);
    expect(transformedEmptyValue).toBe(customMessage);

    const falsyValue = false;
    const transformedFalsyValue = pipe.transform(falsyValue, customMessage);
    expect(transformedFalsyValue).toBe(customMessage);
  });
});
