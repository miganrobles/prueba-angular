import { Component, inject } from '@angular/core';
import { WeatherForecastService } from './weather-forecast.service';
import { of } from 'rxjs';
import { timeout, catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-de-angular';
  errorMsg = '';
  loaderVisible = false;

  climas: any[] = [];
   // 👇 aquí va la inyección clásica de Angular 6
  constructor(private weatherForecastsService: WeatherForecastService) { 
    this.loaderVisible = true;
    this.weatherForecastsService.obtenerClima()
    .pipe(
        timeout(111), // si tarda más de 2s => error
        catchError(err => {
          this.errorMsg = 'El servicio tardó demasiado o falló.';
          console.error('Error en API simulada:', err);
          // Retorna un observable vacío para que 'next' reciba algo seguro
          return of([]);
        }),
        finalize(() => {
          // siempre se ejecuta
          this.loaderVisible = false;
        })
      )
    .subscribe(data => {
      this.climas = data;
    })
    ;
  }
}
