import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCategoriasForoComponent } from './listado-categorias-foro.component';

describe('ListadoCategoriasForoComponent', () => {
  let component: ListadoCategoriasForoComponent;
  let fixture: ComponentFixture<ListadoCategoriasForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoCategoriasForoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCategoriasForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
