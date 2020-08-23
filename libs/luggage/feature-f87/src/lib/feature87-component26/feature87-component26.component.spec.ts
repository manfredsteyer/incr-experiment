import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component26Component } from './feature87-component26.component';

describe('Feature87Component26Component', () => {
  let component: Feature87Component26Component;
  let fixture: ComponentFixture<Feature87Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
