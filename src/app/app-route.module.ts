import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { AdminOrdersComponent } from "././admin/admin-orders/admin-orders.component";
import { AdminProductsComponent } from "././admin/admin-products/admin-products.component";
import { LoginComponent } from "././login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      { path: "check-out", component: CheckOutComponent },
      { path: "order-sucess", component: OrderSuccessComponent },
      { path: "login", component: LoginComponent },
      { path: "my/orders", component: MyOrdersComponent },

      { path: "admin/products", component: AdminProductsComponent },
      { path: "admin/orders", component: AdminOrdersComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule {}
