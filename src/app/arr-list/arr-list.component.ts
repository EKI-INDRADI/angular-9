import { Component, OnInit } from '@angular/core';
import { ArrListService } from './arr-list.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

interface var_array_select {
  value: boolean;
  viewValue: string;
}


@Component({
  selector: 'app-arr-list',
  templateUrl: './arr-list.component.html',
  styles: [`mat-selection-list {
    max-height: 400px;
    overflow: auto;
  }`],

  // style scroll
  styleUrls: ['./arr-list.component.css']
})




export class ArrListComponent implements OnInit {

  constructor(
    public arrListService: ArrListService,
    private formBuilder: FormBuilder
  ) {

  }


  datasourceArrayList: any = []
  datasourceArrayListComplete: any = []
  datasourceArrayListIncomplete: any = []



  id_value: any = ""
  task_value: string = ""
  complete_value: boolean = false


  // ====================== FORM GROUP MULTI OBJECT
  multi_object_form_group: FormGroup;
  submitted = false;

  jumlah_object: number

  arr_complete: var_array_select[] = [
    { value: true, viewValue: 'true' },
    { value: false, viewValue: 'false' }
  ];

  // ====================== FORM GROUP MULTI OBJECT




  ngOnInit(): void {

    this.arrListService.array_list = this.arrListService.staticAddArrayList

    this.controllerGetArrList()


    this.multi_object_form_group = this.formBuilder.group({
      array_value: new FormArray([]),
    });




    // for (let i_a = 0; i_a < this.staticAddArrayList.length; i_a++) {
    //   this.arrListService.array_list.push(this.staticAddArrayList[i_a])
    // }



    // this.arrListService.array_list()
    //   .subscribe(
    //     (response: any) => {
    //       // this.arrListService.array_list = response
    //       response = this.staticAddArrayList
    //       this.datasourceArrayList = response

    //       console.log(response)
    //     },
    //     (error) => console.log(error)
    //   );

  }



  async controllerSetAllInCompleteToCompletedById(get_id: number = null) {
    let res_json: any = {}
    try {

      for (let i_a = 0; i_a < this.datasourceArrayListIncomplete.length; i_a++) {

       this.datasourceArrayListIncomplete[i_a].complete = true

        if ((i_a + 1) == this.datasourceArrayListIncomplete.length) {
          let process = await this.controllerGetArrList()
        }
      }

    } catch (error) {
      res_json.statusCode = 0
      res_json.data = []
      res_json.message = error.message
      console.log('controller controllerSetAllInCompleteToCompletedById' + error.message)
    }

    return res_json
  }


  async controllerSetAllCompletedToIncompleteById(get_id: number = null) {
    let res_json: any = {}
    try {

      for (let i_a = 0; i_a < this.datasourceArrayListComplete.length; i_a++) {

        this.datasourceArrayListComplete[i_a].complete = false


        if ((i_a + 1) == this.datasourceArrayListComplete.length) {
          let process = await this.controllerGetArrList()
        }
      }

    } catch (error) {
      res_json.statusCode = 0
      res_json.data = []
      res_json.message = error.message
      console.log('controller controllerSetAllCompletedToIncompleteById' + error.message)
    }

    return res_json
  }


  async controllerToCompletedById(get_id: number = null) {
    let res_json: any = {}
    try {

      let index = await this.datasourceArrayList.findIndex(check_exist_from_array => check_exist_from_array.id === get_id)

      this.datasourceArrayList[index].complete = true
      
      let indexIncomplete = await this.datasourceArrayListIncomplete.findIndex(check_exist_from_array => check_exist_from_array.id === get_id)

      this.datasourceArrayListIncomplete[indexIncomplete].complete = true

      let process = await this.controllerGetArrList()

    } catch (error) {
      res_json.statusCode = 0
      res_json.data = []
      res_json.message = error.message
      console.log('controller controllerToCompletedById' + error.message)
    }

    return res_json
  }

  async controllerToIncompletedById(get_id: number = null) {
    let res_json: any = {}
    try {

      let index = await this.datasourceArrayList.findIndex(check_exist_from_array => check_exist_from_array.id === get_id)
      this.datasourceArrayList[index].complete = false

      let indexComplete = await this.datasourceArrayListComplete.findIndex(check_exist_from_array => check_exist_from_array.id === get_id)

      this.datasourceArrayListComplete[indexComplete].complete = false

      let process = await this.controllerGetArrList()

    } catch (error) {
      res_json.statusCode = 0
      res_json.data = []
      res_json.message = error.message
      console.log('controller controllerToCompletedById' + error.message)
    }

    return res_json
  }

  async controllerDeleteById(get_id: number = null) {
    let res_json: any = {}
    try {

      // if (this.datasourceArrayList.findIndex(check_exist_from_array => check_exist_from_array.id === get_id) == 1) { // == 1 found   == -1  not found
      // }



      let index = await this.datasourceArrayList.findIndex(check_exist_from_array => check_exist_from_array.id === get_id)

      // delete this.datasourceArrayList[index]
      this.datasourceArrayList.splice(index, 1); // delete (index dan hapus 1 saja setelahnya)

      let indexComplete = await this.datasourceArrayListComplete.findIndex(check_exist_from_array => check_exist_from_array.id === get_id)

      // delete this.datasourceArrayListComplete[indexComplete]
      this.datasourceArrayListComplete.splice(indexComplete, 1); // delete (index dan hapus 1 saja setelahnya)

      let indexIncomplete = await this.datasourceArrayListIncomplete.findIndex(check_exist_from_array => check_exist_from_array.id === get_id)

      // delete this.datasourceArrayListIncomplete[indexIncomplete]
      this.datasourceArrayListIncomplete.splice(indexIncomplete, 1); // delete (index dan hapus 1 saja setelahnya)

      // this.datasourceArrayListComplete = await this.datasourceArrayList.filter((data: any) => data.complete === true)

      let process = await this.controllerGetArrList()

    } catch (error) {
      res_json.statusCode = 0
      res_json.data = []
      res_json.message = error.message
      console.log('controller controllerDeleteById' + error.message)
    }

    return res_json
  }

  async controllerGetArrList(obj_value: any = {}) {
    let res_json: any = {}
    try {


      res_json = await this.arrListService.serviceGetArrList(obj_value)


      this.datasourceArrayList = await res_json.data

      console.log(this.datasourceArrayList)
      this.datasourceArrayListComplete = await this.datasourceArrayList.filter((data: any) => data.complete === true)
      this.datasourceArrayListIncomplete = await this.datasourceArrayList.filter((data: any) => data.complete === false)

    } catch (error) {
      res_json.statusCode = 0
      res_json.data = []
      res_json.message = error.message
      console.log('controller controllerGetArrList' + error.message)
    }

    return res_json
  }


  async controllerAddMultiArrList(obj_value: any = {}) {


    let res_json: any = {}

    try {

      let merge_object = [
        ...this.datasourceArrayList,
        ...obj_value.array_value
      ]

      this.arrListService.array_list = merge_object

      this.datasourceArrayList = this.arrListService.array_list

      res_json.statusCode = 1
      res_json.data = this.datasourceArrayList

      this.controllerGetArrList()
      this.onReset_multi_object()

    } catch (error) {
      res_json.statusCode = 0
      res_json.data = []
      res_json.message = error.message
      console.log('controller controllerAddMultiArrList' + res_json.message)
    }

    return res_json
  }

  controllerAddArrList() {
    let res_json: any = {}

    try {
      res_json.statusCode = 1

      let obj_value = {
        id: this.arrListService.serviceAutoGenerateID(),
        task: this.task_value,
        complete: this.complete_value
      }

      let process = this.arrListService.array_list.push(obj_value)


      this.datasourceArrayList = this.arrListService.array_list

      res_json.data = this.datasourceArrayList


      this.controllerGetArrList()

    } catch (error) {
      res_json.statusCode = 0
      res_json.data = []
      res_json.message = error.message
      console.log('controller controllerAddArrList' + res_json.message)
    }


    return res_json

  }



  //============= MULTI OBJECT FROM GROUP

  get get_return_form_group_controls() {
    return this.multi_object_form_group.controls;
  }

  get get_return_multi_object_arr() {
    return this.get_return_form_group_controls.array_value as FormArray;
  }

  new_multi_object() {

    if (this.jumlah_object == null || this.jumlah_object == undefined) {
      this.jumlah_object = 1
    } else {
      this.jumlah_object = this.jumlah_object + 1
    }

    this.new_data_multi_object_func(this.jumlah_object)

  }

  new_data_multi_object_func(var_object) {

    const total_data_object = var_object
    if (this.get_return_multi_object_arr.length < total_data_object) {
      for (let i = this.get_return_multi_object_arr.length; i < total_data_object; i++) {
        this.get_return_multi_object_arr.push(this.formBuilder.group({
          id: this.arrListService.serviceAutoGenerateID(), //['', Validators.required],
          task: ['', Validators.required],
          complete: ['', Validators.required]
        }));
      }
    } else {
      for (let i = this.get_return_multi_object_arr.length; i >= total_data_object; i--) {
        this.get_return_multi_object_arr.removeAt(i);
      }
    }
  }


  remove_object_func(var_object) {

    this.get_return_multi_object_arr.removeAt(var_object);

    if (this.jumlah_object > 0) {
      this.jumlah_object = this.jumlah_object - 1
    }

  }


  onReset_multi_object() {
    this.submitted = false;
    let var_object = 0

    for (let i = Number(this.get_return_multi_object_arr.length); i >= var_object; i--) {
      this.get_return_multi_object_arr.removeAt(i);
    }

    this.get_return_multi_object_arr.clear()
    this.jumlah_object = 0
  }


  onClear_header() {
    this.submitted = false;
    this.get_return_multi_object_arr.reset();
    this.jumlah_object = 0
  }


  onSubmit() {
    this.submitted = true;

    if (this.multi_object_form_group.invalid) {
      return;
    }

    this.jumlah_object = 0

  }

  onReset() {
    this.submitted = false;

    this.multi_object_form_group.reset();
    this.get_return_multi_object_arr.clear();
    this.jumlah_object = 0
  }

  onClear() {
    this.submitted = false;

    this.get_return_multi_object_arr.reset();
    this.jumlah_object = 0
  }


  get json_viewer_by_AceEditorModule() {
    return JSON.stringify(this.multi_object_form_group.value, null, 2);
  }


  //============= //MULTI OBJECT FROM GROUP


}
