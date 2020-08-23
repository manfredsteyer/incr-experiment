import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component5Component } from './feature66-component5.component';

describe('Feature66Component5Component', () => {
  let component: Feature66Component5Component;
  let fixture: ComponentFixture<Feature66Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
