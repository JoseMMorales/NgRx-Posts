import { HeaderInterceptor } from './header.interceptor';

describe('HeaderInterceptor', () => {
  it('should create an instance', () => {
    const interceptor = new HeaderInterceptor();
    expect(interceptor).toBeTruthy();
  });
});
