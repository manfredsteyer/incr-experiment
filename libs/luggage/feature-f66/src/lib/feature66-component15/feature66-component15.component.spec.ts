import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component15Component } from './feature66-component15.component';

describe('Feature66Component15Component', () => {
  let component: Feature66Component15Component;
  let fixture: ComponentFixture<Feature66Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
