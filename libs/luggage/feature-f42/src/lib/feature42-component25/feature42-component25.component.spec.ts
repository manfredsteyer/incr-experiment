import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component25Component } from './feature42-component25.component';

describe('Feature42Component25Component', () => {
  let component: Feature42Component25Component;
  let fixture: ComponentFixture<Feature42Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
