import { Observable, Page } from "tns-core-modules/ui/page/page";
import {ObservableProperty} from "../components/observable-property-decorator";
import { Feedback, FeedbackPosition, FeedbackType } from "nativescript-feedback";
import { Login } from "./shared/login-model";
import * as platform from "tns-core-modules/platform";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { topmost } from "tns-core-modules/ui/frame";

export class LoginViewModel extends Observable {
    @ObservableProperty() loginModel: Login;
    @ObservableProperty() isLoading: boolean = false;
    // @ObservableProperty() fontModel: FontsModel;
    page: Page;
    // private _loginService: LoginService;
    // private _rutValidation: RutValidation;
    private feedback: Feedback;
    constructor() {
        super();
        this.loginModel = new Login();
        this.loginModel.rut = "";
        this.loginModel.contrasena = "";
        // this._loginService = LoginService.getInstance();
        // this._rutValidation = new RutValidation();
        this.feedback = new Feedback();
        // this.fontModel = new FontsModel();
        // this.fontModel.text = "\uf007";
        // this.fontModel.font = Font.default.withFontFamily("FontAwesome").withFontSize(18).getUIFont(null);
    }

    onLogin(): void {
        if (this.loginModel.rut == "" || this.loginModel.rut == null) {
            if (platform.isIOS) {
                this.feedback.error({
                    message: "Debes Ingresar un rut",
                    position: FeedbackPosition.Bottom
                });
                return;
            }
            if (platform.isAndroid) {
                dialogs.alert({
                    title: "Error",
                    message: "Debes Ingresar un rut",
                    okButtonText: "Aceptar"
                });
                return;
            }
        }
        /** añadir validacion con rutValidation */
        if (this.loginModel.contrasena == "") {
            if (platform.isIOS) {
                this.feedback.error({
                    message: "Debes Ingresar una contraseña",
                    position: FeedbackPosition.Bottom
                });
                return;
            }
            if (platform.isAndroid) {
                dialogs.alert({
                    title: "Error",
                    message: "Debes Ingresar una contraseña",
                    okButtonText: "Aceptar"
                });
                return;
            }
        }

        this.isLoading = true;
        /** loginService -- */
        this.navigateHome();
        this.isLoading = false;
    }

    private navigateHome() {
        const frameModule = require("tns-core-modules/ui/frame");
        let moduleNameRedirect = "/inicio/inicio-page";
        frameModule.getFrameById("topmost").navigate({
            moduleName: moduleNameRedirect,
            clearHistory: true,
            backstackVisible: true,
            context: "hola",
            animated: true,
            transition: {
                name: "slideLeft",
                duration: 350,
                curve: "ease"
            }
        });
    }
}