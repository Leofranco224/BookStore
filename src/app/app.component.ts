import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  count = 0;
  nome = ''
  pessoas = ['leo', 'teste', 'teste1'];
  variavel = 0;

  constructor() {

  }

  ngOnInit() {
    this.nome = 'leo';
    this.count = 5;
    this.variavel = 0;
    this.alteraVariavel();
  }

  alteraVariavel() {
    return this.variavel++;
  }
}
