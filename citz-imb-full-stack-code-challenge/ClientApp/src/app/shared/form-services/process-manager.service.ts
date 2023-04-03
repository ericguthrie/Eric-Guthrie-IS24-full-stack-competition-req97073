//import { Injectable } from '@angular/core'
//import { BehaviorSubject, Observable } from 'rxjs'

//@Injectable()
//export class ProcessManagerService {
//  // variables

//  public onStatusChanged: Observable<boolean>
//  public processes: Process[]
//  private statusChangeBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//  // constructors

//  constructor() {
//    this.processes = []
//    this.onStatusChanged = this.statusChangeBehaviorSubject.asObservable()
//  }

//  // business logic

//  public addProcess(name: string) {
//    let existingProcess: Process = this.processes.find(p => p.name == name)

//    if (existingProcess == undefined) {
//      var process = new Process()
//      process.name = name
//      process.isComplete = false

//      this.processes.push(process)
//    }
//    else {
//      existingProcess.isComplete = false
//      this.statusChangeBehaviorSubject.next(this.isComplete())
//    }
//  }

//  public addProcesses(names: string[]) {
//    this.processes = []
//    for (var i: number = 0; i < names.length; i++) {
//      this.addProcess(names[i])
//    }
//  }

//  public force() {
//    for (var i: number = 0; i < this.processes.length; i++) {
//      this.processes[i].isComplete = false
//    }
//    this.statusChangeBehaviorSubject.next(this.isComplete())
//  }

//  public isComplete(): boolean {
//    const incompleteProcesses: Process[] = this.processes.filter(p => !p.isComplete)

//    if (incompleteProcesses.length > 0) {
//      return false
//    }

//    return true
//  }

//  public notify(name: string) {
//    const existingProcess: Process = this.processes.find(p => p.name == name)

//    if (existingProcess != undefined) {
//      existingProcess.isComplete = true
//    }
//    this.statusChangeBehaviorSubject.next(this.isComplete())
//  }

//  public reset() {
//    for (var i: number = 0; i < this.processes.length; i++) {
//      this.processes[i].isComplete = false
//    }
//    this.statusChangeBehaviorSubject.next(false)
//  }

//  public resetProcess(name) {
//    const existingProcess: Process = this.processes.find(p => p.name == name)

//    if (existingProcess != undefined) {
//      existingProcess.isComplete = false
//    }
//    this.statusChangeBehaviorSubject.next(this.isComplete())
//  }

//  public unforce() {
//    for (var i: number = 0; i < this.processes.length; i++) {
//      this.processes[i].isComplete = true
//    }
//    this.statusChangeBehaviorSubject.next(this.isComplete())
//  }
//}
