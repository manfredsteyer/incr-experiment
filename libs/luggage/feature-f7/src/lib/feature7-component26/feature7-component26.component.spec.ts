import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component26Component } from './feature7-component26.component';

describe('Feature7Component26Component', () => {
  let component: Feature7Component26Component;
  let fixture: ComponentFixture<Feature7Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
