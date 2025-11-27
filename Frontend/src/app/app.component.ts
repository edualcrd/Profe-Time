import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>{{ mensaje }}</h1>
  `,
  imports: [HttpClientModule]
})
export class AppComponent implements OnInit {
  mensaje = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/saludo')
      .subscribe(res => this.mensaje = res.mensaje);
  }
}
