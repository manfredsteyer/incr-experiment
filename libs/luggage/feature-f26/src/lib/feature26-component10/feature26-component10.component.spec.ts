import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component10Component } from './feature26-component10.component';

describe('Feature26Component10Component', () => {
  let component: Feature26Component10Component;
  let fixture: ComponentFixture<Feature26Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
