import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBowler } from './add-bowler';

describe('AddBowler', () => {
  let component: AddBowler;
  let fixture: ComponentFixture<AddBowler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBowler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBowler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
