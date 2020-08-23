import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component4Component } from './feature81-component4.component';

describe('Feature81Component4Component', () => {
  let component: Feature81Component4Component;
  let fixture: ComponentFixture<Feature81Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
