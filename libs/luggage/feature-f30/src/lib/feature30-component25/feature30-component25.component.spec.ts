import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component25Component } from './feature30-component25.component';

describe('Feature30Component25Component', () => {
  let component: Feature30Component25Component;
  let fixture: ComponentFixture<Feature30Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
