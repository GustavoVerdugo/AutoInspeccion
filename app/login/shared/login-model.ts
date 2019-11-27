import {Observable} from "tns-core-modules/data/observable";
import {ObservableProperty} from "../../components/observable-property-decorator";

export class Login extends Observable {
    @ObservableProperty() loggedIn: boolean;
    @ObservableProperty() rut: string;
    @ObservableProperty() contrasena: string;
    @ObservableProperty() id: number;
    @ObservableProperty() dv: string;
    @ObservableProperty() apellidoMaterno: string;
    @ObservableProperty() apellidoPaterno: string;
    @ObservableProperty() nombre: string;
    @ObservableProperty() nombreCompleto: string;
    @ObservableProperty() codigoCarga: number;
    @ObservableProperty() suscripcion: number;
    @ObservableProperty() token: string;
    @ObservableProperty() soportaHuella: boolean;
    @ObservableProperty() huellaConfigurada: boolean;
    @ObservableProperty() aceptaHuella: boolean;

    constructor() {
        super();
        this.loggedIn = false;
    }
}