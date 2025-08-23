import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bowler } from './bowler';

describe('Bowler', () => {
  let component: Bowler;
  let fixture: ComponentFixture<Bowler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bowler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bowler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
