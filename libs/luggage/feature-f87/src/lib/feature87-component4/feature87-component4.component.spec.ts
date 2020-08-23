import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component4Component } from './feature87-component4.component';

describe('Feature87Component4Component', () => {
  let component: Feature87Component4Component;
  let fixture: ComponentFixture<Feature87Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
