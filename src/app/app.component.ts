import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyDebugger';

   printName(firstName: string, lastName: string): string {
    console.log(`${firstName} ${lastName}`);
    return `${firstName} ${lastName}`;
  }
  
   printNTimes(n: number, value: string): void {
    for (let i = 0; i < n; i++) {
      console.log(value);
    }
  }
  
 
  
  // Providing example arguments for function calls to avoid errors

  ngOnInit(){
    this.printNTimes(32,"Hello")
    this.printName('Sahen','Liyanage')  

  }
}
