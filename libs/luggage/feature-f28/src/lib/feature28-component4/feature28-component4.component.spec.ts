import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component4Component } from './feature28-component4.component';

describe('Feature28Component4Component', () => {
  let component: Feature28Component4Component;
  let fixture: ComponentFixture<Feature28Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
