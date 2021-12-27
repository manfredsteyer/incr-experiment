import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component26Component } from './feature27-component26.component';

describe('Feature27Component26Component', () => {
  let component: Feature27Component26Component;
  let fixture: ComponentFixture<Feature27Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
