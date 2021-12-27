import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component8Component } from './feature42-component8.component';

describe('Feature42Component8Component', () => {
  let component: Feature42Component8Component;
  let fixture: ComponentFixture<Feature42Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
