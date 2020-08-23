import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component4Component } from './feature49-component4.component';

describe('Feature49Component4Component', () => {
  let component: Feature49Component4Component;
  let fixture: ComponentFixture<Feature49Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
