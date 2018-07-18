import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '../../node_modules/@angular/core';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'product', component: ProductListingComponent,
        children: [
            { path: 'detail', component: ProductDetailComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
