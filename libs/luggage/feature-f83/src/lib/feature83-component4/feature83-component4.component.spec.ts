import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component4Component } from './feature83-component4.component';

describe('Feature83Component4Component', () => {
  let component: Feature83Component4Component;
  let fixture: ComponentFixture<Feature83Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
