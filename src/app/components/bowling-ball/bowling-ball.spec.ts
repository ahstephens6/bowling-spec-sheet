import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingBall } from './bowling-ball';

describe('BowlingBall', () => {
  let component: BowlingBall;
  let fixture: ComponentFixture<BowlingBall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BowlingBall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlingBall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
