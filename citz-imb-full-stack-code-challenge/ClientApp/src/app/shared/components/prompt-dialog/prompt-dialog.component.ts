//import { Component, OnDestroy } from '@angular/core'
//import { Subscription } from 'rxjs'
////import { PromptService } from '../../services'

//@Component({
//  selector: 'app-prompt-dialog',
//  templateUrl: './prompt-dialog.component.html'
//})
//export class PromptDialogComponent implements OnDestroy {
//  // variables

//  public display: boolean
//  public header: string
//  public message: string
//  private subscription: Subscription

//  // constructors

//  constructor(private promptService: PromptService) {
//    this.subscription = this.promptService.requirePrompt$.subscribe(prompt => {
//      if (!prompt) {
//        this.hideDialog()
//        return
//      }

//      this.showDialog(prompt.message, prompt.header)
//    })
//  }

//  // event handlers

//  public ngOnDestroy() {
//    this.subscription.unsubscribe();
//  }

//  // business logic

//  public clickOk(): void {
//    this.hideDialog()
//  }

//  public hideDialog() {
//    this.display = false
//  }

//  public showDialog(message: string, header: string) {
//    this.display = true
//    this.header = header
//    this.message = message
//  }
//}
