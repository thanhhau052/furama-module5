import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerType} from '../../model/customer/customer-type';
import {CustomerTypeService} from '../../service/customer_type/customer-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  customerTypes: CustomerType[];

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit() {
    this.getAll();
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.editForm = new FormGroup({
        id: new FormControl(customer.id),
        code: new FormControl(customer.code, [Validators.required, Validators.pattern('^(KH)-[0-9]{4}$')]),
        customerType: new FormControl(customer.customerType, [Validators.required]),
        name: new FormControl(customer.name , [Validators.required, Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ][a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
        birthday: new FormControl(customer.birthday, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}')]),
        // tslint:disable-next-line:max-line-length
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^((090)|(091)|(\\\\(84\\\\)\\\\+(90))|(\\\\(84\\\\)+(91)))[0-9]{7}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required])
      });
    });
  }

  getAll() {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerTypes = customerType;
    });
  }

  update(id: number) {
    if (this.editForm.valid) {
      const customer = this.editForm.value;
      this.customerService.update(id, customer).subscribe(() => {
        this.router.navigate(['/customer/list']);
        alert('Cập nhật thành công');
      }, e => {
        console.log(e);
      });
    }
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
