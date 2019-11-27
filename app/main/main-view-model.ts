import { Observable } from "tns-core-modules/ui/page/page";
import {ObservableProperty} from "../components/observable-property-decorator";
import {Login} from "../login/shared/login-model";


export class AppRootViewModel extends Observable {
    @ObservableProperty() loginModel: Login;
    @ObservableProperty() selectedPage: string;
    constructor(selectedPage: string) {
        super();
        this.loginModel = new Login();
        this.selectedPage = selectedPage;
    }
}