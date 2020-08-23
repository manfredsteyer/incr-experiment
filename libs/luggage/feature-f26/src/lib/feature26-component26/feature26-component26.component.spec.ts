import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component26Component } from './feature26-component26.component';

describe('Feature26Component26Component', () => {
  let component: Feature26Component26Component;
  let fixture: ComponentFixture<Feature26Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
