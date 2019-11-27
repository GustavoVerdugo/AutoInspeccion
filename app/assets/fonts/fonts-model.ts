import { Observable } from "tns-core-modules/data/observable";

import { ObservableProperty } from "../../components/observable-property-decorator";

export class FontsModel extends Observable {
    @ObservableProperty() _font: string;
    @ObservableProperty() _text: string;

    constructor() {
        super();
    }

    get font(): string {
        return this._font;
    }

    set font(value: string) {
        if (this._font === value) {
            return;
        }

        this._font = value;
        this.notifyPropertyChange("font", value);
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        if (this._text === value) {
            return;
        }

        this._text = value;
        this.notifyPropertyChange("text", value);
    }
}
