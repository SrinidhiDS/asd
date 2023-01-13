import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerracottaplatesComponent } from './terracottaplates.component';

describe('TerracottaplatesComponent', () => {
  let component: TerracottaplatesComponent;
  let fixture: ComponentFixture<TerracottaplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerracottaplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerracottaplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
