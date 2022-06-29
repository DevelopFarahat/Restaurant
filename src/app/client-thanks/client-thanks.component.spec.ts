import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientThanksComponent } from './client-thanks.component';

describe('ClientThanksComponent', () => {
  let component: ClientThanksComponent;
  let fixture: ComponentFixture<ClientThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientThanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
