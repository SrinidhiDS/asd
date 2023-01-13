import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerracottajewelleryComponent } from './terracottajewellery.component';

describe('TerracottajewelleryComponent', () => {
  let component: TerracottajewelleryComponent;
  let fixture: ComponentFixture<TerracottajewelleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerracottajewelleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerracottajewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
