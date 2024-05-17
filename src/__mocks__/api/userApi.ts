
import apiInstance from '@/packages/axios';
import MockAdapter from 'axios-mock-adapter'
import { ENV } from "@/consts";


if (ENV.APP_MOCK_API_ENABLE) {
  const mockAdapter = new MockAdapter(apiInstance);

  // arguments for reply are (status, data, headers)
  mockAdapter.onGet(`/user/self`).reply(200, {
    data: {
      id: 0,
      name: 'mock-user',
    }
  });

  // arguments for reply are (status, data, headers)
  mockAdapter.onPost("/user/line-login").reply(200, {
    data: {
      id: 0,
      name: 'mock-user',
      api_token: 'mocked-api-token'
    }
  });
}