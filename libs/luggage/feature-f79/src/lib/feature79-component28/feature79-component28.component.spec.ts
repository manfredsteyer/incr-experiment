import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component28Component } from './feature79-component28.component';

describe('Feature79Component28Component', () => {
  let component: Feature79Component28Component;
  let fixture: ComponentFixture<Feature79Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
