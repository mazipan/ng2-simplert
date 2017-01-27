# ng2-simplert
Angular 2 Simple Alert Component

![Ng2-Simplert](https://raw.githubusercontent.com/mazipan/ng2-simplert/master/screenshoot.PNG)

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
    this._simplertService.openPopupBlock(title, message);
  }
}
```
See here : https://github.com/mazipan/ng2-simplert/blob/master/src/app/app.component.ts

#Exposed Method
| Method Name        	        | Parameter             	| Description                                        	|
|---------------------------	|-----------------------	|---------------------------------------------------	|
| openPopupBlock            	| title: string         	| Title of alert (can be empty)                      	|
|                    	        | message: string  	      | Message of alert (can be HTML syntax)              	|
| openPopupBlockWithType     	| title: string         	| Title of alert (can be empty)                      	|
|                    	        | message: string  	      | Message of alert (can be HTML syntax)              	|
|                    	        | type: string  	        | info, warning, error (can be empty)                	|
| changeShown     	          | booleanParam: boolean  	| true : show, false : hide                          	|
| setTitle     	              | title: string  	        | Title of alert (can be empty)                      	|
| setMessage     	            | message: string  	      | Message of alert (can be HTML syntax)              	|
| setType     	              | type: string  	        | info, warning, error (can be empty)                	|
| setColorBtn     	          | btnColor: string      	| string hex color                                  	|

## License
MIT License


Hope will usefull for you all.
Question ? please email : mazipanneh@gmail.com
