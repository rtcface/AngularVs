import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  
  validProduct(): boolean{
    return this.myForm?.controls.nameProduct?.invalid 
    && this.myForm?.controls.nameProduct?.touched;
  }

  validPrice(): boolean{
    return this.myForm?.controls.priceProduct?.value <= 0 
    && this.myForm?.controls.priceProduct?.touched;
  }



  constructor() { }

  ngOnInit(): void {
  }


  //save( myform: NgForm){
  save(){
    console.log(this.myForm.value);
  }
}
