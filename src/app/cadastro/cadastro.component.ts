import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
  ],
})
export class AppModule { }

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  parcelas!: number;
  valor: number = 0;
  resultado!: string;

  constructor(private http: HttpClient) {}

  salvar(valor: number): void {
    const data = {
      parcelas: this.parcelas,
      valor: this.valor,
      salvar: this.salvar
    };

    this.http.post<any>('api/calcular', data).subscribe(response => {
      this.resultado = response.resultado;
    });
  }
}
