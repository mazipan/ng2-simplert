import { Component } from '@angular/core';
import { SimplertService } from './simplert.component.service';

@Component({
  selector: 'app-root',
  styles: [`
    .demo__btn{
      padding: 10px 20px;
      outline: none;
      border: none;
      text-align: center;
      cursor: pointer;
      color: #fff;
      background-color: #068AC9;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  `],
  template: `
    <h1>Ng2-Simplert</h1>
    <h5>By Irfan Maulana</h5>
    <div>    
      <button class="demo__btn open--info" (click)="showPopup('Information!', 'Hey, I am Opened...', 'info')">Open Information Alert</button>
      <button class="demo__btn open--info" (click)="showPopup('Success!', 'Hey, I am Opened...', 'success')">Open Success Alert</button>
      <button class="demo__btn open--error" (click)="showPopup('Error!', 'Hey, I am Opened...', 'error')">Open Error Alert</button>
      <button class="demo__btn open--warning" (click)="showPopup('Warning!', 'Hey, I am Opened...', 'warning')">Open Warning Alert</button> 
      <button class="demo__btn open--nontitle" (click)="showPopup('', 'Hey, I am Opened, but I dont have title', '')">Open Alert Without Title</button>   
      <button class="demo__btn open--customcolor" (click)="showPopup('Custom Button', 'Hey, I am Opened...', '');modifyColor('#FF0315')">Open Alert With Custom Button</button> 
    </div>
    <br/>
    <a href="https://github.com/mazipan/ng2-simplert" target="_blank" style="color: #068AC9; text-decoration: none;">Fork on Github</a>
    <SimplertComponent [isUseRadius]="true" [isUseIcon]="true"></SimplertComponent>
  `
})
export class AppComponent {

  constructor(private _simplertService: SimplertService){}

  showPopup(title: string, message: string, type: string){
    this._simplertService.openPopupBlockWithType(title, message, type);
  }

  modifyColor(hexColor: string){
    this._simplertService.setColorBtn(hexColor);
  }
}
