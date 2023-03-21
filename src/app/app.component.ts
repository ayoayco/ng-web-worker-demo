import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Awesome Heroes';
  heroes = [
    { id: 12, name: 'Dr. Nice' },
    { id: 15, name: 'Magneta' },
    { id: 13, name: 'Bombasto' },
    { id: 17, name: 'Dynama' },
    { id: 16, name: 'RubberMan' },
    { id: 14, name: 'Celeritas' },
    { id: 19, name: 'Magma' },
    { id: 18, name: 'Dr. IQ' },
    { id: 20, name: 'Tornado' },
  ];

  sortHeroes(flag: string) {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.heroes = data;
      };

      worker.postMessage({ heroes: this.heroes, flag });
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
