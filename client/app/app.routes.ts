import { RouterModule } from "@angular/router";
import { AppHomeComponent } from "./components/app-home.component";


const routes = [
    { 
        path: '', component: AppHomeComponent  
    }
];


export default RouterModule.forRoot(routes);