import { Component, OnInit } from '@angular/core';
import { nota } from '../model/nota';
import { notaService } from '../service/nota.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-nota',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './create-nota.component.html',
  styleUrl: './create-nota.component.css'
})
export class CreatenotaComponent implements OnInit {

  nota: nota = new nota();
  
  constructor(private notaService: notaService, private router: Router){}

  ngOnInit(): void {
    
  }

  save(){
    console.log("Invocando al registro de un nota: " + this.nota);
    this.notaService.createnota(this.nota).subscribe(
      data => this.router.navigate(['/list'])
    );
    console.log("...continuamos con la navegación...");
  }

}
