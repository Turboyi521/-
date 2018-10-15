/*
包含n个用于直接更新状态数据方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'

export default {

  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },


  [INCREMENT_FOOD_COUNT](state, {goods}) {
   if(food.count){
     food.count++
   }else{
     Vue(food,'count',1)//新添加的属性有数据绑定---界面就会更新
   }
  },
  [DECREMENT_FOOD_COUNT](state, {goods}) {
    if(food.count){
      food.count--
      if(food.count===0){//如果购物车的数量为0，从购物车中删除
        state.shopCart.splice( state.shopCart.indexOf(food),1)

      }
    }
  },

}
