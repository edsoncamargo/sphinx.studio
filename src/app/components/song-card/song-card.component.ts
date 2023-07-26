import { Component, Input } from '@angular/core';
import { SongCard } from 'src/app/models/SongCard';

@Component({
  selector: 'sph-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {
  @Input() card: SongCard = {
    cover: "first.svg",
    song: "Abravanel",
    name: "Ryssa",
    timer: "3:36",
    link: "https://",
    letters: [
      "Ele brisou no meu porte, bebê",
      "Calma, que meu sobrenome não é Abravanel",
      "Mas dou tudo pra você"
    ],
    flag: "red"
  };

  redirectTo() {
    window.open(this.card.link, '_blank');
  }
}
