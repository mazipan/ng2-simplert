/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SimplertService {

  private _isShownSource = new BehaviorSubject<boolean>(false);
  private _titleSource = new BehaviorSubject<string>("");
  private _messageSource = new BehaviorSubject<string>("");

  isShown$ = this._isShownSource.asObservable();
  title$ = this._titleSource.asObservable();
  message$ = this._messageSource.asObservable();

  openPopupBlock(booleanParam: boolean, title: string, message: string){
    this._isShownSource.next(booleanParam);
    this._titleSource.next(title);
    this._messageSource.next(message);
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
}
