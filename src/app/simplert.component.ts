import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SimplertService } from './simplert.component.service';

@Component({
  selector: 'SimplertComponent',
  templateUrl: 'simplert.component.html',
  styleUrls: ['simplert.component.scss']
})

export class SimplertComponent implements OnInit, OnDestroy{

  @Input() isUseRadius: boolean = false;

  isShown: boolean;
  title: string;
  message: string;
  subscriptionShown: Subscription;
  subscriptionTitle: Subscription;
  subscriptionMessage: Subscription;

  constructor(private _simplertService:SimplertService){}

  ngOnInit(){
    this.subscriptionShown = this._simplertService.isShown$.subscribe(res => this.isShown = res);
    this.subscriptionTitle = this._simplertService.title$.subscribe(res => this.title = res);
    this.subscriptionMessage = this._simplertService.message$.subscribe(res => this.message = res);
  }

  ngOnDestroy(){
    this.subscriptionShown.unsubscribe();
    this.subscriptionTitle.unsubscribe();
    this.subscriptionMessage.unsubscribe();
  }

  closePopup(){
    this._simplertService.changeShown(false);
  }

  overlayClick(event){
    if(event.target.className === 'simplert simplert--shown'){
      this._simplertService.changeShown(false);
    }
  }

}
