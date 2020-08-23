import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component28Component } from './feature42-component28.component';

describe('Feature42Component28Component', () => {
  let component: Feature42Component28Component;
  let fixture: ComponentFixture<Feature42Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
