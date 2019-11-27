import * as app from "tns-core-modules/application";
import { Page, NavigatedData, Observable } from "tns-core-modules/ui/page/page";
import { BottomNavigation, BottomNavigationTab, OnTabSelectedEventData } from "nativescript-bottom-navigation";
import { InicioViewModel } from "./inicio-view-model";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

let viewModel = null;
const pageData = new Observable();
pageData.set("myDataArray", [
    { title: "Slide 1", color: "#b3cde0", image: "~/assets/images/banner-01.png" },
    { title: "Slide 2", color: "#6497b1", image: "~/assets/images/banner-01.png" },
    { title: "Slide 3", color: "#005b96", image: "~/assets/images/banner-01.png" },
    { title: "Slide 4", color: "#03396c", image: "~/assets/images/banner-01.png" }
]);
export function pageLoaded(args) {
    const page = <Page>args.object;
    page.bindingContext = new InicioViewModel(page.navigationContext);
}
export function onDrawerButtonTap(args: Observable) {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
export function bottomNavigationLoaded(args) {
    const bottomNavigation: BottomNavigation = args.object;
    // For some reason the tabSelected event doesn't work if you
    // handle it from the view, so you need to handle the event in this way.
   
    bottomNavigation.on("tabSelected", tabSelected);
}
export function tabSelected(args: OnTabSelectedEventData) {
    console.log("tab selected " + args.newIndex);
    alert("tab selected " + args.newIndex);
}