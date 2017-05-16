import { Component } from '@angular/core';
declare let jguery: any;
declare let $: any;

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  public title: string = 'Task App!';
  public closed: boolean = false;
  public links: any = ['link', 'link 2', 'link 3', 'link 4', 'link 5'];

  displayNav() {
    let hamburger: any = $('#hamb');
    let sidebar: any = $('#sidebar-wrapper');
    let overlay: any = $('.overlay');

    if (this.closed === true) {
      overlay.css('display', 'none');
      hamburger.removeClass('is-open');
      hamburger.addClass('is-closed');
      this.closed = false;
    } else {
      overlay.css('display', 'block');
      hamburger.removeClass('is-closed');
      hamburger.addClass('is-open');
      this.closed = true;
    }

    $('#wrapper').toggleClass('toggled');

  }
}
