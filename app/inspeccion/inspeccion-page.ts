import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import { InspeccionViewModel } from "./inspeccion-view-model";


export function pageLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new InspeccionViewModel(page)
}

export function camLoaded(args: any) {
    console.log(`cam loaded event`);
  
    try {
      const flashMode = args.object.getFlashMode();
      console.log(`flashMode in loaded event = ${flashMode}`);
    } catch (e) {
      console.log(e);
    }
  }