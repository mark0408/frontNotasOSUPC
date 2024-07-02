import { Component, OnInit } from '@angular/core';
import { nota } from '../model/nota';
import { notaService } from '../service/nota.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nota-list',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './nota-list.component.html',
  styleUrl: './nota-list.component.css'
})
export class notaListComponent implements OnInit {

  notas : nota[]

  constructor(private notaService: notaService){}; //Inyectando el servicio

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("Reload Data!!!")
    this.notaService.getnotaList().subscribe(notas => this.notas = notas);
  }

}
