import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component26Component } from './feature5-component26.component';

describe('Feature5Component26Component', () => {
  let component: Feature5Component26Component;
  let fixture: ComponentFixture<Feature5Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});