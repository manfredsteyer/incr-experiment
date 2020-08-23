import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component4Component } from './feature5-component4.component';

describe('Feature5Component4Component', () => {
  let component: Feature5Component4Component;
  let fixture: ComponentFixture<Feature5Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
