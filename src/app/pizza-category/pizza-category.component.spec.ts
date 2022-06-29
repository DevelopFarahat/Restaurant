import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCategoryComponent } from './pizza-category.component';

describe('PizzaCategoryComponent', () => {
  let component: PizzaCategoryComponent;
  let fixture: ComponentFixture<PizzaCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
