import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component26Component } from './feature37-component26.component';

describe('Feature37Component26Component', () => {
  let component: Feature37Component26Component;
  let fixture: ComponentFixture<Feature37Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
