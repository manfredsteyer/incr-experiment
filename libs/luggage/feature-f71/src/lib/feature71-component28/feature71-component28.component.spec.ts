import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component28Component } from './feature71-component28.component';

describe('Feature71Component28Component', () => {
  let component: Feature71Component28Component;
  let fixture: ComponentFixture<Feature71Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
