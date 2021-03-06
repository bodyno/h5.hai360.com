import React, { Component } from 'react'
import classes from './helpDetail.scss'

export default class extends Component{
  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>常见问题</h1>
        <div className={classes.info}>
          <h3>优惠券类型</h3>
          <p className={classes.noti}>1、按使用方式：<br/>      a. 个人优惠券：直接与用户账号绑定，在“用户中心”—“优惠券”可查看；<br/>      b. 公共优惠券：在广告或活动页面获取到优惠券兑换码，不与账号绑定，在提交订单页面输入优惠券兑换码使用。<br/>      2、按适用范围：<br/>      a. 通用优惠券：购买Hai360海外购网站上所有正价商品均可使用，部分特价特殊商品除外；<br/>      b. 商家优惠券：购买优惠券所指定的商家的商品可使用，部分特价特殊商品除外；<br/>      c.类目优惠券：购买优惠券所指定的类目商品可使用，部分特价特殊商品除外；<br/>      d.商品包优惠券：购买优惠券所指定的商品包商品可使用，部分特价特殊商品除外。<br/>      （不同适用范围的优惠券，不可混合使用）</p>
          <h3>如何获得优惠券？</h3>
          <p className={classes.noti}>1、购物返券<br/>      根据具体活动细则，购物后赠送用户优惠券，可以在 “用户中心”—“优惠券” 中查询优惠券。<br/>      2、活动赠送<br/>      根据具体活动细则，直接赠送用户优惠券，可以”用户中心”—“优惠券”中查询优惠券。<br/>      3.、公用优惠券<br/>      通过线下广告单或线上活动页面领取到优惠码，需要用户自己保存，在下单页面输入使用。</p>
          <h3>个人优惠券</h3>
          <p className={classes.noti}>1、个人优惠券<br/>      如果您的账户中有可用的优惠券，在订单提交页面，可在“使用优惠券”区域勾选使用；<br/>      2、公共优惠券<br/>      由于公共优惠券不与账户绑定，所以在订单提交页面，“使用优惠券”区域输入相应的优惠券兑换码即可使用。</p>
          <h3>优惠券使用细则：</h3>
          <p className={classes.noti}>1.在使用优惠券之前您需要了解您的优惠券类型和使用范围（我们会在具体活动细则中说明或者您也可以在“用户中心”—“优惠券”中查看）；通用优惠券一次提交订单限用一张；商家优惠券每个商家限用一张；两种优惠券不可混合使用；<br/>      2.一个订单只能使用一张通用优惠券，且不可再用其他优惠券；<br/>      3.一次提交订单中，如果有多个商家的，每个商家只能分别使用一张商家优惠券，同时不能再使用其他优惠券；<br/>      4.优惠券在规定的有效期之内使用，且不予兑现。过期则无法继续使用该券；<br/>      5.优惠券在提交订单的时候使用。提交订单之后，如果您在付款之前自行取消了订单, 或者在付款成功后，订单还未审核通过时取消了订单，且该优惠券仅被使用在一个订单上，则在订单取消后优惠券可自动释放到您的账户。否则，订单上所使用的优惠券将不予返还，给您带来的不便敬请谅解；<br/>      6.若优惠券的金额大于订单金额，则差额不予退回；<br/>      7.使用优惠券支付的订单，若申请退款，退款金额按照实际支付金额退款。若部分商品取消，系统将按商品售价所占订单金额比例退款；<br/>      8.公共优惠券不得在同一账号重复使用；<br/>      9.取消订单后，若系统返还的优惠券已超过原优惠券的有效期，系统将会为您延长一周的使用期限。延长期限仅限一次，不可再次延期；<br/>      10.Hai360上的优惠券仅提供给普通消费者使用，如发现有经销商使用优惠券，Hai360有权取消该订单并给予相关处理；<br/>      11.Hai360所发放的优惠券严禁转让或者出售，一经发现并证实，将对该优惠劵以作废处理；<br/>      12.参与购物返券活动所获得的优惠券，如果发生退货且不符合该活动的规则，Hai360有权取消该优惠券的使用。</p>
        </div>
      </div>
    )
  }
}