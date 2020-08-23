import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component29Component } from './feature87-component29.component';

describe('Feature87Component29Component', () => {
  let component: Feature87Component29Component;
  let fixture: ComponentFixture<Feature87Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
