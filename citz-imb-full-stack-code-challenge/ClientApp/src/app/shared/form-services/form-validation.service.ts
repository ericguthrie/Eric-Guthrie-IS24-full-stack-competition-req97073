import { Injectable } from '@angular/core'
import { AbstractControl, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms'

@Injectable()
export class FormValidationService {
  // business logic

  public update(formGroup: UntypedFormGroup) {
    this.updateFormValidation(formGroup)
  }

  private updateFormValidation(formGroup: UntypedFormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key)
      if (control instanceof UntypedFormControl) {
        if (control.invalid) {
          control.markAsDirty()
        }
      }
      else if (control instanceof UntypedFormGroup) {
        this.updateFormValidation(control)
      }
      else if (control instanceof UntypedFormArray) {
        let controls: AbstractControl[] = (control as UntypedFormArray).controls
        for (var i: number = 0; i < controls.length; i++) {
          this.updateFormValidation(controls[i] as UntypedFormGroup)
        }
      }
    })
  }
}
