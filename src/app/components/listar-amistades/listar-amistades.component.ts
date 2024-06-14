import { Component, OnInit } from '@angular/core';
import { Amistades } from '../../models/amistades';
import { AmistadesService } from '../../service/amistadesService';

@Component({
  selector: 'app-listar-amistades',
  standalone: true,
  imports: [],
  templateUrl: './listar-amistades.component.html'
})
export class ListarAmistadesComponent implements OnInit{


  amistades:Amistades[] = [];
  constructor(private amistadesService: AmistadesService){}
  ngOnInit(): void {

    this.amistadesService.listar().subscribe(
      json => {
        this.amistades = json;
      }
    )

  }

}
