import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component25Component } from './feature47-component25.component';

describe('Feature47Component25Component', () => {
  let component: Feature47Component25Component;
  let fixture: ComponentFixture<Feature47Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
