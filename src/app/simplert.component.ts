import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SimplertService } from './simplert.component.service';

@Component({
  selector: 'SimplertComponent',
  templateUrl: 'simplert.component.html',
  styleUrls: ['simplert.component.scss']
})

export class SimplertComponent implements OnInit, OnDestroy{

  // api exposed
  @Input() isUseRadius: boolean = false;
  @Input() isUseIcon  : boolean = false;

  // internal variable
  isShown : boolean;
  title   : string = "";
  message : string;
  type    : string = "";
  colorBtn: string = "#068AC9";

  // subscriber to service
  subscriptionShown   : Subscription;
  subscriptionTitle   : Subscription;
  subscriptionMessage : Subscription;
  subscriptionType    : Subscription;
  subscriptionColorBtn: Subscription;

  constructor(private _simplertService:SimplertService){}

  ngOnInit(){
    this.subscriptionShown    = this._simplertService.isShown$.subscribe(res => this.isShown = res);
    this.subscriptionTitle    = this._simplertService.title$.subscribe(res => this.title = res);
    this.subscriptionMessage  = this._simplertService.message$.subscribe(res => this.message = res);
    this.subscriptionType     = this._simplertService.type$.subscribe(res => this.type = res);
    this.subscriptionColorBtn = this._simplertService.colorBtn$.subscribe(res => this.colorBtn = res);
  }

  ngOnDestroy(){
    this.subscriptionShown.unsubscribe();
    this.subscriptionTitle.unsubscribe();
    this.subscriptionMessage.unsubscribe();
    this.subscriptionType.unsubscribe();
    this.subscriptionColorBtn.unsubscribe();
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
