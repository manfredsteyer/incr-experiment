import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component28Component } from './feature47-component28.component';

describe('Feature47Component28Component', () => {
  let component: Feature47Component28Component;
  let fixture: ComponentFixture<Feature47Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
