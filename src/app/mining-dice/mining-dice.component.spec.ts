import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningDiceComponent } from './mining-dice.component';

describe('MiningDiceComponent', () => {
  let component: MiningDiceComponent;
  let fixture: ComponentFixture<MiningDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
