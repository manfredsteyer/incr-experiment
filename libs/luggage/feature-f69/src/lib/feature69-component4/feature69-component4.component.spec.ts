import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component4Component } from './feature69-component4.component';

describe('Feature69Component4Component', () => {
  let component: Feature69Component4Component;
  let fixture: ComponentFixture<Feature69Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
