<template>
  <div class="container">
    <div class="card">
      <div class="card-header"> 
        <h3>Add SLAM</h3>
      </div>
      <div class="card-body">

      
        <form @submit.prevent="addItem">

          <div class="form-group">
            <label for="itemname">First name:</label>
            <input type="text" v-model="newItem.name" id="itemname" class="form-control">
          </div>

          <div class="form-group">
            <label for="itemname">Surname:</label>
            <input type="text" v-model="newItem.surname" id="itemsurname" class="form-control">
          </div>

          <div class="form-group">
            <label for="itemname">Phone:</label>
            <input type="number" v-model="newItem.phone" id="itemphone" class="form-control" placeholder="8(777)-777-7777" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value="">
          
          </div>

          <div class="form-group">
            <label for="itemtask">Task:</label>
              <textarea class="form-control" v-model="newItem.task" value="" rows="2" id="itemtask" placeholder="Describe Task"></textarea>
          </div>

          <div class="form-group">
            <label for="itemname">Workplace:</label>
            <div class="select">
              <select v-model="newItem.workplace" class="custom-select" id="itemworkplace">
                <option disabled value="">Please choose Workplace</option>
                <option value="PAB">PAB</option>
                <option value="Pit">Pit</option>
                <option value="Camp">Camp</option>
                <option value="MMA">MMA</option>
                <option value="Tails">Tails</option>
                <option value="SulphidePLant">Sulphide PLant</option>
                <option value="ClayPlant">ClayPlant</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="custom-file">Pictures:</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Upload</span>
              </div>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
            <span class="file-name">
              * File upload DISABLED in DEMO mode
            </span>
          </div>

          <div class="form-group">
            <label class="label">Report Type</label>
            <div class="ex-radio">
              <input type="radio" id="one" value="Hazard" v-model="newItem.reporttype">
                  <label class="radio-label" for="one">Hazard</label>
            </div>
            <div class="ex-radio">
              <input type="radio" id="two" value="Near Miss" v-model="newItem.reporttype">
                  <label class="radio-label" for="two">Near Miss</label>
            </div>
          </div>

          <h5 class="subtitle">
             The questions you have to ask yourself:
          </h5>

          <div class="form-group">
            <label class="label">Have I carried out this task before?</label>
            <div class="ex-radio">
              <input type="radio" id="one" value="Yes" v-model="newItem.donebefore">
                  <label class="radio-label" for="one">Yes</label>
            </div>
            <div class="ex-radio">
              <input type="radio" id="two" value="No" v-model="newItem.donebefore">
                  <label class="radio-label" for="two">No</label>
            </div>
          </div>

          <div class="form-group">
            <label class="label">Do I have appropriate qualification, authority, permission/PTW for this task?</label>
              <div class="ex-radio">
              <input type="radio" id="one" value="Yes" v-model="newItem.havepermit">
                  <label for="one">Yes</label>
                </div>
              <div class="ex-radio">
              <input type="radio" id="two" value="No" v-model="newItem.havepermit">
                  <label for="two">No</label>
              </div>
          </div>

          <div class="form-group">
            <label class="label">Do I know all personal behavior rules in Emergencies?</label>
              <div class="ex-radio">
              <input type="radio" id="one" value="Yes" v-model="newItem.emergencyrule">
                  <label for="one">Yes</label>
                </div>
              <div class="ex-radio">
              <input type="radio" id="two" value="No" v-model="newItem.emergencyrule">
                  <label for="two">No</label>
              </div>
            </div>

          <div class="form-group">
            <label class="label">Can anything fell on me? Can I drop something on someone? Can I fell down from height? Can I be hit by something?</label>
              <div class="ex-radio">
              <input type="radio" id="one" value="Yes" v-model="newItem.fellanddrop">
                  <label for="one">Yes</label>
                </div>
              <div class="ex-radio">
              <input type="radio" id="two" value="No" v-model="newItem.fellanddrop">
                  <label for="two">No</label>
              </div>
          </div>

          <div class="form-group">
            <label class="label">Do my PPE comply with this task, are they in operative condition?</label>
              <div class="ex-radio">
              <input type="radio" id="one" value="Yes" v-model="newItem.ppecomply">
                  <label for="one">Yes</label>
                </div>
              <div class="ex-radio">
              <input type="radio" id="two" value="No" v-model="newItem.ppecomply">
                  <label for="two">No</label>
              </div>
          </div>

          <div class="form-group">
            <label class="label">Have I isolated all power sources and checked reliability of blocking from unauthorized switching?</label>
              <div class="ex-radio">
              <input type="radio" id="one" value="Yes" v-model="newItem.isolate">
                  <label for="one">Yes</label>
                </div>
              <div class="ex-radio">
              <input type="radio" id="two" value="No" v-model="newItem.isolate">
                  <label for="two">No</label>
               </div>
          </div>

          <div class="form-group">
            <label class="label">Does the equipment/tool comply with this task, are they in operative condition?</label>
              <div class="ex-radio">
              <input type="radio" id="one" value="Yes" v-model="newItem.equipmentoperative">
                  <label for="one">Yes</label>
                </div>
              <div class="ex-radio">
              <input type="radio" id="two" value="No" v-model="newItem.equipmentoperative">
                  <label for="two">No</label>
              </div>
          </div>

          <div class="form-group">
            <label class="label">Do I know about presence of other people (equipment) at my work area and do they now about my presence at work area?</label>
              <div class="ex-radio">
              <input type="radio" id="one" value="Yes" v-model="newItem.peoplepresense">
                  <label for="one">Yes</label>
                </div>
              <div class="ex-radio">
              <input type="radio" id="two" value="No" v-model="newItem.peoplepresense">
                  <label for="two">No</label>
                </div>
              
          </div>


          <div class="form-group">
            <label for="itemhazard">Hazards:</label>
              <textarea class="form-control" v-model="newItem.hazard" id="itemhazard" placeholder="Describe hazards. Take into account all power sources and lethal risks!"></textarea>
          </div>

          <div class="form-group">
            <label for="itemcontrol">Means of control:</label>
            
              <textarea class="form-control" v-model="newItem.control" value="" rows="7" id="itemcontrol" placeholder="Describe control measures. Consider: 
              Elimination
              Replacement
              Technical solution
              Management
              PPE"></textarea>
          </div>

          <div class="form-group">
            <label for="itemquery">Comments:</label>
              <textarea class="form-control" v-model="newItem.query" id="itemquery" placeholder="Enter your message" value=""></textarea>
          </div>

          
          <div class="form-group">
            <label for="itemdate">Date: </label>
            <date-picker v-model="newItem.date" id="itemdate" format="DD-MM-YYYY"></date-picker>
          </div>
            

          
          <div class="form-group">
            <input type="submit" value="Submit" class="btn btn-primary">
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../config/db";
import DatePicker from "vue-pikaday-component";

export default {
  name: "AddItem",
  firebase: {
    items: db.ref("items")
  },
  components: {
    DatePicker
  },
  data() {
    return {
      newItem: {
        name: "",
        surname: "",
        phone: "",
        task: "",
        workplace: "",
        reporttype: "",
        donebefore: "",
        understandrule: "",
        havepermit: "",
        emergencyrule: "",
        fellanddrop: "",
        ppecomply: "",
        isolate: "",
        equipmentoperative: "",
        peoplepresense: "",
        hazard: "",
        control: "",
        date: null,
        query: ""
      }
    };
  },
  methods: {
    addItem() {
      this.$firebaseRefs.items.push({
        name: this.newItem.name,
        surname: this.newItem.surname,
        phone: this.newItem.phone,
        task: this.newItem.task,
        workplace: this.newItem.workplace,
        reporttype: this.newItem.reporttype,
        donebefore: this.newItem.donebefore,
        understandrule: this.newItem.understandrule,
        havepermit: this.newItem.havepermit,
        emergencyrule: this.newItem.emergencyrule,
        fellanddrop: this.newItem.fellanddrop,
        ppecomply: this.newItem.ppecomply,
        isolate: this.newItem.isolate,
        equipmentoperative: this.newItem.equipmentoperative,
        peoplepresense: this.newItem.peoplepresense,
        hazard: this.newItem.hazard,
        control: this.newItem.control,
        date: this.newItem.date,
        query: this.newItem.query
      });
      this.newItem.name = "";
      this.newItem.surname = "";
      this.newItem.phone = "";
      this.newItem.task = "";
      this.newItem.workplace = "";
      this.newItem.reporttype = "";
      this.newItem.donebefore = "";
      this.newItem.understandrule = "";
      this.newItem.havepermit = "";
      this.newItem.emergencyrule = "";
      this.newItem.fellanddrop = "";
      this.newItem.ppecomply = "";
      this.newItem.isolate = "";
      this.newItem.equipmentoperative = "";
      this.newItem.peoplepresense = "";
      this.newItem.hazard = "";
      this.newItem.control = "";
      this.newItem.query = "";
      this.newItem.date = "";
      this.$router.push("/index");
    }
  }
};
</script>



<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  h3 {
    font-family: "Roboto", sans-serif;
    color: #0d326e;
    margin-bottom: 24px;
    font-weight: bold;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: #0d326e;
    margin-bottom: 14px;
    font-weight: bold;
  }

  img {
    width: 100%;
    max-width: 300px;
    display: block;
    max-height: 100px;
    object-fit: cover;
    margin: 32px auto 64px;
  }
</style>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  $color1: #f4f4f4;
  $color2: #3197ee;

  .form {
    .label {
      color: #0d326e;
    }

    /*
        ==========================
        checkboxes & radio buttons
        ==========================
      */
    .ex-checkbox,
    .ex-radio {
      position: relative;
      margin: 12px 0;
      font-size: 14px;
    }

    .ex-checkbox label,
    .ex-radio label {
      padding-left: 32px;
      line-height: 140%;
      font-weight: normal;
      display: inline-block;
      position: relative;
    }

    .ex-checkbox input[type="checkbox"],
    .ex-radio input[type="radio"] {
      margin: 0;
      opacity: 0;
      cursor: pointer;
      width: 20px;
      height: 20px;
      z-index: 10;
      position: absolute;
    }

    /*
        ==========================
        radio buttons
        ==========================
      */
    .ex-radio input[type="radio"] + label::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      left: 0;
      border: 1px solid #9f9f9f;
      border-radius: 50%;
      background-color: #fff;
      transition: border 0.3s ease-in-out;
    }

    .ex-radio input[type="radio"]:hover + label::before {
      border: 2px solid #0288d1;
    }

    .ex-radio input[type="radio"]:focus + label::before {
      box-shadow: 0 0 1px #0288d1;
      outline: none;
    }

    .ex-radio input[type="radio"]:checked + label::before,
    .ex-radio input[type="radio"]:checked:hover + label::before {
      border: 1px solid #0288d1;
    }

    .ex-radio input[type="radio"] + label::after {
      position: absolute;
      content: " ";
      width: 12px;
      height: 12px;
      left: 4px;
      top: 4px;
      border-radius: 50%;
      background-color: #ffffff;
      transform: scale(0, 0);
      transition: transform 0.3s ease-in-out;
    }

    .ex-radio input[type="radio"]:checked + label::after {
      background-color: #0288d1;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    .ex-radio input[type="radio"]:disabled {
      cursor: not-allowed;
    }

    .ex-radio input[type="radio"]:disabled + label {
      color: #bcbcbc;
      cursor: not-allowed;
    }

    .ex-radio input[type="radio"]:disabled + label::before,
    .ex-radio input[type="radio"]:checked:disabled + label::before {
      border: 1px solid #bcbcbc;
    }

    .ex-radio input[type="radio"]:checked:disabled + label::after {
      background-color: #bcbcbc;
    }

    .input,
    .textarea {
      border: none;
    }
    .option {
      border: none;
    }

    h2 {
      color: #69b0e1;
    }

    h3 {
      color: #0d326e;
    }

    .help {
      opacity: 0;
      height: 100%;
      max-height: 1px;
      transition: all 0.3s ease-in-out;
    }

    .visible {
      opacity: 1;
      max-height: 100%;
    }

    .form-sent {
      margin: 0 0 32px;
    }
  }
</style>

<style lang="scss" scoped>
  $color1: #f4f4f4;
  $color2: #3197ee;

  .form-group {
    .label {
      color: #0d326e;
    }

    /*
        ==========================
        checkboxes & radio buttons
        ==========================
      */
    .ex-checkbox,
    .ex-radio {
      position: relative;
      margin: 12px 0;
      font-size: 14px;
    }

    .ex-checkbox label,
    .ex-radio label {
      padding-left: 32px;
      line-height: 140%;
      font-weight: normal;
      display: inline-block;
      position: relative;
    }

    .ex-checkbox input[type="checkbox"],
    .ex-radio input[type="radio"] {
      margin: 0;
      opacity: 0;
      cursor: pointer;
      width: 20px;
      height: 20px;
      z-index: 10;
      position: absolute;
    }

    /*
        ==========================
        radio buttons
        ==========================
      */
    .ex-radio input[type="radio"] + label::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      left: 0;
      border: 1px solid #9f9f9f;
      border-radius: 50%;
      background-color: #fff;
      transition: border 0.3s ease-in-out;
    }

    .ex-radio input[type="radio"]:hover + label::before {
      border: 2px solid #0288d1;
    }

    .ex-radio input[type="radio"]:focus + label::before {
      box-shadow: 0 0 1px #0288d1;
      outline: none;
    }

    .ex-radio input[type="radio"]:checked + label::before,
    .ex-radio input[type="radio"]:checked:hover + label::before {
      border: 1px solid #0288d1;
    }

    .ex-radio input[type="radio"] + label::after {
      position: absolute;
      content: " ";
      width: 12px;
      height: 12px;
      left: 4px;
      top: 4px;
      border-radius: 50%;
      background-color: #ffffff;
      transform: scale(0, 0);
      transition: transform 0.3s ease-in-out;
    }

    .ex-radio input[type="radio"]:checked + label::after {
      background-color: #0288d1;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    .ex-radio input[type="radio"]:disabled {
      cursor: not-allowed;
    }

    .ex-radio input[type="radio"]:disabled + label {
      color: #bcbcbc;
      cursor: not-allowed;
    }

    .ex-radio input[type="radio"]:disabled + label::before,
    .ex-radio input[type="radio"]:checked:disabled + label::before {
      border: 1px solid #bcbcbc;
    }

    .ex-radio input[type="radio"]:checked:disabled + label::after {
      background-color: #bcbcbc;
    }

    .input,
    .textarea {
      border: none;
    }
    .option {
      border: none;
    }

    h2 {
      color: #69b0e1;
    }

    h3 {
      color: #0d326e;
    }

    .help {
      opacity: 0;
      height: 100%;
      max-height: 1px;
      transition: all 0.3s ease-in-out;
    }

    .visible {
      opacity: 1;
      max-height: 100%;
    }

    .form-sent {
      margin: 0 0 32px;
    }
  }
</style>
