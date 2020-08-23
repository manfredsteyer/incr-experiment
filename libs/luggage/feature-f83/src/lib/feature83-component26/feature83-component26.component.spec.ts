import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component26Component } from './feature83-component26.component';

describe('Feature83Component26Component', () => {
  let component: Feature83Component26Component;
  let fixture: ComponentFixture<Feature83Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
