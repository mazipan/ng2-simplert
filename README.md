# ng2-simplert
Angular 2 Simple Alert Component

## Demo
https://mazipan.github.io/ng2-simplert/

## Download
```
npm install ng2-simplert --save
-- OR --
yarn add ng2-simplert
```
Or download latest release here : https://github.com/mazipan/ng2-simplert/releases

## Module Declaration
```typescript
....
import { SimplertComponent } from './simplert.component';
import { SimplertService } from './simplert.component.service';
...
@NgModule({
  declarations: [
    ...
    SimplertComponent
  ],
  imports: [
    ...
  ],
  providers: [
    SimplertService
  ]
})
```
See here : https://github.com/mazipan/ng2-simplert/blob/master/src/app/app.module.ts

## Usage in component
```typescript
....
import { SimplertService } from './simplert.component.service';
...
@Component({
  selector: 'app-root',
  template: `
    <button class="open--info" (click)="showPopup('Information!', 'Hey, I am Opened...')">Open Information Alert</button>
    <SimplertComponent [isUseRadius]="true"></SimplertComponent>
  `
})
export class AppComponent {

  constructor(private _simplertService: SimplertService){}

  showPopup(title: string, message: string){
    this._simplertService.openPopupBlock(true, title, message);
  }
}
```
See here : https://github.com/mazipan/ng2-simplert/blob/master/src/app/app.component.ts


## License
MIT License


Hope will usefull for you all.
Question ? please email : mazipanneh@gmail.com
