import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MockDataService } from './mock-data.service';
import { mockData } from '@core/interfaces';

describe('MockDataService', () => {
  let service: MockDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MockDataService],
    });
    service = TestBed.inject(MockDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data successfully', () => {
    const mockData: mockData[] = [
      {
        createdAt: '2023-05-17',
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password',
        gender: 'male',
        dob: '1990-01-01',
        phone: { countryCode: '+1', number: '1234567890' },
        cityName: 'New York',
        anotherFiled: { key: 'value' },
        id: '1',
      },
      // Add more mock data objects as needed
    ];

    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      'https://613715dc8700c50017ef57b0.mockapi.io/api/users'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should fetch detail for a specific id successfully', () => {
    const mockDetail: mockData = {
      createdAt: '2023-05-17',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password',
      gender: 'male',
      dob: '1990-01-01',
      phone: { countryCode: '+1', number: '1234567890' },
      cityName: 'New York',
      anotherFiled: { key: 'value' },
      id: '1',
    };
    const userId = '1';

    service.getDetail(userId).subscribe((detail) => {
      expect(detail).toEqual(mockDetail);
    });

    const req = httpMock.expectOne(
      `https://613715dc8700c50017ef57b0.mockapi.io/api/users/${userId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockDetail);
  });
});
