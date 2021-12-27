import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component26Component } from './feature97-component26.component';

describe('Feature97Component26Component', () => {
  let component: Feature97Component26Component;
  let fixture: ComponentFixture<Feature97Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
