import {Component, Input} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator
} from "@angular/forms";

@Component({
    selector: 'app-custom-form-element',
    templateUrl: './custom-form-element.component.html',
    styleUrls: ['./custom-form-element.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi:true,
            useExisting: CustomFormElementComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: CustomFormElementComponent
        }
    ]
})
export class CustomFormElementComponent implements ControlValueAccessor, Validator {
    public disabled = false;
    public quantity = 0;

    @Input()
    public increment: number = 1;

    public onChange = (quantity: number) => {};

    public onTouched = () => {};

    public touched = false;

    constructor() {
    }

    onAdd() {
        this.markAsTouched();
        if (!this.disabled) {
            this.quantity+= this.increment;
            this.onChange(this.quantity);
        }
    }

    onRemove() {
        this.markAsTouched();
        if (!this.disabled) {
            this.quantity-= this.increment;
            this.onChange(this.quantity);
        }
    }

    registerOnChange(onChange: any): void {
        this.onChange = onChange;
    }

    registerOnTouched(onTouch: any): void {
        this.onTouched = onTouch;
    }

    writeValue(quantity: number): void {
        this.quantity = quantity
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled
    }

    registerOnValidatorChange(fn: () => void): void {
    }

    validate(control: AbstractControl): ValidationErrors | null {
        const quantity = control.value;
        if (quantity <= 0) {
            return {
                mustBePositive: {
                    quantity
                }
            };
        } else {
            return null;
        }
    }

}
