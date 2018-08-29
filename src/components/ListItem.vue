<template>
  <div class="container-fluid h-100 d-flex flex-column">
      <h4>SLAM's List </h4>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <form class="form-inline input-group-sm mb-3">
      <input v-model="itemFilter" type="search" class="form-control mr-sm-2" placeholder="Search by name" aria-label="Search">
    </form>
      <table class="rg-table">
        <thead>
          <tr>
            <th @click="sort('name')">Name</th>
            <th @click="sort('surname')">Surname</th>
            <th @click="sort('date')">Date</th>
            <th>Task</th>
            <th @click="sort('workplace')">Workplace</th>
            <th @click="sort('reporttype')">Report type</th>
            <th>Hazard</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sortedItems">
          
            <td data-title="Name:">{{item.name}}</td>
            <td data-title="Surname:">{{item.surname}}</td>
            <td data-title="Date:">{{item.date}}</td>
            <td data-title="Task:">{{item.task}}</td>
            <td data-title="Workplace:">{{item.workplace}}</td>
            <td data-title="Report type:">{{item.reporttype}}</td>
            <td data-title="Hazard:">{{item.hazard}}</td>
            
            <td class="text-center">
                <div class="btn-group btn-group-justified">
                  <router-link :to="{name: 'Edit', params: {id: item['.key']}}" class="btn btn-warning"><i class="fa fa-edit"></i></router-link>
                  <router-link :to="{name: 'View', params: {id: item['.key']}}" class="btn btn-primary"><i class="fa fa-eye"></i></router-link>
                  <button @click="deleteItem(item['.key'])" class="btn btn-danger"><i class="fa fa-trash-alt"></i></button>
                </div>
              </td>
          </tr>
        </tbody>
        <caption>Total S.L.A.M.'s: {{ items.length }}</caption>
      </table>
      <nav aria-label="...">
        <ul class="pagination pagination-sm justify-content-center">
          <li class="page-item" @click="prevPage"><a class="page-link">Previous</a></li> 
          <li class="page-item" @click="nextPage"><a class="page-link">Next</a></li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<script>
  import { db } from "../config/db";

  export default {
    name: "ListItem",
      components: {
      },
      data() {
        return {
          items: [],
          currentSort:'name',
          currentSortDir:'asc',
          pageSize:10,
          currentPage:1,
          total: 0,
          itemFilter:''};
          },
          firebase: {
            items: db.ref("items")
          },
          computed:{
            sortedItems:function() {
              let filter = this.itemFilter.toLowerCase();
              let myItems = this.items.filter((row,index) => {
                if(this.itemFilter === '' || this.items[index].name.toLowerCase().indexOf(filter) >= 0) return true;
                return false;
              });
              
              return myItems.sort((a,b) => {
                let modifier = 1;
                if(this.currentSortDir === 'desc') modifier = -1;
                if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
                }).filter((row, index) => {
                let start = (this.currentPage-1)*this.pageSize;
                let end = this.currentPage*this.pageSize;
                if(index >= start && index < end) return true;
              });
            }
          },
          methods:{
            deleteItem(key) {
              this.$firebaseRefs.items.child(key).remove();
            },
            sort:function(s) {
              //if s == current sort, reverse
              if(s === this.currentSort) {
                  this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
                }
                this.currentSort = s;
            },
            nextPage:function() {
              if((this.currentPage*this.pageSize) < this.items.length) this.currentPage++;
            },
            prevPage:function() {
              if(this.currentPage > 1) this.currentPage--;
            }
          }
  };
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  body  {
    font-size: 14px;
  }

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

  btn {
    margin: 2px;
  }
</style>

<style scoped>
        /** @charset "UTF-8";*/
      table.thead {
      background-color: #0d326e rgba(255,255,255,0.3);
    }

    /* table */
    table.rg-table {
      width: 100%;
      margin-bottom: 0.5em;
      font-size: 1em;
      border-collapse: collapse;
      border-spacing: 0;
    }
    table.rg-table tr {
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: center;
      text-align: left;
      color: #333;
    }
    table.rg-table thead {
      border-bottom: 3px solid #ddd;
      background-color: #0d326e;
    }
    table.rg-table tr {
      border-bottom: 1px solid #ddd;
      color: #222;
    }
    table.rg-table tr.highlight {
      background-color: #dcf1f0 !important;
    }
    table.rg-table.zebra tr:nth-child(even) {
      background-color: #f6f6f6;
    }
    table.rg-table th {
      font-weight: bold;
      padding: 0.35em;
      font-size: 0.9em;
      color: #fff;
      background-color: #0d326e; /* -webkit-linear-gradient(left, #2196f3 , #8DC26F); /* For Safari 5.1 to 6.0 */
        background: #0d326e; /* -o-linear-gradient(right, #2196f3, #8DC26F); /* For Opera 11.1 to 12.0 */
        background: #0d326e; /* -moz-linear-gradient(right, #00A65A); /* For Firefox 3.6 to 15 */
        background-color: #0d326e; /* linear-gradient(right, #00A65A); /* Standard syntax (must be last) */
    }
    table.rg-table td {
      padding: 0.35em;
      font-size: 0.9em;
    }
    table.rg-table .highlight td {
      font-weight: bold;
    }
    table.rg-table th.number, td.number {
      text-align: right;
    }

    /* media queries */
    @media screen and (max-width: 600px) {
    .rg-container {
      max-width: 600px;
      margin: 0 auto;
    }
    table.rg-table {
      width: 100%;
    }
    table.rg-table tr.hide-mobile, table.rg-table th.hide-mobile, table.rg-table td.hide-mobile {
      display: none;
    }
    table.rg-table thead {
      display: none;
    }
    table.rg-table tbody {
      width: 100%;
    }
    table.rg-table tr, table.rg-table th, table.rg-table td {
      display: block;
      padding: 0;
    }
    table.rg-table tr {
      border-bottom: none;
      margin: 0 0 1em 0;
      padding: 0.5em;
    }
    table.rg-table tr.highlight {
      background-color: inherit !important;
    }
    table.rg-table.zebra tr:nth-child(even) {
      background-color: none;
    }
    table.rg-table.zebra td:nth-child(even) {
      background-color: #f6f6f6;
    }
    table.rg-table tr:nth-child(even) {
      background-color: none;
    }
    table.rg-table td {
      padding: 0.5em 0 0.25em 0;
      border-bottom: 1px dotted #ccc;
      text-align: right;
    }
    table.rg-table td[data-title]:before {
      content: attr(data-title);
      font-weight: bold;
      display: inline-block;
      content: attr(data-title);
      float: left;
      margin-right: 0.5em;
      font-size: 0.95em;
    }
    table.rg-table td:last-child {
      padding-right: 0;
      border-bottom: 2px solid #ccc;
    }
    table.rg-table td:empty {
      display: none;
    }
    table.rg-table .highlight td {
      background-color: inherit;
      font-weight: normal;
    }
    }
  
  table, th, td {
   cursor:default;
   user-select: none;
  }
  
  
  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }

</style>