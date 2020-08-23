import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component4Component } from './feature23-component4.component';

describe('Feature23Component4Component', () => {
  let component: Feature23Component4Component;
  let fixture: ComponentFixture<Feature23Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
