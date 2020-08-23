import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component26Component } from './feature49-component26.component';

describe('Feature49Component26Component', () => {
  let component: Feature49Component26Component;
  let fixture: ComponentFixture<Feature49Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
