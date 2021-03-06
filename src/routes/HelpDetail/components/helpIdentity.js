import React, { Component } from 'react'
import classes from './helpDetail.scss'

export default class extends Component{

  componentDidMount(){
    document.title = '身份证说明'
  }

  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>身份证说明</h1>
        <div className={classes.info}>
          <h3>1、为什么需要上传身份证</h3>
          <p>根据《中华人民共和国海关对进出境快件监管办法》，第二十二条规定：个人物品类进出境快件报关时， 运营人应当向海关提交《中华人民共和国海关进出境快件个人物品申报单》、每一进出境快件的分运单、进境快件收件人或出境快件发件人身份证件影印件和海关需要的其它证件。为配合海关完成清关，让您的货物能尽快送达，在Hai360通知您上传身份证后，请在1-2个工作日内提供您收件人身份证信息。</p>
          <h3>2、Hai360如何确保您的信息安全？</h3>
          <p>您的身份证信息仅用于海关清关审核与验证信息，hai360身份证系统直接和海关系统对接，信息将严格保密，不用于其他用途。为确保个人信息安全，建议在提供的个人身份证图片中增加水印如“仅供海关清关使用”的文字，但添加文字不可遮挡住身份证图片上的任何可读信息。</p>
          <h3>3、海关身份证图片要求：</h3>
          <p className={classes.noti}>a) 收货人真实姓名和证件号码与提交的证件信息一致；<br/>      b) 身份证照片增加水印如“仅供清关使用”，添加文字不可遮挡住身份证图片上的任何可读信息，且不能出现“XXX无效”字样（如下图）；<br/>      c) 身份证正反面文件，图片清晰，文字可辨别，身份证比例不可变形，不得涂改，并确保四边角完整；<br/>      e) 需为电子版（建议您将身份证件照的正反两面拍照或者扫描）复印或者传真无效；<br/>      f) 所有身份证或临时身份证必须在有效期内。<br/>      以下为符合海关要求的身份证示例：<br/><img src="http://help.hai360.com/wp-content/uploads/2014/10/sfz1.jpg" alt="sfz1" width="720" height="445" class="alignnone size-full wp-image-152"/></p>
        </div>
      </div>
    )
  }
}