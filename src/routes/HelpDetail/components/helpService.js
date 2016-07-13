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
          <h4>消费者告知书</h4>
          <p className={classes.noti}>尊敬的客户：<br/>      您好！<br/>      在您选购境外商品前，麻烦您仔细阅读此文，同意本文所告知内容后再进行下单购买：<br/>      1、您在本（公司）网站上购买的境外商品为产地直销商品，仅限个人自用不得进行销售，商品本身可能无中文标签，您可以查看网站的翻译或在线联系我们的客服。<br/>      2、您购买的境外商品适用的品质、健康、标识等项目适用标准或与我国标准有所不同，所以在使用过程中由此可能产生的危害或损失以及其他风险，将由您个人承担。<br/><br/><span class="tr">谢谢<br/>        深圳市淘海科技有限公司<br/></span></p>
        </div>
      </div>
    )
  }
}