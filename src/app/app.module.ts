import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdPaginatorModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdTooltipModule,
    MdCheckboxModule
} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RecipesComponent} from './recipes/recipes.component';
import {ListsComponent} from './lists/lists.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ListManagerService} from './core/list-manager.service';
import {ConfirmationPopupComponent} from './popup/confirmation-popup/confirmation-popup.component';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';
import {DataService} from './core/data.service';
import {ListNamePopupComponent} from './popup/list-name-popup/list-name-popup.component';
import {I18nTools} from './core/i18n-tools';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GarlandToolsService} from './core/garland-tools.service';
import {GatheredByPopupComponent} from './popup/gathered-by-popup/gathered-by-popup.component';
import {DropsDetailsPopupComponent} from './popup/drops-details-popup/drops-details-popup.component';
import {TradeDetailsPopupComponent} from './popup/trade-details-popup/trade-details-popup.component';
import {DesynthPopupComponent} from './popup/desynth-popup/desynth-popup.component';
import {VendorsDetailsPopupComponent} from './popup/vendors-details-popup/vendors-details-popup.component';
import { InstancesDetailsPopupComponent } from './popup/instances-details-popup/instances-details-popup.component';
import { LoginPopupComponent } from './popup/login-popup/login-popup.component';
import { RegisterPopupComponent } from './popup/register-popup/register-popup.component';
import { CharacterAddPopupComponent } from './popup/character-add-popup/character-add-popup.component';
import {UserService} from './core/user.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent
    },
    {
        path: 'list/:uid/:listId',
        component: ListComponent
    },
    {
        path: 'lists',
        component: ListsComponent
    },
];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        RecipesComponent,
        ListsComponent,
        ConfirmationPopupComponent,
        ListComponent,
        ItemComponent,
        ListNamePopupComponent,
        GatheredByPopupComponent,
        DropsDetailsPopupComponent,
        TradeDetailsPopupComponent,
        DesynthPopupComponent,
        VendorsDetailsPopupComponent,
        InstancesDetailsPopupComponent,
        LoginPopupComponent,
        RegisterPopupComponent,
        CharacterAddPopupComponent,
    ],
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),

        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,

        RouterModule.forRoot(routes),

        HttpClientModule,
        // Animations for material.
        BrowserAnimationsModule,

        MdCardModule,
        MdIconModule,
        MdListModule,
        MdPaginatorModule,
        MdInputModule,
        MdToolbarModule,
        MdButtonModule,
        MdDialogModule,
        MdMenuModule,
        MdSnackBarModule,
        MdExpansionModule,
        MdTooltipModule,
        MdChipsModule,
        MdSidenavModule,
        MdGridListModule,
        MdCheckboxModule,

        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    entryComponents: [
        ListNamePopupComponent,
        ConfirmationPopupComponent,
        GatheredByPopupComponent,
        DropsDetailsPopupComponent,
        TradeDetailsPopupComponent,
        DesynthPopupComponent,
        VendorsDetailsPopupComponent,
        InstancesDetailsPopupComponent,
        LoginPopupComponent,
        RegisterPopupComponent,
        CharacterAddPopupComponent,
    ],
    providers: [
        DataService,
        ListManagerService,
        I18nTools,
        GarlandToolsService,
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
