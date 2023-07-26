import { Component } from '@angular/core';

@Component({
  selector: 'sph-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent {
  slides = [
    { img: "../../../../assets/services/Mixagem.jpg", title: "Mixagem", description: "Processo de captação do áudio, seja ele analógico ou digital." },
    { img: "../../../../assets/services/Masterizacao.jpg", title: "Masterização", description: "Masterização é o passo final no processo de pós produção do áudio. O propósito da masterização é balancear os elementos em uma mix em estéreo e otimizar a reprodução em todo o tipo de sistema de som e formatos de mídia." },
    { img: "../../../../assets/services/Mixagem.jpg", title: "Mixagem", description: "Mixagem é o processo ou resultado que consiste em combinar vários canais de som, amplificados e/ou gravados separadamente." },
    { img: "../../../../assets/services/Ensaio_Fotografico.jpg", title: "Ensaio Fotográfico", description: "Ensaio Fotográfico é um tipo de serviço oferecido por estúdios de fotografia ou profissionais fotógrafos para capturar imagens de alta qualidade e criar uma série de fotografias temáticas ou estilizadas." },
    { img: "../../../../assets/services/Clipe.jpg", title: "Clipe", description: "Videoclipe é um processo emocionante e criativo que combina música, narrativa visual e elementos visuais para contar histórias cativantes e acompanhar uma música." },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
}
