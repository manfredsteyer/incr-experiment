import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component4Component } from './feature26-component4.component';

describe('Feature26Component4Component', () => {
  let component: Feature26Component4Component;
  let fixture: ComponentFixture<Feature26Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
