import prepareMonthData from '../../browser/views/prepareMonthData';
import type { MonthData } from '../../browser/views/prepareMonthData';
import type { DataShape } from '../../browser';

describe('prepareMonthView unit test suite', function () {
  it('should organize the data by month and total consumption', function () {
    const fixtureData: DataShape = {
      days: [
        {
          date: '2022-09-29',
          total: '1000'
        },
        {
          date: '2022-09-30',
          total: '1000'
        },
        {
          date: '2022-10-01',
          total: '1000'
        }
      ]
    };

    const expectedOutput: MonthData = [0, 0, 0, 0, 0, 0, 0, 0, 2000, 1000, 0, 0];

    expect(prepareMonthData(fixtureData)).toEqual(expectedOutput);
  });
});
