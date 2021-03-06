import React, { Component } from 'react'
import classes from './helpDetail.scss'

export default class extends Component{

  componentDidMount(){
    document.title = '尺码对照表'
  }

  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>尺码对照表</h1>
        <div className={classes.info}>
          <h1 className={classes.maintitle2}>女装</h1>
          <h3>女装上衣尺寸：</h3>
          <div className={classes.answer}>
            <div className={classes.table}>
              <table border="0" width="680" cellspacing="0" cellpadding="0" className={classes.inchtab}>
                <tbody>
                <tr>
                  <th>标准</th>
                  <th>国际</th>
                  <th>美国</th>
                  <th>中国</th>
                  <th>欧洲</th>
                  <th>胸围</th>
                  <th>腰围</th>
                  <th>肩宽</th>
                  <th>适合身高</th>
                </tr>
                <tr>
                  <td rowSpan="8">尺码明细</td>
                  <td>XXXS</td>
                  <td>0</td>
                  <td>145/73A</td>
                  <td>30~32</td>
                  <td>74~76</td>
                  <td>58~60</td>
                  <td>34</td>
                  <td>147~150</td>
                </tr>
                <tr className={classes.htd}>
                  <td>XXS</td>
                  <td>0</td>
                  <td>150/76A</td>
                  <td>32~34</td>
                  <td>76~78</td>
                  <td>60~62</td>
                  <td>35</td>
                  <td>150~153</td>
                </tr>
                <tr>
                  <td>XS</td>
                  <td>2</td>
                  <td>155/80A</td>
                  <td>34</td>
                  <td>78~81</td>
                  <td>62~66</td>
                  <td>36</td>
                  <td>153~157</td>
                </tr>
                <tr className={classes.htd}>
                  <td>S</td>
                  <td>4~6</td>
                  <td>160/84A</td>
                  <td>34~36</td>
                  <td>82~85</td>
                  <td>67~70</td>
                  <td>38</td>
                  <td>158~162</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>8~10</td>
                  <td>165/88A</td>
                  <td>38~40</td>
                  <td>86~89</td>
                  <td>71~74</td>
                  <td>40</td>
                  <td>163~167</td>
                </tr>
                <tr className={classes.htd}>
                  <td>L</td>
                  <td>12~14</td>
                  <td>170/92A</td>
                  <td>42</td>
                  <td>90~93</td>
                  <td>75~79</td>
                  <td>42</td>
                  <td>168~172</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>16~18</td>
                  <td>175/96A</td>
                  <td>44</td>
                  <td>94~97</td>
                  <td>80~84</td>
                  <td>44</td>
                  <td>173~177</td>
                </tr>
                <tr className={classes.htd}>
                  <td>XXL</td>
                  <td>20~22</td>
                  <td>180/100A</td>
                  <td>46</td>
                  <td>98~102</td>
                  <td>85~89</td>
                  <td>45</td>
                  <td>177~180</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>女装裤子尺寸：<a name="2"></a></h3>
          <div className={classes.answer}>
            <div className={classes.table}>
              <table border="0" width="680" cellspacing="0" cellpadding="0" className={classes.inchtab}>
                <tbody>
                <tr>
                  <th>标准</th>
                  <th>国际</th>
                  <th colSpan="2">美国</th>
                  <th>中国</th>
                  <th>腰围(市尺)</th>
                  <th>腰围(cm)</th>
                  <th>臀围(市尺)</th>
                  <th>臀围(cm)</th>
                </tr>
                <tr>
                  <td rowSpan="9">尺码明细</td>
                  <td>XXXS</td>
                  <td>0</td>
                  <td>0</td>
                  <td>23</td>
                  <td>1尺6</td>
                  <td>55~57</td>
                  <td>2尺3</td>
                  <td>77~80</td>
                </tr>
                <tr className={classes.htd}>
                  <td>XXS</td>
                  <td>0</td>
                  <td>0</td>
                  <td>24</td>
                  <td>1尺7</td>
                  <td>57~60</td>
                  <td>2尺4</td>
                  <td>80~83</td>
                </tr>
                <tr>
                  <td>XS</td>
                  <td>2</td>
                  <td>1/2</td>
                  <td>25</td>
                  <td>1尺8</td>
                  <td>60</td>
                  <td>2尺5</td>
                  <td>83</td>
                </tr>
                <tr className={classes.htd}>
                  <td>S</td>
                  <td>4</td>
                  <td>3/4,5/6</td>
                  <td>26</td>
                  <td>1尺9</td>
                  <td>63</td>
                  <td>2尺6</td>
                  <td>87</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>6</td>
                  <td>7/8,9/10</td>
                  <td>27</td>
                  <td>2尺</td>
                  <td>67</td>
                  <td>2尺7</td>
                  <td>90</td>
                </tr>
                <tr className={classes.htd}>
                  <td>L</td>
                  <td>8</td>
                  <td>11/12,13/14</td>
                  <td>28</td>
                  <td>2尺1</td>
                  <td>70</td>
                  <td>2尺8</td>
                  <td>93</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>10</td>
                  <td>15/16</td>
                  <td>29</td>
                  <td>2尺2</td>
                  <td>73</td>
                  <td>2尺9</td>
                  <td>97</td>
                </tr>
                <tr className={classes.htd}>
                  <td>XXL</td>
                  <td>12</td>
                  <td>17/18</td>
                  <td>30</td>
                  <td>2尺3</td>
                  <td>77</td>
                  <td>3尺</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>XXXL</td>
                  <td>14</td>
                  <td>18/19</td>
                  <td>31</td>
                  <td>2尺4</td>
                  <td>80</td>
                  <td>3尺1</td>
                  <td>108</td>
                </tr>
                </tbody>
              </table>
            </div>      温馨提示：<br/>      英寸(in)=2.54CM / 英尺(ft)=30.48CM<br/>      海外商品实际上比标识尺码略大一些，敬请参考。<br/>      上述腰围指实际腰身尺寸，并不是裤子的尺码。<br/>      P码:是XS~XXS之间<br/>      部分裤装根据裤长不同，尺码上分为S r l，s为短板，r为正常版，l为加长版。<br/>
          </div>
          <h3>女鞋：</h3>
          <div className={classes.answer}><a href="http://help.hai360.com/wp-content/uploads/2015/09/国际女鞋尺码表.jpg"><img src="http://help.hai360.com/wp-content/uploads/2015/09/国际女鞋尺码表.jpg" alt="国际女鞋尺码表" width="634" height="312" class="alignnone size-full wp-image-460"/></a>      小码(S)、中码(M)、大码(L)标识的指S=5/6、M=7/8、L=9/10 尺码。<br/>      温馨提示：<br/>      尺码速查表内的尺寸为一般尺寸对比表，根据制造商不同存在一些差异。<br/>      该尺码速查标识的是普通的美国尺码，根据款式和品牌多少存在一些差异。<br/>      部分欧洲尺码和意大利尺码，没有半幅尺寸的请参考括号中的US尺码。<br/>      部分鞋码根据脚掌宽的不同分为N &lt; M &lt; W或者 AA &lt; A &lt; B &lt; C &lt; D；N/AA,A为瘦版；M/B,C为正常版；W/D为加肥版；EE为最大加肥版，适合亚洲人的脚面高的特点。<br/></div>
          <h1 className={classes.maintitle2}>男装</h1>
          <h3>男装便衣尺码换算表：<a name="4"></a></h3>
          <div className={classes.answer}>
            <div className={classes.table}>
              <table border="0" width="680" cellspacing="0" cellpadding="0"  className={classes.inchtab}>
                <tbody>
                <tr>
                  <th>标准</th>
                  <th>国际</th>
                  <th>美国</th>
                  <th>中国</th>
                  <th>欧洲</th>
                  <th>胸围(cm)</th>
                  <th>腰围(cm)</th>
                  <th>肩宽(cm)</th>
                  <th>适合身高(cm)</th>
                </tr>
                <tr className={classes.htd}>
                  <td rowSpan="6">尺码明细</td>
                  <td>S</td>
                  <td>36</td>
                  <td>160/80A</td>
                  <td>46</td>
                  <td>82~85</td>
                  <td>72~75</td>
                  <td>42</td>
                  <td>163~167</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>38</td>
                  <td>170/84A</td>
                  <td>48</td>
                  <td>86~89</td>
                  <td>76~79</td>
                  <td>44</td>
                  <td>168~172</td>
                </tr>
                <tr className={classes.htd}>
                  <td>L</td>
                  <td>40</td>
                  <td>175/88A</td>
                  <td>50</td>
                  <td>90~93</td>
                  <td>80~84</td>
                  <td>46</td>
                  <td>173~177</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>42</td>
                  <td>180/92A</td>
                  <td>52</td>
                  <td>94~97</td>
                  <td>85~88</td>
                  <td>48</td>
                  <td>178~182</td>
                </tr>
                <tr className={classes.htd}>
                  <td>XXL</td>
                  <td>42</td>
                  <td>185/96A</td>
                  <td>54</td>
                  <td>98~102</td>
                  <td>89~92</td>
                  <td>50</td>
                  <td>182~187</td>
                </tr>
                <tr>
                  <td>XXXL</td>
                  <td>44</td>
                  <td>190/100A</td>
                  <td>56</td>
                  <td>103~107</td>
                  <td>93~96</td>
                  <td>52</td>
                  <td>187~190</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>男装衬衫尺码换算表：<a name="5"></a></h3>
          <div className={classes.answer}>
            <div className={classes.table}>
              <table border="0" width="680" cellspacing="0" cellpadding="0" className={classes.inchtab}>
                <tbody>
                <tr>
                  <th>标准</th>
                  <th>国际</th>
                  <th>美国</th>
                  <th>中国(领围)</th>
                  <th>号型</th>
                  <th>袖长-长袖(cm)</th>
                  <th>袖长-短袖(cm)</th>
                  <th>胸围(cm)</th>
                  <th>肩宽(cm)</th>
                </tr>
                <tr className={classes.htd}>
                  <td rowSpan="9">尺码明细</td>
                  <td>S</td>
                  <td>14.5</td>
                  <td>37</td>
                  <td>160/80</td>
                  <td>59.5</td>
                  <td>23.5</td>
                  <td>102</td>
                  <td>45</td>
                </tr>
                <tr>
                  <td rowSpan="2">M</td>
                  <td rowSpan="2">15</td>
                  <td>38</td>
                  <td>170/84</td>
                  <td>61</td>
                  <td>24.5</td>
                  <td>106</td>
                  <td>46.2</td>
                </tr>
                <tr className={classes.htd}>
                  <td>39</td>
                  <td>170/88</td>
                  <td>61</td>
                  <td>24.5</td>
                  <td>110</td>
                  <td>47.4</td>
                </tr>
                <tr>
                  <td rowSpan="3">L</td>
                  <td rowSpan="3">15.5</td>
                  <td>40</td>
                  <td>175/92</td>
                  <td>62.5</td>
                  <td>25.5</td>
                  <td>114</td>
                  <td>48.6</td>
                </tr>
                <tr className={classes.htd}>
                  <td>41</td>
                  <td>175/96</td>
                  <td>62.5</td>
                  <td>25.5</td>
                  <td>118</td>
                  <td>49.8</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>180/100</td>
                  <td>64</td>
                  <td>26.5</td>
                  <td>122</td>
                  <td>51</td>
                </tr>
                <tr className={classes.htd}>
                  <td rowSpan="2">XL</td>
                  <td rowSpan="2">16</td>
                  <td>43</td>
                  <td>180/104</td>
                  <td>64</td>
                  <td>26.5</td>
                  <td>126</td>
                  <td>52.2</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>185/108</td>
                  <td>65.5</td>
                  <td>27.5</td>
                  <td>130</td>
                  <td>53.4</td>
                </tr>
                <tr className={classes.htd}>
                  <td>XXL</td>
                  <td>16.5</td>
                  <td>45</td>
                  <td>185/112</td>
                  <td>65.5</td>
                  <td>27.5</td>
                  <td>134</td>
                  <td>54.6</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>男装裤子尺码换算表：<a name="6"></a></h3>
          <div className={classes.answer}>
            <div className={classes.table}>
              <table border="0" width="680" cellspacing="0" cellpadding="0" className={classes.inchtab}>
                <tbody>
                <tr>
                  <th>标准</th>
                  <th>国际</th>
                  <th>美国</th>
                  <th>中国</th>
                  <th>腰围(市尺)</th>
                  <th>腰围(cm)</th>
                  <th>臀围(市尺)</th>
                  <th>臀围(cm)</th>
                  <th>身高(cm)</th>
                </tr>
                <tr>
                  <td rowSpan="11">尺码明细</td>
                  <td></td>
                  <td>26</td>
                  <td>26</td>
                  <td>1尺9</td>
                  <td>63</td>
                  <td>2尺6</td>
                  <td>87</td>
                  <td></td>
                </tr>
                <tr className={classes.htd}>
                  <td></td>
                  <td>27</td>
                  <td>27</td>
                  <td>2尺</td>
                  <td>67</td>
                  <td>2尺7</td>
                  <td>90</td>
                  <td></td>
                </tr>
                <tr>
                  <td>XXS</td>
                  <td>28</td>
                  <td>28</td>
                  <td>2尺1</td>
                  <td>70</td>
                  <td>2尺8</td>
                  <td>93</td>
                  <td></td>
                </tr>
                <tr className={classes.htd}>
                  <td>XS</td>
                  <td>29</td>
                  <td>29</td>
                  <td>2尺2</td>
                  <td>73</td>
                  <td>2尺9</td>
                  <td>97</td>
                  <td>160/66A</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>30</td>
                  <td>30</td>
                  <td>2尺3</td>
                  <td>77</td>
                  <td>3尺</td>
                  <td>100</td>
                  <td>165/70A</td>
                </tr>
                <tr className={classes.htd}>
                  <td>M</td>
                  <td>31</td>
                  <td>31</td>
                  <td>2尺4</td>
                  <td>80</td>
                  <td>3尺1</td>
                  <td>103</td>
                  <td>170/74A</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>32</td>
                  <td>32</td>
                  <td>2尺5</td>
                  <td>83</td>
                  <td>3尺2</td>
                  <td>107</td>
                  <td>175/78A</td>
                </tr>
                <tr className={classes.htd}>
                  <td>XL</td>
                  <td>33</td>
                  <td>33</td>
                  <td>2尺6</td>
                  <td>87</td>
                  <td>3尺3</td>
                  <td>110</td>
                  <td>180/82A</td>
                </tr>
                <tr>
                  <td>XLL</td>
                  <td>34</td>
                  <td>34</td>
                  <td>2尺7</td>
                  <td>90</td>
                  <td>3尺4</td>
                  <td>113</td>
                  <td>185/86A</td>
                </tr>
                <tr className={classes.htd}>
                  <td>XXL</td>
                  <td>36</td>
                  <td>36</td>
                  <td>2尺8</td>
                  <td>93</td>
                  <td>3尺5</td>
                  <td>117</td>
                  <td>185/86A</td>
                </tr>
                <tr>
                  <td>XXXL</td>
                  <td>38</td>
                  <td>38</td>
                  <td>2尺9</td>
                  <td>97</td>
                  <td>3尺7~3尺8</td>
                  <td>123-127</td>
                  <td>190/90A</td>
                </tr>
                </tbody>
              </table>
            </div>      温馨提示：<br/>      部分裤子根据裤长不同分为S &lt; R &lt; L，S为短版，R为正常版，L为加长版。<br/>      腰围尺码后面的Length(L)-inseam/指内侧裤缝长度，等同于腿长；<br/>      尺码速查表内的尺寸为一般尺寸对比表，根据不同制造商存在一些差异；<br/>      该尺码速查表根据款式和品牌多少存在一些差异；<br/>      英寸(in)=2.54CM / 英尺(ft)=30.48CM。<br/>
          </div>
          <h3>男鞋：</h3>
          <div className={classes.answer}><a href="http://help.hai360.com/wp-content/uploads/2015/09/国际男鞋尺码表.jpg"><img src="http://help.hai360.com/wp-content/uploads/2015/09/国际男鞋尺码表.jpg" alt="国际男鞋尺码表" width="635" height="452" class="alignnone size-full wp-image-459"/></a>      小码(S)、中码(M)、大码(L)标识的指S=5/6、M=7/8、L=9/10 尺码。<br/>      温馨提示：<br/>      尺码速查表内的尺寸为一般尺寸对比表，根据制造商不同存在一些差异。<br/>      该尺码速查标识的是普通的美国尺码，根据款式和品牌多少存在一些差异。<br/>      部分欧洲尺码和意大利尺码，没有半幅尺寸的请参考括号中的US尺码。<br/>      部分鞋码根据脚掌宽的不同分为N &lt; M &lt; W或者 AA &lt; A &lt; B &lt; C &lt; D；N/AA,A为瘦版；M/B,C为正常版；W/D为加肥版；EE为最大加肥版，适合亚洲人的脚面高的特点。<br/></div>
          <h1 className={classes.maintitle2}>童装</h1>
          <h3>童装尺码换算表：</h3>
          <div className={classes.answer}>
            <div className={classes.table}>
              <table border="0" width="680" cellspacing="0" cellpadding="0" className={classes.inchtab}>
                <tbody>
                <tr>
                  <th>标准</th>
                  <th>尺码</th>
                  <th>年龄</th>
                  <th>适合身高cm</th>
                  <th>胸围(cm)</th>
                  <th>腰围(cm)</th>
                </tr>
                <tr>
                  <td rowSpan="12">尺码明细</td>
                  <td>56</td>
                  <td>0~0.3</td>
                  <td>52~59</td>
                  <td>40</td>
                  <td>40</td>
                </tr>
                <tr className={classes.htd}>
                  <td>65</td>
                  <td>0.3~0.6</td>
                  <td>59~73</td>
                  <td>44</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>0.6~1</td>
                  <td>73~80</td>
                  <td>48</td>
                  <td>48</td>
                </tr>
                <tr className={classes.htd}>
                  <td>80</td>
                  <td>1~2</td>
                  <td>75~85</td>
                  <td>50</td>
                  <td>49</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>2~3</td>
                  <td>85~95</td>
                  <td>52</td>
                  <td>50</td>
                </tr>
                <tr className={classes.htd}>
                  <td>100</td>
                  <td>3~4</td>
                  <td>95~105</td>
                  <td>54</td>
                  <td>51</td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>4~5</td>
                  <td>105~115</td>
                  <td>57</td>
                  <td>52</td>
                </tr>
                <tr className={classes.htd}>
                  <td>120</td>
                  <td>6~7</td>
                  <td>115~125</td>
                  <td>60</td>
                  <td>54</td>
                </tr>
                <tr>
                  <td>130</td>
                  <td>8~9</td>
                  <td>125~135</td>
                  <td>64</td>
                  <td>57</td>
                </tr>
                <tr className={classes.htd}>
                  <td>140</td>
                  <td>10~11</td>
                  <td>135~145</td>
                  <td>68</td>
                  <td>61</td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>12~13</td>
                  <td>145~155</td>
                  <td>72</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>14~15</td>
                  <td>155~165</td>
                  <td>76</td>
                  <td>66</td>
                </tr>
                </tbody>
              </table>
            </div>      尺码速查表内的尺寸为一般尺寸对比表，根据不同制造商存在一些差异。<br/>      该尺码速查表根据款式和品牌多少存在一些差异。<br/>      给家里宝宝买衣服、鞋子的时候，一定要跟商家沟通好，一面买来才发现宝宝穿着不合适，让宝宝穿着不舒服。<br/>
          </div>
          <h3>童鞋尺码换算表：<a name="9"></a></h3>
          <div className={classes.answer}>
            <div className={classes.table}>
              <table border="0" width="680" cellspacing="0" cellpadding="0" className={classes.inchtab}>
                <tbody>
                <tr>
                  <th>标准</th>
                  <th>尺码</th>
                  <th>年龄</th>
                  <th>适合身高cm</th>
                  <th>胸围(cm)</th>
                  <th>腰围(cm)</th>
                </tr>
                <tr>
                  <td rowSpan="12">尺码明细</td>
                  <td>56</td>
                  <td>0~0.3</td>
                  <td>52~59</td>
                  <td>40</td>
                  <td>40</td>
                </tr>
                <tr className={classes.htd}>
                  <td>65</td>
                  <td>0.3~0.6</td>
                  <td>59~73</td>
                  <td>44</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>0.6~1</td>
                  <td>73~80</td>
                  <td>48</td>
                  <td>48</td>
                </tr>
                <tr className={classes.htd}>
                  <td>80</td>
                  <td>1~2</td>
                  <td>75~85</td>
                  <td>50</td>
                  <td>49</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>2~3</td>
                  <td>85~95</td>
                  <td>52</td>
                  <td>50</td>
                </tr>
                <tr className={classes.htd}>
                  <td>100</td>
                  <td>3~4</td>
                  <td>95~105</td>
                  <td>54</td>
                  <td>51</td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>4~5</td>
                  <td>105~115</td>
                  <td>57</td>
                  <td>52</td>
                </tr>
                <tr className={classes.htd}>
                  <td>120</td>
                  <td>6~7</td>
                  <td>115~125</td>
                  <td>60</td>
                  <td>54</td>
                </tr>
                <tr>
                  <td>130</td>
                  <td>8~9</td>
                  <td>125~135</td>
                  <td>64</td>
                  <td>57</td>
                </tr>
                <tr className={classes.htd}>
                  <td>140</td>
                  <td>10~11</td>
                  <td>135~145</td>
                  <td>68</td>
                  <td>61</td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>12~13</td>
                  <td>145~155</td>
                  <td>72</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>14~15</td>
                  <td>155~165</td>
                  <td>76</td>
                  <td>66</td>
                </tr>
                </tbody>
              </table>
            </div>      温馨提示：<br/>      尺码速查表内的尺寸为一般尺寸对比表，根据不同制造商存在一些差异。<br/>      该尺码速查表根据款式和品牌多少存在一些差异。<br/>      给家里宝宝买衣服、鞋子的时候，一定要跟商家沟通好，一面买来才发现宝宝穿着不合适，让宝宝穿着不舒服。<br/>
          </div>
          <h1 className={classes.maintitle2}>戒指</h1>
          <h3>戒指尺码换算表：</h3>
          <div className={classes.answer}>
            <div className={classes.table}>
              <table border="0" width="680" cellspacing="0" cellpadding="0" className={classes.inchtab}>
                <tbody>
                <tr>
                  <th>指圈号码（号）</th>
                  <th>直径（mm）</th>
                  <th>周长（mm）</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>12.3</td>
                  <td>38.6</td>
                </tr>
                <tr className={classes.htd}>
                  <td>2</td>
                  <td>12.6</td>
                  <td>39.6</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>12.9</td>
                  <td>40.5</td>
                </tr>
                <tr className={classes.htd}>
                  <td>4</td>
                  <td>13.3</td>
                  <td>41.8</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>13.7</td>
                  <td>43</td>
                </tr>
                <tr className={classes.htd}>
                  <td>6</td>
                  <td>14.1</td>
                  <td>43.3</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>14.4</td>
                  <td>45.2</td>
                </tr>
                <tr className={classes.htd}>
                  <td>8</td>
                  <td>14.8</td>
                  <td>46.5</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>15.1</td>
                  <td>47.4</td>
                </tr>
                <tr className={classes.htd}>
                  <td>10</td>
                  <td>15.4</td>
                  <td>48.4</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>15.8</td>
                  <td>49.6</td>
                </tr>
                <tr className={classes.htd}>
                  <td>12</td>
                  <td>16.1</td>
                  <td>50.6</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>16.5</td>
                  <td>51.8</td>
                </tr>
                <tr className={classes.htd}>
                  <td>14</td>
                  <td>16.9</td>
                  <td>53.1</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>17.2</td>
                  <td>54</td>
                </tr>
                <tr className={classes.htd}>
                  <td>16</td>
                  <td>17.6</td>
                  <td>55.3</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>17.9</td>
                  <td>56.2</td>
                </tr>
                <tr className={classes.htd}>
                  <td>18</td>
                  <td>18.3</td>
                  <td>57.5</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>18.6</td>
                  <td>58.4</td>
                </tr>
                <tr className={classes.htd}>
                  <td>20</td>
                  <td>19</td>
                  <td>59.7</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>19.2</td>
                  <td>60.3</td>
                </tr>
                <tr className={classes.htd}>
                  <td>22</td>
                  <td>19.5</td>
                  <td>61.2</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>19.9</td>
                  <td>62.5</td>
                </tr>
                <tr className={classes.htd}>
                  <td>24</td>
                  <td>20.2</td>
                  <td>63.4</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>20.7</td>
                  <td>65</td>
                </tr>
                <tr className={classes.htd}>
                  <td>26</td>
                  <td>21</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>21.3</td>
                  <td>66.9</td>
                </tr>
                <tr className={classes.htd}>
                  <td>28</td>
                  <td>21.6</td>
                  <td>67.8</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>22.1</td>
                  <td>69.4</td>
                </tr>
                <tr className={classes.htd}>
                  <td>30</td>
                  <td>22.6</td>
                  <td>71</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>22.9</td>
                  <td>71.9</td>
                </tr>
                <tr className={classes.htd}>
                  <td>32</td>
                  <td>23.1</td>
                  <td>72.5</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>23.5</td>
                  <td>73.8</td>
                </tr>
                </tbody>
              </table>
            </div>      温馨提示：<br/>      首饰店的量尺寸棒最为准确哦~~<br/>      万不得已方法：<br/>      使用纸张或胶带缠在手指略微紧一点后量尺寸<br/>      → 关节部分粗的手指量紧挨关节的部分<br/>      → 关节里侧部分比关节粗的手指量的时候稍紧一下即可<br/>      例如：52mm时12号是适合号码<br/>
          </div>
        </div>
      </div>
    )
  }
}