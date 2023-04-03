//import { AbstractControl, FormControl } from '@angular/forms'

//export function RequiredPhoneNumberValidator(control: FormControl) {
//    // business logic

//    if (control.parent == null) {
//        return null
//    }

//    let alternatePhone: AbstractControl = control.parent.get('alternatePhone')
//    let cellPhone: AbstractControl = control.parent.get('cellPhone')
//    let homePhone: AbstractControl = control.parent.get('homePhone')
//    let count: number = 0

//    alternatePhone.markAsUntouched()
//    alternatePhone.markAsPristine()
//    alternatePhone.setErrors(null)
//    cellPhone.markAsUntouched()
//    cellPhone.markAsPristine()
//    cellPhone.setErrors(null)
//    homePhone.markAsUntouched()
//    homePhone.markAsPristine()
//    homePhone.setErrors(null)

//    if ((alternatePhone.value != null) && (alternatePhone.value != '')) {
//        count += 1
//    }
//    if ((cellPhone.value != null) && (cellPhone.value != '')) {
//        count += 1
//    }
//    if ((homePhone.value != null) && (homePhone.value != '')) {
//        count += 1
//    }

//    if (count == 0) {
//        let error: any = { requiredPhoneNumber: true }

//        alternatePhone.markAsTouched()
//        alternatePhone.setErrors(error)
//        cellPhone.markAsTouched()
//        cellPhone.setErrors(error)
//        homePhone.markAsTouched()
//        homePhone.setErrors(error)

//        return error
//    }

//    return null
//}
