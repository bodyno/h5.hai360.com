import React, { Component } from 'react'
import classes from './helpDetail.scss'

export default class extends Component{

  componentDidMount(){
    document.title = '服务声明'
  }

  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>服务声明</h1>
        <div className={classes.info}>
          <h3>1、闪电清关：</h3>
          <p>优质物流渠道，海外直邮，快速清关，保障物流配送时效。</p>
          <h3>2、先行赔付：</h3>
          <p>在Hai360海外购购物，当发生物品损坏，丢失，发错货等情况时，我们在确认无误后，无论海外商家是否给出处理结果，我们均会先行进行赔付，让您免去等待之忧。</p>
          <h3>3、七天无忧退货：</h3>
          <p>Hai360海外购提供“7天无忧退货”服务，即自您收到商品之日起（以签收日期为准），可在7日内申请退货。详见退换货服务政策。</p>
        </div>
      </div>
    )
  }
}