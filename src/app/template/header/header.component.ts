import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavegationPagesService } from 'src/app/services/navegation-pages.service';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private stop$ = new Subject<void>();
  public showMenu: boolean = false;
  public estadoTheme: string = 'inicial';
  public seleccionado: string = 'Inicio';

  public itemsMenu = [
    {
      nombre: 'Home',
      icono: 'iconsminds-shop-4',
      ruta: 'inicio',
    },
    {
      nombre: 'About me',
      icono: 'iconsminds-administrator',
      ruta: 'app/portafolio/acerca',
    },
    {
      nombre: 'Skills',
      icono: 'iconsminds-file-clipboard-file---text',
      ruta: 'app/portafolio/habilidades',
    },
    {
      nombre: 'Services',
      icono: 'iconsminds-handshake',
      ruta: 'app/portafolio/servicios',
    },
    {
      nombre: 'Experience',
      icono: 'iconsminds-suitcase',
      ruta: 'app/portafolio/cualificado',
    },
    // {
    //   nombre: 'Contactame',
    //   icono: 'iconsminds-smartphone-4',
    //   ruta: 'app/portafolio/contactame',
    // },
    {
      nombre: 'Portfolio',
      icono: 'iconsminds-management',
      ruta: 'app/portafolio/contactame',
    },
    
    {
      nombre: 'Contact me',
      icono: 'iconsminds-smartphone-4',
      ruta: 'app/portafolio/contactame',
    },
  ];

  constructor(
    private readonly _navegationPageService: NavegationPagesService,
    private readonly _themeService: ThemeServiceService
  ) {}

  ngOnInit(): void {
    this.observarSeleccionadoDesdeOtroComponente();
  }
  ngOnDestroy(): void {
    this.stop();
  }

  changeEstadoNav(pagina: string): void {
    this.showMenu = false;
    this.seleccionado = pagina;
    this._navegationPageService.navegationPages(pagina);
  }

  observarSeleccionadoDesdeOtroComponente(): void {
    this._navegationPageService.seleccionado$
      .pipe(takeUntil(this.stop$))
      .subscribe((seleccionado: string) => {
        this.seleccionado = seleccionado;
      });
  }

  openAndCloseMenu(): void {
    this.showMenu = !this.showMenu;
  }

  changeTheme(): void {
    if (this.estadoTheme === 'inicial') {
      this.estadoTheme = 'dark';
      this._themeService.setDarkTheme();
    } else {
      this.estadoTheme = 'inicial';
      this._themeService.setDefaultTheme();
    }
  }

  stop(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
