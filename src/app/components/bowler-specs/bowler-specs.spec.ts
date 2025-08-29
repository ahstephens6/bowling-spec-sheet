import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlerSpecs } from './bowler-specs';

describe('BowlerSpecs', () => {
  let component: BowlerSpecs;
  let fixture: ComponentFixture<BowlerSpecs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BowlerSpecs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlerSpecs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
