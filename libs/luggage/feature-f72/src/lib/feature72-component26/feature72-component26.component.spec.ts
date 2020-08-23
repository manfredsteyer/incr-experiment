import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component26Component } from './feature72-component26.component';

describe('Feature72Component26Component', () => {
  let component: Feature72Component26Component;
  let fixture: ComponentFixture<Feature72Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
