import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrListService {

  array_list: any = []


  count_number: number = 1

  staticAddArrayList: any = [{
    id: this.serviceAutoGenerateID(),
    task: 'Watch Ozark Season 2',
    complete: false
  },
  {
    id: this.serviceAutoGenerateID(),
    task: 'Use NgRx in my to-do app',
    complete: true
  },
  {
    id: this.serviceAutoGenerateID(),
    task: 'EKI INDRADI',
    complete: true
  }]


  constructor() { }


  serviceGetArrList(obj_value: any = {}) {

    let res_json: any = {}

    res_json.statusCode = 1
    res_json.message = "Berhasil mendapatkan daftar data!"

    res_json.data = this.array_list
    // console.log(JSON.stringify(res_json))

    return res_json

  }


  serviceAddArrList(obj_value) {

    let res_json: any = {}

    this.array_list.push(obj_value)

    res_json.statusCode = 1
    res_json.message = "Berhasil menambahkan daftar data!"
    res_json.data = this.array_list

    // console.log(JSON.stringify(res_json))

    return res_json
  }

  serviceDeleteAllArrList() {

    let res_json: any = {}

    this.array_list = []

    res_json.statusCode = 1
    res_json.message = "Berhasil menghapus seluruh daftar data!"

    // console.log(JSON.stringify(res_json))

    return res_json
  }

  serviceDeleteIdArrList() {

    let res_json: any = {}

    this.array_list = []

    res_json.statusCode = 1
    res_json.message = "Berhasil menghapus daftar data berdasarkan id !"

    // console.log(JSON.stringify(res_json))

    return res_json
  }

  serviceAutoGenerateID() {

    let eki_auto_generate = ""
      + new Date().getFullYear()
      + ("0" + (new Date().getMonth() + 1)).slice(-2)
      + ("0" + new Date().getDate()).slice(-2) + "-"
      + "DATA" + this.count_number.toString().padStart((String(this.count_number).length > 4) ? String(this.count_number).length : 4, '0') 
      // + "-"
      // + Date.now()


    this.count_number = this.count_number + 1
    return eki_auto_generate
  }


}
