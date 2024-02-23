import { Component, HostListener, OnInit } from '@angular/core';
import { ArtistCard } from 'src/app/models/ArtistCard';

@Component({
  selector: 'sph-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  cards: ArtistCard[] = [
    {
      name: 'P.Muniz',
      description:
        'Pedro Antônio Menezes Muniz (São Paulo, 10 de março de 1997), conhecido também como P. Muniz, é um produtor e compositor. Nascido e criado na zona sul de São Paulo (Pq. São José), desde pequeno, fascinado por música, sempre sonhou em ser baterista e DJ. Aos 5 anos, ganhou sua primeira bateria através de uma doação de uma igreja do bairro. Começou a discotecar no ano de 2009, influenciado por seu tio, que era DJ. Em 2015, deu início à sua carreira como produtor musical, fundando no dia 1º de abril de 2015 a Sphinx Studio, que inicialmente era apenas um pequeno estúdio na casa de sua tia. Hoje, tornou-se uma gravadora com três artistas em seu catálogo e mais de 20 artistas já produzidos.',
      cover: {
        name: 'PMuniz',
        ext: '.jpg',
      },
    },
    {
      name: 'Kaique Araujo',
      description:
        'Kaique Araújo Santos (São Paulo, 30 de setembro de 1995), conhecido também como Araujokiq, é um produtor audiovisual. Nascido e criado na zona sul de São Paulo (Jd. São Bernardo), é apaixonado e dedicado no campo do audiovisual, com um talento inato para contar histórias através de imagens e sons. Com uma visão criativa e uma abordagem própria, sua experiência abrange uma variedade de funções, desde a produção e direção até a edição e pós-produção, permitindo-lhe ter uma compreensão profunda de todo o processo de criação audiovisual. Com um portfólio diversificado, continua a deixar sua identidade em cada trabalho no mundo do audiovisual.',
      cover: {
        name: 'Kaique',
        ext: '.jpg',
      },
    },
  ];

  coverSize: '' | '-sm' = '';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getCoverSizeByResolution(event.target.innerWidth);
  }

  ngOnInit(): void {
    this.getCoverSizeByResolution(window.innerWidth);
  }

  private getCoverSizeByResolution(innerWidth: number): void {
    if (innerWidth >= 768) {
      this.coverSize = '';
      return;
    }

    this.coverSize = '-sm';
  }
}
