import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component25Component } from './feature66-component25.component';

describe('Feature66Component25Component', () => {
  let component: Feature66Component25Component;
  let fixture: ComponentFixture<Feature66Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});