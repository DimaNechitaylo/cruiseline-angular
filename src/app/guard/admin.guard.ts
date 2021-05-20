import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from "../service/user/user.service";
import { ToastrService } from "ngx-toastr";
import { UserDTO } from '../dto/userDTO';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree{
      this.userService.getCurrentUser().subscribe(user => {
        if (user.role === "ADMIN") {
          this.toastr.info("Hi, admin");
          return true;
        }
        this.router.navigateByUrl("/");
        this.toastr.error("Forbidden");
        return false;

      }, error =>{
        throwError(error);
      })
    return true;
  }

}
