import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlerPage } from './bowler-page';

describe('BowlerPage', () => {
  let component: BowlerPage;
  let fixture: ComponentFixture<BowlerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BowlerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
