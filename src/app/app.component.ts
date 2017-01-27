import { Component } from '@angular/core';
import { SimplertService } from './simplert.component.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Ng2-Simplert</h1>
    <h5>By Irfan Maulana</h5>
    <div>    
      <button class="open--info" (click)="showPopup('Information!', 'Hey, I am Opened...')">Open Information Alert</button>
      <button class="open--error" (click)="showPopup('Error!', 'Hey, I am Opened...')">Open Error Alert</button>
      <button class="open--warning" (click)="showPopup('Warning!', 'Hey, I am Opened...')">Open Warning Alert</button> 
      <button class="open--nontitle" (click)="showPopup('', 'Hey, I am Opened, but I dont have title')">Open Alert Without Title</button>   
      <button class="open--nontitle" (click)="showPopup('Custom Button', 'Hey, I am Opened...');modifyColor('#FF0315')">Open Alert With Custom Button</button> 
    </div>
    <br/>
    <a href="https://github.com/mazipan/ng2-simplert" target="_blank" style="color: #068AC9; text-decoration: none;">Fork on Github</a>
    <SimplertComponent [isUseRadius]="true"></SimplertComponent>
  `
})
export class AppComponent {

  constructor(private _simplertService: SimplertService){}

  showPopup(title: string, message: string){
    this._simplertService.openPopupBlock(true, title, message);
  }

  modifyColor(hexColor: string){
    this._simplertService.setColorBtn(hexColor);
  }
}
