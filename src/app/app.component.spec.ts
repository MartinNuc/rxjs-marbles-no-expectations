import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { marbles } from 'rxjs-marbles/jasmine';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should see expectations', marbles(m => {
    const source = m.hot('^a--b--c');
    m.expect(source).toBeObservable('-a--b--c');
  }));
});
