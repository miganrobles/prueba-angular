import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay, timeout, catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-test-loader',
  templateUrl: './test-loader.component.html',
  styleUrls: ['./test-loader.component.css']
})

export class TestLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profesionales: string[] = [];
  loaderVisible = false;
  errorMsg = '';

  cargarProfesionales() {
    this.loaderVisible = true;
    this.errorMsg = '';
    this.profesionales = [];

    // Simulamos un servicio lento (3s de delay)
    const fakeApi$ = of(['Juan', 'María', 'Pedro']).pipe(delay(2001));

    fakeApi$
      .pipe(
        timeout(2000), // si tarda más de 2s => error
        catchError(err => {
          this.errorMsg = 'El servicio tardó demasiado o falló.';
          return throwError(() => err);
        }),
        finalize(() => {
          // siempre se ejecuta
          this.loaderVisible = false;
        })
      )
      .subscribe({
        next: data => {
          this.profesionales = data;
        },
        error: err => {
          console.error('Error en API simulada:', err);
        }
      });
  }

}
