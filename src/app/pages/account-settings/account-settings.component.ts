import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any){
    //console.log(link);
    this.AplicarCheck(link);
    this._ajustes.aplicarTema(tema);

    
  }

  AplicarCheck(link: any){
    let selector: any = document.getElementsByClassName('selector');
    for(let ref of selector ){
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }

  colocarCheck(){
    let selector: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for(let ref of selector){
      if(ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working');
        break;
      }
    }
  }
}
