import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component25Component } from './feature87-component25.component';

describe('Feature87Component25Component', () => {
  let component: Feature87Component25Component;
  let fixture: ComponentFixture<Feature87Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
