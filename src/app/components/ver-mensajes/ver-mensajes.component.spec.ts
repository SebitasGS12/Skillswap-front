import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMensajesComponent } from './ver-mensajes.component';

describe('VerMensajesComponent', () => {
  let component: VerMensajesComponent;
  let fixture: ComponentFixture<VerMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerMensajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
