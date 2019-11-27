import * as app from "tns-core-modules/application";
import { Page, NavigatedData, EventData } from "tns-core-modules/ui/page/page";
import { LoginViewModel } from "./login-view-model";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { topmost } from "tns-core-modules/ui/frame/frame";

export function pageLoaded(args) {
    const page = <Page>args.object;
    const model = new LoginViewModel();
    model.page = page;
    page.bindingContext = model;
}

export function onNavigatinTo(args: NavigatedData) {
    const page = <Page>args.object;
    const model = new LoginViewModel();
    model.page = page;
    page.bindingContext = model;
}

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

export function onBackButtonTap(args: EventData) {
    topmost().goBack();
}