import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {
  input:string;
  inputs = [
    'input1',
    'input2',
    'asdsas'
  ];
  color:string;


  constructor() {
    this.color = Math.random() > 0.5 ? 'red' : 'green';
   }

  ngOnInit() {
  }

  onAddInput(input): void {
    this.color = Math.random() > 0.5 ? 'red' : 'green';
    this.inputs.push(input);
  }

}
