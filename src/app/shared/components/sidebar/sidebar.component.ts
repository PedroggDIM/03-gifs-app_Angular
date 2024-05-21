import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',

})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}
 // como el servicio anterior es privado creo un getter
 // para usarlo fuera.
 get tags() {
  return this.gifsService.tagsHistory;
 }
// envio texto del botón al buscador
enviaTexto(tag: string) {
  this.gifsService.searchTag(tag);
  console.log(tag);
 }

}
