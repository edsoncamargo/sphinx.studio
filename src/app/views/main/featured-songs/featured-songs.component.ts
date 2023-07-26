import { Component, OnInit } from '@angular/core';
import { SongCard } from 'src/app/models/SongCard';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'sph-featured-songs',
  templateUrl: './featured-songs.component.html',
  styleUrls: ['./featured-songs.component.scss']
})
export class FeaturedSongsComponent implements OnInit {
  cards: SongCard[] = [
    {
      cover: "first.png",
      song: "Balaclava",
      name: "Ryssa",
      timer: "3:52",
      link: "https://onerpm.link/343154380755",
      letters: [
        "E ele, quer me ver descer, quer me ver dançar",
        "Mas eu desço te olhando e vou te excitando,",
        "Com a mão no joelho, de 4 eu empino minha bunda"
      ],
      flag: "red"
    },
    {
      cover: "second.png",
      song: "Money Rain",
      name: "MC Neguin ZS",
      timer: "3:36",
      link: "https://onerpm.link/364086200022",
      letters: [
        "Oi, tudo bem? Eu tô bem, como você tá, bê?",
        "Fazendo money rain, em uma audi tt",
        "E as estrelas do céu, tá no pulso sheik"
      ],
      flag: "white"
    },
    {
      cover: "third.png",
      song: "2 Lados",
      name: "P. Muniz",
      timer: "3:36",
      link: "https://onerpm.link/550805396677",
      letters: [
        "Eu meto marcha, hã... Tô nem vendo",
        "Querem ver meu mal",
        "Que bebam do próprio veneno"
      ],
      flag: "yellow"
    },
  ];

  ngOnInit(): void {
    register();


  }
}
