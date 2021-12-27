import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component3Component } from './feature26-component3.component';

describe('Feature26Component3Component', () => {
  let component: Feature26Component3Component;
  let fixture: ComponentFixture<Feature26Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
