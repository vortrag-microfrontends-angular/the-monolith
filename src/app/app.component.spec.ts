import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let subject: AppComponent;
  beforeEach(() => {
    subject = new AppComponent();
  });

  it('should create the app', () => {
    expect(subject).toBeDefined();
  });
});
