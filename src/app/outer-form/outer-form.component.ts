import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-outer-form',
    templateUrl: './outer-form.component.html',
    styleUrls: ['./outer-form.component.scss']
})
export class OuterFormComponent implements OnInit {

    public outerForm: FormGroup;
    public increment: number = 3

    constructor() {
        this.outerForm = new FormGroup({
            quantity: new FormControl<number>(0, [Validators.required, Validators.max(50)]),
            increment: new FormControl<number>(this.increment, [Validators.required, Validators.min(1)])
        });
    }

    ngOnInit(): void {
        this.outerForm.patchValue({quantity: 0})
        this.outerForm.controls["increment"].valueChanges.subscribe((increment: number) => {
            this.increment = increment;
        })
    }

}
