import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component26Component } from './feature86-component26.component';

describe('Feature86Component26Component', () => {
  let component: Feature86Component26Component;
  let fixture: ComponentFixture<Feature86Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
