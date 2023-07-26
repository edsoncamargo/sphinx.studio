import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sph-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild("nav", { static: false }) nav: ElementRef | null = null;
  @ViewChild("burguer", { static: false }) burguer: ElementRef | null = null;

  toggle() {
    let searchTypesFunctions: any = {
      true: () => this.close(),
      false: () => this.open(),
    }

    searchTypesFunctions[this.nav?.nativeElement.classList.contains('sph-header__navigation__opened')]();
  }

  private close() {
    this.burguer?.nativeElement.classList.remove("sph-header__burguer__opened");
    this.nav?.nativeElement.classList.add("sph-header__navigation__closing");

    setTimeout(() => {
      this.nav?.nativeElement.classList.remove("sph-header__navigation__closing");
      this.nav?.nativeElement.classList.remove("sph-header__navigation__opened");
      document.querySelector("body")!.style.overflow = "auto";
    }, 200);
  }

  private open() {
    this.nav?.nativeElement.classList.add("sph-header__navigation__opening");
    document.querySelector("body")!.style.overflow = "hidden";

    setTimeout(() => {
      this.nav?.nativeElement.classList.remove("sph-header__navigation__opening");
      this.burguer?.nativeElement.classList.add("sph-header__burguer__opened");
      this.nav?.nativeElement.classList.add("sph-header__navigation__opened");
    }, 200);
  }

  scrollIntoView(view: string) {
    document.querySelector(`#${view}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (window.innerWidth <= 768)
      this.toggle();
  }
}
