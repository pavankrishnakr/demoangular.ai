import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

// @Component({
//   selector: 'app-user',
//   template: `
//     <p>The user's name is {{ name }}</p>
//   `,
//   standalone: true,
// })
// export class UserComponent {
//   @Input() name = 'Pavan Kalyan';
// }

 
@Component({
  selector: 'app-user',
  template: `
    <div>Username: {{ username }}</div>
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
}


// @Component({
//   standalone: true,
//   selector: 'app-user',
//   template: `
//     <p>Username: {{ username }}</p>
//     <p>Preferred Framework:</p>
//     <ul>
//       <li>
//         Static Image:
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPoepD6yFo5_2kiq1ZBhqqQamE5yeYEXA8TQ&s" alt="Angular logo" />
//       </li>
//       <li>
//         Dynamic Image:
//         <img [src]="logoUrl" [alt]="logoAlt" />
//       </li>
//     </ul>
//   `,
//   imports: [],
// })
// export class UserComponent {
//   logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdOQ9eZDUXE5GemPhtNxlc9beXqVxYKi2lTLx3-vPYViQ22NUIBDTtI1gR93pNfmvyYM&usqp=CAU';
//   logoAlt = 'Angular logo';
//   username = 'youngTech';
// }