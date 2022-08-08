import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './productos/productos.component';
import { ProductoService } from './productos/producto.service';
import { FormComponent } from './tarjetas/form.component';
//import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { SucursalService } from './sucursales/sucursal.service';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaService } from './categorias/categoria.service';
import { ProdXsucComponent } from './prod-xsuc/prod-xsuc.component';
import { ProdXSucService } from './prod-xsuc/prodXsuc.service';
import { ProdXcatComponent } from './prod-xcat/prod-xcat.component';
import { ProdXCatService } from './prod-xcat/prodXcat.service';
//import { DetalleComponent } from './clientes/detalle/detalle.component';
import { LoginComponent } from './usuarios/login.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { TarjetaService } from './tarjetas/tarjeta.service';
import { ProdXsucComponent1 } from './prod-xsuc1/prod-xsuc1.component';
import { ProdXSucService1 } from './prod-xsuc1/prod-xsuc1.service';
import { ProdXsucComponent2 } from './prod-xsuc2/prod-xsuc2.component';
import { ProdXSucService2 } from './prod-xsuc2/prod-xsuc2.service';
import { ProdXcatComponent1 } from './prod-xcat1/prod-xcat1.component';
import { ProdXCatService1 } from './prod-xcat1/prodXcat1.service';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoService } from './pedidos/pedidos.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'productos', component: ProductoComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'prodXsuc', component: ProdXsucComponent},
  {path: 'prodXcat', component: ProdXcatComponent},
  {path: 'login', component: LoginComponent },
  {path: 'tarjetas', component: TarjetasComponent},
  {path: 'tarjetas/form', component: FormComponent},
  {path: 'tarjetas/form/:id', component: FormComponent},
  {path: 'prodXsuc1', component: ProdXsucComponent1},
  {path: 'prodXsuc2', component: ProdXsucComponent2},
  {path: 'prodXcat1', component: ProdXcatComponent1},
  {path: 'pedidos', component: PedidosComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProductoComponent,
    FormComponent,
    SucursalesComponent,
    CategoriasComponent,
    ProdXsucComponent,
    ProdXcatComponent,
    LoginComponent,
    TarjetasComponent,
    ProdXsucComponent1,
    ProdXsucComponent2,
    ProdXcatComponent1,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ClienteService, ProductoService, SucursalService, CategoriaService, ProdXSucService, ProdXCatService, 
    TarjetaService, ProdXSucService1, ProdXSucService2, ProdXCatService1, PedidoService
   ],


  bootstrap: [AppComponent]
})
export class AppModule { }
