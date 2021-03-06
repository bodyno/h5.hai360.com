import React, { Component } from 'react'
import classes from './helpDetail.scss'

export default class extends Component{

  componentDidMount(){
    document.title = '正品保障'
  }

  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>100%正品保障</h1>
        <div className={classes.info}>
          <h3>精选优质海外商家</h3>
          <p>综合评估接入的海外商家，精选具有完善正品保障体系的商家作为平台对接电商平台，其中包括Amazon.com、6pm、Vitacost、GNC、Beauty等具有全球知名度的大型电商平台；<img src="http://act.hai360.com/uploads/allimg/140324/2-140324143133455.jpg" alt=""/></p>
          <h3>全程物流跟踪</h3>
          <p>商品自Hai360订单提交开始，直到用户收到商品，全程物流跟踪，用户可以通过网站、APP实时跟进订单状态。<br/><img src="http://help.hai360.com/wp-content/uploads/2014/10/zpic2.jpg" alt="zpic2" width="680" height="340" class="alignnone size-full wp-image-160"/></p>
          <h3>为什么海外正品价格比国内低？</h3>
          <p className={classes.noti}>1、 精选的平台，订货量大，所以可以获得较低的品牌供货价，如Amazon.com具有最低的正品价全球闻名；<br/>      2、 商品清关低关税<br/>      根据海关相关规定，个人自用的商品，只需要征收行邮税，行邮税税率低，部分商品如服装一般都可以免征税；相比进口的商用商品需要缴纳关税和商业增值税，一般在17%-60%；<br/>      3、 省去中间环节：<br/>      国外品牌商品，通过国内流通渠道，层层代理，到终端销售时价格包含各中间环节的各种费用，所以售价会较高，Hai360省去中间环节，直接通过海外商家供货，并实时汇率核算商品价格。</p>
        </div>
      </div>
    )
  }
}