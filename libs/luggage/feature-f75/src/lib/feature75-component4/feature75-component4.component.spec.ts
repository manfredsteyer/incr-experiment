import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component4Component } from './feature75-component4.component';

describe('Feature75Component4Component', () => {
  let component: Feature75Component4Component;
  let fixture: ComponentFixture<Feature75Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
