import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component26Component } from './feature41-component26.component';

describe('Feature41Component26Component', () => {
  let component: Feature41Component26Component;
  let fixture: ComponentFixture<Feature41Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
