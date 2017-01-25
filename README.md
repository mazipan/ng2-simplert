# ng2-simplert
Angular 2 Simple Alert Component

## Import Module
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

## Sample usage in component
```typescript
....
import { SimplertService } from './simplert.component.service';
...
@Component({
  selector: 'app-root',
  template: `
    <button class="open--info" (click)="showPopup('Information!', 'Hey, I am Opened...')">Open Information Alert</button>
    <SimplertComponent isUseRadius="true"></SimplertComponent>
  `
})
export class AppComponent {

  constructor(private _simplertService: SimplertService){}

  showPopup(title: string, message: string){
    this._simplertService.openPopupBlock(true, title, message);
  }
}
```
