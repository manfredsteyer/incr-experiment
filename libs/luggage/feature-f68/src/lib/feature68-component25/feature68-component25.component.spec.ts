import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component25Component } from './feature68-component25.component';

describe('Feature68Component25Component', () => {
  let component: Feature68Component25Component;
  let fixture: ComponentFixture<Feature68Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
