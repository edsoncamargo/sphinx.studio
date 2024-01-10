import { Component, HostListener, OnInit } from '@angular/core';
import { ArtistCard } from 'src/app/models/ArtistCard';

@Component({
  selector: 'sph-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  cards: ArtistCard[] = [
    {
      name: "P.Muniz",
      description: "Pedro Antonio Menezes Muniz (São paulo 10 de Março de 1997) conhecido também como P.Muniz, um Produtor e Compositor. Nascido e criado na zona sul de São paulo (Pq. São José). Desde pequeno, facinado por musica, sempre sonhou em ser baterista e DJ. Aos 05 anos ganhou sua primeira bateria vinda de uma doação de uma igreja do bairro, começou a discotecar no ano de 2009, por influencia de seu tio que era DJ, no ano de 2015 deu inicio a sua carreira como produtor musical, assim fundando no dia 1 de Abril de 2015 a Sphinx Studio, que no inicio era apenas um pequeno estudio na casa de sua tia. E hoje se tornou uma gravadora com três artistas em seu catalogo, e mais de 20 artistas já produzidos.",
      cover: {
        name: "PMuniz",
        ext: ".jpg"
      }
    },
  ];

  coverSize: "" | "-sm" = "";

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getCoverSizeByResolution(event.target.innerWidth);
  }

  ngOnInit(): void {
    this.getCoverSizeByResolution(window.innerWidth);
  }

  private getCoverSizeByResolution(innerWidth: number): void {
    if (innerWidth >= 768) {
      this.coverSize = "";
      return;
    }

    this.coverSize = "-sm";
  }
}
