import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component26Component } from './feature48-component26.component';

describe('Feature48Component26Component', () => {
  let component: Feature48Component26Component;
  let fixture: ComponentFixture<Feature48Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
