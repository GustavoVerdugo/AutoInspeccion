import { Observable, Page } from "tns-core-modules/ui/page/page";
import { ObservableProperty } from "~/components/observable-property-decorator";
import { CameraPlus, CameraVideoQuality } from '@nstudio/nativescript-camera-plus';
import { screen } from 'tns-core-modules/platform';
import { fromAsset } from 'tns-core-modules/image-source';
import { Image } from 'tns-core-modules/ui/image';
import { topmost } from "tns-core-modules/ui/frame/frame";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";


export class InspeccionViewModel extends Observable {
    private _counter: number = 0;
    @ObservableProperty() public cam: CameraPlus;
    @ObservableProperty() public cameraHeight: number;

    constructor(page: Page) {
        super();
        this.cam = page.getViewById('camPlus') as CameraPlus;
        this.cameraHeight = screen.mainScreen.heightDIPs;
        if (this._counter > 0) {
            return;
        }
        this.cam.on(CameraPlus.errorEvent, args => {
            console.log("Error de evento CamPlus ", args);
        });
        this.cam.on(CameraPlus.toggleCameraEvent, (args: any) => {
            console.log(`toggleCameraEvent listener on main-view-model.ts  ${args}`);
        })
        this.cam.on(CameraPlus.photoCapturedEvent, (args: any) => {
            console.log(`photoCapturedEvent listener on main-view-model.ts  ${args}`);
            console.log((<any>args).data);
            fromAsset((<any>args).data).then(res => {
                const testImg = topmost().getViewById('testImagePickResult') as Image;
                testImg.src = res;
            });
        });
        this.cam.on(CameraPlus.imagesSelectedEvent, (args: any) => {
            console.log(`imagesSelectedEvent listener on main-view-model.ts ${args}`);
        });
        this._counter = 1;
    }
    public toggleFlashOnCam() {
        this.cam.toggleFlash();
    }

    public toggleShowingFlashIcon() {
        console.log(`showFlashIcon = ${this.cam.showFlashIcon}`);
        this.cam.showFlashIcon = !this.cam.showFlashIcon;
    }

    public toggleTheCamera() {
        this.cam.toggleCamera();
    }

    public openCamPlusLibrary() {
        this.cam.chooseFromLibrary().then(
            (images: Array<ImageAsset>) => {
                console.log('Images selected from library total:', images.length);
                for (let source of images) {
                    console.log(`source = ${source}`);
                }
                const testImg = topmost().getViewById('testImagePickResult') as Image;
                const firstImg = images[0];
                console.log(firstImg);
                fromAsset(firstImg)
                    .then(res => {
                        const testImg = topmost().getViewById('testImagePickResult') as Image;
                        testImg.src = res;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            err => {
                console.log('Error -> ' + err.message);
            }
        );
    }

    public takePicFromCam() {
        this.cam.requestCameraPermissions().then(() => {
            if (!this.cam) {
                this.cam = new CameraPlus();
            }
            this.cam.takePicture({ saveToGallery: true });
        });
    }
}

