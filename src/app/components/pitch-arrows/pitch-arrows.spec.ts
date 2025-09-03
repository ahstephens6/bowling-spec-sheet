import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchArrows } from './pitch-arrows';

describe('PitchArrows', () => {
  let component: PitchArrows;
  let fixture: ComponentFixture<PitchArrows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitchArrows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitchArrows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
