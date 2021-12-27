import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component4Component } from './feature42-component4.component';

describe('Feature42Component4Component', () => {
  let component: Feature42Component4Component;
  let fixture: ComponentFixture<Feature42Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
