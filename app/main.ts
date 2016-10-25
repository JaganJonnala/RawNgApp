import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import application = require('application');
import { isAndroid } from './utils';
import { AppModule } from "./app.module";
if (isAndroid()) {
    application.onLaunch = function (intent) {
        application.android.onActivityCreated = function (activity) {
            const id = activity.getResources().getIdentifier("AppTheme", "style", activity.getPackageName());
            activity.setTheme(id);
        }
    }
}
platformNativeScriptDynamic().bootstrapModule(AppModule);