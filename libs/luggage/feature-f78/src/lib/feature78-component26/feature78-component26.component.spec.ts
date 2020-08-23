import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component26Component } from './feature78-component26.component';

describe('Feature78Component26Component', () => {
  let component: Feature78Component26Component;
  let fixture: ComponentFixture<Feature78Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
