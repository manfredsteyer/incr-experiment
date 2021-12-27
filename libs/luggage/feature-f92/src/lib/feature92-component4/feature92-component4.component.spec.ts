import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component4Component } from './feature92-component4.component';

describe('Feature92Component4Component', () => {
  let component: Feature92Component4Component;
  let fixture: ComponentFixture<Feature92Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
