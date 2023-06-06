import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
})
export class AppModule { }


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  id!: number;
  nome!: string;

  onIdInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.id = Number.parseInt(inputValue, undefined);
  }

  constructor(private http: HttpClient) {}

  buscar() {
    this.http.get<any>(`api/consultar/${this.id}`).subscribe(response => {
      this.nome = response.nome;
    });
  }
}
