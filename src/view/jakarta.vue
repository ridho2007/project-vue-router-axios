<template>
  <div class="induk" style=" background-color: tomato;">
    
     <form id="atas" @submit.prevent="add">
        <div class="jakarta">
        <input type="hidden" v-model="form.id">
        <div>
        <label for="">kota/kab</label>
        <input type="text" v-model="form.kota" required></div> <br>
        <div>
        <label for="">ukuran</label>
        <input type="text" v-model="form.ukuran" required></div><br>
        <div>
        <label for="">j. kecamatan</label>
        <input type="text" v-model="form.jumlah" required></div><br>
        <div>
        <label for="">wali kota</label>
        <input type="text" v-model="form.iconkota" required></div><br>
        <div>
        <label for="">lambang kota</label>
        <input type="text" v-model="form.image" required></div><br>
        <div class="jabar"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Jakarta.svg/1200px-Coat_of_arms_of_Jakarta.svg.png" alt=""></div>
        <div class="btn1">
        <button type="submit" v-show="!updateSubmit">Tambahkan</button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="updateSubmit" @click="update(form)"><i  class="fas fa-wrench"></i></button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
  </div>
  </div> 
   </form>
    
    <table class="table" border="1" style="width:100%;">
   <tr class="tr">
    <th>kota/kab</th>
   <th>ukuran</th>
   <th>jumlah.kecamatan</th>
   <th>wali kota</th>
   <th>lambang</th>
   <th>action</th>
   </tr>

       
          <tr class="tr" v-for="jakarta in jakartas" :key="jakarta.id">
            
        <td> <span class="bb"> {{jakarta.kota }}</span>
      &#160;</td>
        <td> <span class="bb">{{jakarta.ukuran }}</span>
      &#160;</td>
       <td>  <span class="bb">{{jakarta.jumlah }}</span>
      &#160;</td>
        <td> 
      <span class="bb">{{jakarta.iconkota }}</span>
      &#160;</td>
        <td > 
    <span><img :src=jakarta.image alt="" width="100px"></span>
      &#160;</td>
      <td class="btn2">
        <button class="aa" @click="edit(jakarta)"><i class="fas fa-wrench"></i>Edit</button> 
          <button class="aa" @click="del(jakarta)"><i class="fas fa-trash-alt"></i>Delete</button>
      </td>
      </tr>
      
    </table>
    <a href="atas"><div class="kembali"><button>kembali</button></div></a>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
    name:"jakarta",
 data(){
    return{
        form: {
          id: "",
          kota: "",
          ukuran: "",
          jumlah: "",
          iconkota: "",
          image: "",
        },
        jakartas: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/jakartas")
        .then((res) => {
          this.jakartas = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
 add(){
      axios.post('http://localhost:3000/jakartas/', this.form).then(res => {
          this.load()
          this.form.kota = "",
          this.form.ukuran = "",
          this.form.jumlah = "",
          this.form.iconkota = "",
          this.form.image = ""
      })
 },
  edit(jakarta){ 
        this.updateSubmit = true
        this.form.id = jakarta.id 
        this.form.kota = jakarta.kota 
        this.form.ukuran = jakarta.ukuran
        this.form.jumlah = jakarta.jumlah 
        this.form.iconkota = jakarta.iconkota 
        this.form.image = jakarta.image
 },
 update(form){
        return axios.put('http://localhost:3000/jakartas/' + form.id , {kota: this.form.kota,ukuran: this.form.ukuran,
        jumlah: this.form.jumlah,iconkota: this.form.iconkota,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.kota = ''
        this.form.ukuran = ''
        this.form.jumlah = ''
        this.form.iconkota = ''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
      del(jakarta){
      axios.delete('http://localhost:3000/jakartas/' + jakarta.id).then(res =>{
          this.load()
          let index = this.jakartas.indexOf(form.kota,
          form.ukuran,form.jumlah,form.iconkota,form.image)
          this.jakartas.splice(index,1)
      })
  }
  },
};
</script>
<style>
.induk{
   background-color: tomato;
}
.jabar img{width: auto;
height: 100px;
}

.jakarta{
    display: flex;
    justify-content: space-around;
    font-family: 'Bungee Inline', cursive;
    padding-left: 20px;
    padding-right: 20px;
    gap: 20px;
  
}
.jakarta label{
  justify-content: center;
}
.jakarta button{
  font-family: 'Bungee Inline', cursive;
   color: white;
    background-color: red;
    border-radius: 20px;
  height: 50px;
  margin-top: 30px;
  ;
    text-align: center;
    border: 2px solid red;
}
.btn1 :hover{
  background-color: salmon;
}
.btn2 :hover{
  background-color: salmon;
}
.table {padding-left: 15px;
padding-right: 20px;
padding-bottom: 20px;
}
.table th {
    border: 1px solid;
    
}
.table td{
    border: 1px solid black;
    font-family: sans-serif;
    text-align: center;
}

.aa{
  background-color: red;
  border: none;
 
}
.bb{
  
  font-family: 'Bungee Inline', cursive;
}
.tr th{
  font-family: 'Bungee Inline', cursive;
}
.tr button{
  font-family: 'Bungee Inline', cursive;
   width: 100px;
    background-color: red;
    border-radius: 20px;
  height: 50px;
  margin-left:20px ;
  color: white;
 
}
</style>
