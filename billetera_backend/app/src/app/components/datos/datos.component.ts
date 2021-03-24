import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../../services/provincia.service';
import { Provincia } from '../../models/provincia.model';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {


  public provincias: Provincia[];
  selectedPersona: Provincia = new Provincia();


  constructor(private provinciaService: ProvinciaService) { }

  ngOnInit(): void {

    this.provinciaService.getProvincias().subscribe(resp => {

      this.selectedPersona = resp;
      console.log(this.selectedPersona.provincias);
    });
  }

}
