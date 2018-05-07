<template>
  <div class="pos">
    <el-row>
      <!--点餐栏-->
        <el-col :span="7" class="pos-order" id="order-list">
          <el-tabs type="border-card">
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="goodsName" label="商品名称">

                </el-table-column>
                <el-table-column prop="count" label="数量" width="50">

                </el-table-column>
                <el-table-column prop="price" label="金额" width="70">

                </el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">
                      删除
                    </el-button>
                    <el-button type="text" size="small" @click="addOraderList(scope.row)">
                      增加
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="totalDiv">
                <span>数量:{{totalCount}}</span>
                <span>金额:{{totalMoneny}}元</span>
              </div>
              <div class="div-btn">
                <el-button type="warning" size="small">挂单</el-button>
                <el-button type="danger" size="small" @click="delAll()">删除</el-button>
                <el-button type="success" size="small" @click="checkOut()">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--产品栏-->
      <el-col :span="17" class="pos-often">
        <!--常用商品-->
          <div class="often-goods">
            <h3 class="title">常用商品</h3>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in goodsList" @click="addOraderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}</span>
                </li>
              </ul>
            </div>
          </div>
        <!--分类-->
          <div class="goods-type">
            <el-tabs type="border-card">
              <el-tab-pane label="汉堡">
                <div>
                  <ul class="cookList">
                    <li v-for="goods in type0goods" @click="addOraderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                      <div style="float: left;width: 60%;text-align: left">
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <div>
                  <ul class="cookList">
                    <li v-for="goods in type1goods" @click="addOraderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                      <div style="float: left;width: 60%;text-align: left">
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <div>
                  <ul class="cookList">
                    <li v-for="goods in type2goods" @click="addOraderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                      <div style="float: left;width: 60%;text-align: left">
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <div>
                  <ul class="cookList">
                    <li v-for="goods in type3goods" @click="addOraderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"/></span>
                      <div style="float: left;width: 60%;text-align: left">
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
    </el-row>


  </div>
</template>

<script>
  import axios from 'axios';
  export default {

    name: 'pos',
    data(){
      return {
        tableData: [],
        goodsList:[],
        type0goods:[],
        type1goods:[],
        type2goods:[],
        type3goods:[],
        totalMoneny:0,
        totalCount:0
      }
    },
    created:function () {
//      常用产品
      axios.get("http://jspang.com/DemoApi/oftenGoods.php")
//        成功了
        .then(reponse=>{
          console.log(reponse);
          this.goodsList=reponse.data;
        })
//        失败了
        .catch(error=>{
          alert("网络错误，不能访问")
        })
//产品分类
      axios.get("http://jspang.com/DemoApi/typeGoods.php")
      //        成功了
        .then(reponse=>{
//          console.log(reponse);
          this.type0goods=reponse.data[0];
          this.type1goods=reponse.data[1];
          this.type2goods=reponse.data[2];
          this.type3goods=reponse.data[3];
        })
        //        失败了
        .catch(error=>{
          alert("网络错误，不能访问")
        })
    },
    mounted:function () {
      var orderHeiht=document.body.clientHeight;
      document.getElementById("order-list").style.height=orderHeiht+"px";
    },
    methods:{
//     @ 增加
      addOraderList(goods){
        this.totalMoneny=0;
        this.totalCount=0;
//        商品是否已经存在于订单列表中
        let isHave=false;
        for(let i=0;i<this.tableData.length;i++){
          if(this.tableData[i].goodsId==goods.goodsId){
            isHave=true;
          }
        }
//        根据判断的值编写业务逻辑
        if(isHave){
//          改变列表中商品的数量
          let arr = this.tableData.filter( x=>x.goodsId == goods.goodsId);
          arr[0].count++;

        }else {
//          不存在就推入数组
          let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
          this.tableData.push(newGoods);
        }
//
        this.getAllMoneny();
      },
//      @删除单个商品
      delSingleGoods(goods){
       this.tableData=this.tableData.filter(o=>o.goodsId != goods.goodsId);
       this.getAllMoneny();
      },
//      @删除所有商品
      delAll(){
        this.tableData=[];
        this.totalCount=0;
        this.totalMoneny=0;
      },
//      @模拟结账
      checkOut(){
        if(this.totalCount != 0){
          this.delAll();
          this.$message({
            message:'结账成功！',
            type:'success'
          })
        }else {
          this.$message.error('不能空结账')
        }
      },
//      汇总数量金额
      getAllMoneny(){
        this.totalCount=0;
        this.totalMoneny=0;
        this.tableData.forEach((element)=>{
          this.totalCount+=element.count;
          this.totalMoneny=this.totalMoneny+(element.price*element.count);
        })
      }
    }

  }
</script>

<style scoped>
  .pos-order{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
  }
  .div-btn{
    margin-top: 10px;
  }
  .pos-often{
    background-color:;
  }
  .title{
    height: 20px;
    border-bottom: 1px solid #D3dce6;
    background-color: #f9fafc;
    padding: 10px;
    margin: 0;
    text-align: left;
    font-size: 16px;
    font-weight: normal;
  }
  .totalDiv{
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .often-goods-list ul li{
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    background-color: #ffffff;
    margin: 10px;
    cursor: pointer;
  }
  .o-price{
    color: #58b7ff;
  }
  .goods-type{
    clear: both;

  }
  .cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;

  }
  .cookList li span{

    display: block;

  }
  .foodImg{
    width: 40%;
    float:left;
  }
  .foodName{
    font-size: 16px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }
</style>
