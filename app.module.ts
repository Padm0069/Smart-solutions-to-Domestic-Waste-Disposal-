import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { authProviders, appRoutes } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginModule } from "./login/login.module";
import { HomeModule } from "./home/home.module";
import { setStatusBarColors, BackendService, LoginService } from "./shared";
import { DatabaseService } from "./database/sqlite.service";

setStatusBarColors();

@NgModule({
    providers: [
        authProviders,
        BackendService,
        LoginService,
        DatabaseService
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        LoginModule,
        HomeModule     
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
