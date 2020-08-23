import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component4Component } from './feature79-component4.component';

describe('Feature79Component4Component', () => {
  let component: Feature79Component4Component;
  let fixture: ComponentFixture<Feature79Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
