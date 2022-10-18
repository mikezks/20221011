import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  standalone: true,
  imports: [

  ],
  selector: 'flight-workspace-about',
  template: `
    <h1>About</h1>
    <ng-container #container></ng-container>
  `
})
export class AboutComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) vc!: ViewContainerRef;
  
  async ngOnInit(): Promise<void> {
    const esm = await import('../title/title.component');
    const ref = this.vc.createComponent(esm.TitleComponent);
    // ref.instance.title = 'My modified title! :-|';

    /**
     * Ab Angular 14.1 gibt es die setInput Methode:
     */
    // ref.setInput('title', 'Dynamic Flight Title')
  }

  /* async load(
    dynCompName: string,
    vc: ViewContainerRef,
    injector: Injector
  ) {
    const { component, module } = (await dynamicComponents[dynCompName]()).dynConfig;
    const moduleFactory = await (
      module instanceof NgModuleFactory ? module : this.compiler.compileModuleAsync(module)
    );
    const moduleRef = moduleFactory.create(injector);
    const compfactory = moduleRef.componentFactoryResolver.resolveComponentFactory(component);
    vc.createComponent(compfactory);
  } */
}
