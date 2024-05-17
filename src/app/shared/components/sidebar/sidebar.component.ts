import { Component } from '@angular/core';
import { GjfsService } from '../../../gifs/services/gifs.service.ts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',

})
export class SidebarComponent {

  constructor(private gifsService: GjfsService) {}
 // como el servicio anterior es privado creo un getter
 // para usarlo fuera.
 get tags() {
  return this.gifsService.tagsHistory;
 }
}
