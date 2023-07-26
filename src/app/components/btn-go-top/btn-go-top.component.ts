import { Component } from '@angular/core';

@Component({
  selector: 'sph-btn-go-top',
  templateUrl: './btn-go-top.component.html',
  styleUrls: ['./btn-go-top.component.scss']
})
export class BtnGoTopComponent {
  goToTop() {
    document.querySelector(`#home`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log("dsads")
  }
}
