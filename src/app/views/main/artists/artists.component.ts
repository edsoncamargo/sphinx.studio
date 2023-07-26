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
    {
      name: "MC Neguin ZS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin neque quis augue tempor bibendum. Ut turpis lacus, rutrum quis magna ut, vulputate mollis nibh. Praesent quis accumsan tortor. Aenean non pharetra magna. In ultricies risus vel ex tincidunt, ac fringilla urna iaculis. Proin lorem quam, blandit nec metus nec, pharetra blandit arcu. In nec sem a urna finibus pretium. Praesent dictum mauris nec consectetur bibendum. Sed tincidunt sem ut ipsum cursus, quis tincidunt ante feugiat.",
      cover: {
        name: "MCNeguinZS",
        ext: ".jpg"
      }
    },
    {
      name: "Ryssa",
      description: "Larissa Rafaela Ferreira Figueiredo (São paulo 28 de agosto de 2004) conhecida também como Ryssa, (Seu nome artístico foi dado por um amigo muito proximo), uma cantora e compositora. Nascida e criada na zona sul de São paulo (Jd.icarai). No ano de 2013 entrou para o mundo da musica tendo a sua primeira composição inspirada em alguns mc's da época. Ryssa ainda criança observava as letras e o estilo de vida que todos aqueles artistas e se interessou por seu estilo de vida. no ano de 2015 a 2016 Ryssa começou a participar de batalhas de rima na escola oque aumento ainda mais seu gosto pela arte. No início do ano de 2023 a cantora entrou para a gravadora Sphinx Studio a qual pertence até hoje.",
      cover: {
        name: "Ryssa",
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
