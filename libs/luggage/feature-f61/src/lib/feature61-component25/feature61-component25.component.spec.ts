import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component25Component } from './feature61-component25.component';

describe('Feature61Component25Component', () => {
  let component: Feature61Component25Component;
  let fixture: ComponentFixture<Feature61Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
