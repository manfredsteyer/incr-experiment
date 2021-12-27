import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component26Component } from './feature66-component26.component';

describe('Feature66Component26Component', () => {
  let component: Feature66Component26Component;
  let fixture: ComponentFixture<Feature66Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
