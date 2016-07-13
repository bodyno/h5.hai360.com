import React, { Component } from 'react'
import classes from './helpDetail.scss'
import { Link } from 'react-router'

export default class extends Component{

  componentDidMount(){
    document.title = '退货服务'
  }

  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>退货服务政策</h1>
        <div className={classes.info}>
          <h2>
            由于跨境购物环节较多、物流周期较长，难免出现物品损坏、丢件、货物错误等异常情况，为保障用户利益，Hai360承诺，7天内（自商品签收之日起），无论海外商家对问题订单如何处理，用户可以申请“异常订单赔偿”或“无忧退货”，免除您的海外购物后顾之忧。</h2>
          <h3>1、退货服务规则：</h3>
          <p className={classes.noti}>Hai360海外购提供“7天无忧保障”服务，即保障范围内的商品，自您收到商品之日起（以签收日期为准），在不影响二次销售的情况下，可在7天内申请赔偿或退货。<br/>
            以下情况将不提供赔偿或退货服务：<br/> 1、任何非Hai360海外购出售的商品；<br/> 2、任何已使用或已穿着的商品（三包认定的质量问题除外）；<br/>
            3、回寄检查无原包装或吊牌丢失，仅剩商品的；<br/> 4、任何因非三包认定的非质量问题商品（包括但不限于：非正常使用及保管、非正常清洁等情况而出现质量问题的商品）；<br/>
            5、因海淘的特殊性，本站海外直邮的【内衣、睡衣、袜子（等贴身衣物）】、【电子类产品】、【1000元以上的服饰、箱包、鞋靴等轻奢品】、【食品】一经出售，非质量问题不支持7天无理由退换货；<br/>
            6、特卖商品不在此退货范围之内，特卖保税仓产品一经出售非质量问题不予退货；<br/>
          </p>
          <h3>2、退货服务条款：</h3>
          <p className={classes.noti}>
            Hai360海外购郑重承诺：如商品未经使用和穿着且无商品质量问题；商品及外包装保持海外商家出售时的原状；商品吊牌及配件齐全，我们为客户提供“7天无忧退货”的便捷退货服务。<br/> 退货规则如下：<br/> 1.
            如由于商品运输破损，可全额退款且退回商品的运费由Hai360承担（商品寄回运费先由客户垫付，我们接到商品确认破损后，将为您报销商品寄回运费，hai360海外购不接收到付件）；<br/> 2.
            如因款式、颜色、尺码等个人喜好原因产生的退货，在未使用且无质量问题情况下商品寄回运费以及关税由客户自行承担不予以退回；如未明确标明关税，则参考海关规定的税率来扣除，一般商品税率为10%，手表类20%，化妆品类50%(参考海关行邮税税率规定)，<span
            style={{'color': '#444444'}}>退款金额=实付金额-全程运费-商品金额*税率</span>（注：无最低50税额限制）。<Link to="/help/custom">海关税率规定链接>></Link>举例：
            某个衣服商品订单：商品金额为400元，运费为30元，总订单金额为430元，海关规定衣服的税率为20%相应税额为80元，则退款金额320元。<br/> 3. 使用优惠券部分不退；<br/> 4.
            其他特别注明的除外。<br/></p>
          <h3>3、退货流程</h3>
          <p>商品签收后7天内，发送邮件到客服邮箱<a href="mailto:kf@hai360.com">kf@hai360.com</a>；或联系在线客服，填写退货申请，附上物品异常相关照片等信息，并将商品带原包装一起寄回到以下地址：<br/>
            深圳市南山区桃园路西海明珠F栋2511-2515室 ，联系电话：4007-888-280，收货人：客服部。<br/>
            请在包裹内附上纸条备注订单编号，寄出后请告知快递单号，回寄时请勿使用EMS、顺丰等。非您个人原因导致的退换货，hai360将补偿运费（EMS、顺丰只报销10元），谢谢！<br/><a
              href="http://help.hai360.com/wp-content/uploads/2015/10/退货流程_03.png"><img
              style={{'dislay': 'block', 'margin': '20px auto'}}
              src="http://help.hai360.com/wp-content/uploads/2015/10/退货流程_03.png" width="728" height="237"
              class="alignnone wp-image-470 size-full"/></a><br/>
            Hai360海外购进行核实后，将在3-7个工作日内退还相应款项到您的付款账户，以发卡行最终退款时间为准。<br/> *Hai360海外购暂不支持换货服务，望您谅解。<br/></p>
        </div>
      </div>
    )
  }
}