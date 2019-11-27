import { Observable, Page } from "tns-core-modules/ui/page/page";
import { ObservableProperty } from "~/components/observable-property-decorator";
import { Login } from "~/login/shared/login-model";
import { Feedback } from "nativescript-feedback";
import { topmost } from "tns-core-modules/ui/frame/frame";


export class InicioViewModel extends Observable {
    @ObservableProperty() loginModel: Login;
    @ObservableProperty() isLoading: boolean = false;
    page: Page;
    private feedback: Feedback;

    constructor(user: string) {
        super();
        this.loginModel = new Login();
        this.feedback = new Feedback();
    }

    onInspeccion() {
        topmost().navigate({
            moduleName: "/inspeccion/inspeccion-page",
            context: "",
            animated: true,
            clearHistory: false,
            transition: {
                name: "slideLeft",
                duration: 350,
                curve: "ease"
            }
        });
    }
}