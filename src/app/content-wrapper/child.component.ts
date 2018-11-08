
import { Component } from '@angular/core';
 
@Component({
 
selector: 'child-component',
 
         styles : [`
 
                     .child {
 
                                 background : #aaa;
 
                                 padding: 10px;
 
                     }
 
         `],
 
template: `
 
                     <div class="child">
 
                                 <h2>{{name}}</h2>
 
                     </div>
 
         `
 
})
 
export class ChildComponent {
 
         name = "Child Component"
 
}