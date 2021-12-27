import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component26Component } from './feature75-component26.component';

describe('Feature75Component26Component', () => {
  let component: Feature75Component26Component;
  let fixture: ComponentFixture<Feature75Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
