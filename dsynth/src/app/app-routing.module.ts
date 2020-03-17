import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";


const routes: Routes = [
    {path: "", component: AboutComponent},
    {path: "contact", component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
