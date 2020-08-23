import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component26Component } from './feature92-component26.component';

describe('Feature92Component26Component', () => {
  let component: Feature92Component26Component;
  let fixture: ComponentFixture<Feature92Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
