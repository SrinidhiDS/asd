import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerracottapotsComponent } from './terracottapots.component';

describe('TerracottapotsComponent', () => {
  let component: TerracottapotsComponent;
  let fixture: ComponentFixture<TerracottapotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerracottapotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerracottapotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
