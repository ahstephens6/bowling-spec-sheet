import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchBox } from './pitch-box';

describe('PitchBox', () => {
  let component: PitchBox;
  let fixture: ComponentFixture<PitchBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitchBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitchBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
