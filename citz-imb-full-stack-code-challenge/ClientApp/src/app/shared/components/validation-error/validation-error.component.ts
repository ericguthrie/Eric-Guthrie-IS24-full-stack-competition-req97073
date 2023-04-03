//import { Component, Input } from '@angular/core'
//import { UntypedFormGroup } from '@angular/forms'

//@Component({
//    selector: 'app-validation-error',
//    templateUrl: './validation-error.component.html'
//})
//export class ValidationErrorComponent {
//    // properties

//    @Input() fieldName: string
//    @Input() formGroup: UntypedFormGroup
//    @Input() validatorName: string

//    // constructor

//    constructor() {
//    }

//    // event handlers

//    public ngOnInit() {
//    }

//    // business logic

//    public displayError() {
//        if (!this.formGroup) {
//            return false
//        }

//        let formField: UntypedFormGroup = this.formGroup.get(this.fieldName) as UntypedFormGroup

//        if (formField) {
//            if (formField.dirty && formField.hasError(this.validatorName)) {
//                return true
//            }
//        }

//        return false
//    }
//}
