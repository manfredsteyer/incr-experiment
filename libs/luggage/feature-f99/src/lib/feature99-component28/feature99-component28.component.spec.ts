import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component28Component } from './feature99-component28.component';

describe('Feature99Component28Component', () => {
  let component: Feature99Component28Component;
  let fixture: ComponentFixture<Feature99Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
