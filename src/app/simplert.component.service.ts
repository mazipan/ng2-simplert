/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SimplertService {

  private readonly DEFAULT_BTN_COLOR: string = "#068AC9";
  private _isShownSource = new BehaviorSubject<boolean>(false);
  private _titleSource = new BehaviorSubject<string>("");
  private _messageSource = new BehaviorSubject<string>("");
  /*
  * type enum : info, warning, error
  * */
  private _typeSource = new BehaviorSubject<string>("");
  private _colorBtnSource = new BehaviorSubject<string>("#068AC9");


  isShown$ = this._isShownSource.asObservable();
  title$ = this._titleSource.asObservable();
  message$ = this._messageSource.asObservable();
  type$ = this._typeSource.asObservable();
  colorBtn$ = this._colorBtnSource.asObservable();

  openPopupBlock(title: string, message: string){
    this._isShownSource.next(true);
    this._titleSource.next(title);
    this._messageSource.next(message);
    this._colorBtnSource.next(this.DEFAULT_BTN_COLOR);
  }

  openPopupBlockWithType(title: string, message: string, type: string){
    this._isShownSource.next(true);
    this._titleSource.next(title);
    this._messageSource.next(message);
    this._typeSource.next(type);
  }

  changeShown(booleanParam: boolean){
    this._isShownSource.next(booleanParam);
  }

  setTitle(title: string){
    this._titleSource.next(title);
  }

  setMessage(message: string){
    this._messageSource.next(message);
  }

  setType(type: string){
    this._typeSource.next(type);
  }

  setColorBtn(btnColor: string){
    this._colorBtnSource.next(btnColor);
  }
}
