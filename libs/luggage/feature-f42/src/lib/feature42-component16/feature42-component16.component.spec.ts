import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component16Component } from './feature42-component16.component';

describe('Feature42Component16Component', () => {
  let component: Feature42Component16Component;
  let fixture: ComponentFixture<Feature42Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
