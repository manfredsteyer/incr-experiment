import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component4Component } from './feature27-component4.component';

describe('Feature27Component4Component', () => {
  let component: Feature27Component4Component;
  let fixture: ComponentFixture<Feature27Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
