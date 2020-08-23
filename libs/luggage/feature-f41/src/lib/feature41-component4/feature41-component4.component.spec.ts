import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component4Component } from './feature41-component4.component';

describe('Feature41Component4Component', () => {
  let component: Feature41Component4Component;
  let fixture: ComponentFixture<Feature41Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
