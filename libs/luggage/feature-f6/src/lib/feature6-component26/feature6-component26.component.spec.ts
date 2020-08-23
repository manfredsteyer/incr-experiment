import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component26Component } from './feature6-component26.component';

describe('Feature6Component26Component', () => {
  let component: Feature6Component26Component;
  let fixture: ComponentFixture<Feature6Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
