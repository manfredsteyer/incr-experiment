import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component26Component } from './feature29-component26.component';

describe('Feature29Component26Component', () => {
  let component: Feature29Component26Component;
  let fixture: ComponentFixture<Feature29Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
