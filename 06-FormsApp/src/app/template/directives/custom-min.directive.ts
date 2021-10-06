import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CostumMinDirective,
        multi: true,
    }]
})
export class CostumMinDirective implements Validator{

    @Input() min!:number;
    
    constructor() {
    }

    validate( control: FormControl ){
        const inputValue = control.value;

        console.log(inputValue);
    }
    
}