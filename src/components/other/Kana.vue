<template>
  <div class="">
    <main-layout>
      <main-header slot="header"></main-header>
      <div class="kana-main" slot="body-main">
        <div class="kana-table-position">
          <div class="table-top">
            <!-- 上左 -->
            <div class="table-left-top">
              <table>
                <tbody>
                  <tr>
                    <!--
                      一.
                      :class:v-bind:class的简写,以动态地切换 class;
                      {'动态样式': 开关属性}

                      动态样式也可以不定义在模板中：
                      如下放到data中：
                      <div :class="classObject"></div>
                      data() {
                        return {
                          classObject: {
                            active: true,
                            'text-danger': false
                          }
                        }
                      }
                      也可以放到计算属性中

                      二.
                      :style：绑定内嵌样式
                    -->
                    <td v-for="topLeftTd of topLeftTdArray1" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray2" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray3" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray4" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray5" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray6" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray7" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray8" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray9" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray10" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray11" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topLeftTd.E}">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 上右 -->
            <div class="table-right-top">
              <table>
                <tbody>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray1" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray2" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray3" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray4" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray5" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray6" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray7" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray8" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray9" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray10" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray11" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': topRightTd.E}">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-search">
              <!--
                v-model:实现表单输入和应用状态之间的双向绑定
              -->
              <input type="text" class="text-input" v-model="inpitValue" maxlength="2" />
              <!--
                一.
                v-on:添加一个事件监听器,通过它调用在实例中定义的方法
                v-on指令，通常缩写为 @ 符号，即v-on:click="methodName" = @click="methodName"

                二.
                事件修饰符
                .stop:阻止事件向上级DOM元素传递
                .prevent:阻止默认事件的发生
                .capture:捕获冒泡，即有冒泡发生时，有该修饰符的dom元素会先执行，如果有多个，从外到内依次执行，
                .self:将事件绑定到自身，只有自身才能触发，通常用于避免冒泡事件的影响
                .once:设置事件只能触发一次，比如按钮的点击等
                .passive:该修饰符大概意思用于对DOM的默认事件进行性能优化
              -->
              <div class="button-search" @click.stop="searchKana()" > ZHOUNI </div>
              <div>
                <span>是否连词：</span>
                <span>
                  <input v-model="isWord" type="radio" value="1" />是
                </span>
                <span>
                  <input v-model="isWord" type="radio" value="0" />否
                </span>
              </div>
              <div>
                {{this.wordStr}}
                <div>
                  {{this.Loma}}
                </div>
              </div>
              <div class="font-color">{{ errorMessage }}</div>
            </div>
          </div>
          <div class="table-bottom">
            <!-- 下左 -->
            <div class="table-left-bottom">
              <table>
                <tbody>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray1" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownLeftTd.E}">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray2" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownLeftTd.E}">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray3" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownLeftTd.E}">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray4" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownLeftTd.E}">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray5" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownLeftTd.E}">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 下右 -->
            <div class="table-right-bottom">
              <table>
                <tbody>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray1" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownRightTd.E}">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray2" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownRightTd.E}">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray3" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownRightTd.E}">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray4" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownRightTd.E}">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray5" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center" :class="{'select-font-color': DownRightTd.E}">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <main-menu slot="body-left"></main-menu>
      <main-footer slot="footer"></main-footer>
    </main-layout>
  </div>
</template>

<script>
export default {
  name: 'Kana',
  /*
    data:
      1.是一个函数;Vue 会在创建新组件实例的过程中调用此函数;
        它返回一个对象，Vue会通过响应性系统将其包裹起来，并以$data的形式存储在组件实例中。
      2.对尚未提供所需值的 property 使用 null、undefined 或其他占位的值。 
  */
  data () {
    return {
      topLeftTdArray1: [
        {
          index: "1",
          A: "あ行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "あ",
          B: "ア",
          C: "a",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "い",
          B: "イ",
          C: "i",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "う",
          B: "ウ",
          C: "u",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "え",
          B: "エ",
          C: "e",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "お",
          B: "オ",
          C: "o",
          D: true,
          E: false
        }
      ],
      topLeftTdArray2: [
        {
          index: "1",
          A: "か行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "か",
          B: "カ",
          C: "ka",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "き",
          B: "キ",
          C: "ki",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "く",
          B: "ク",
          C: "ku",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "け",
          B: "ケ",
          C: "ke",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "こ",
          B: "コ",
          C: "ko",
          D: true,
          E: false
        }
      ],
      topLeftTdArray3: [
        {
          index: "1",
          A: "さ行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "さ",
          B: "サ",
          C: "sa",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "し",
          B: "シ",
          C: "shi",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "す",
          B: "ス",
          C: "su",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "せ",
          B: "セ",
          C: "se",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "そ",
          B: "ソ",
          C: "so",
          D: true,
          E: false
        }
      ],
      topLeftTdArray4: [
      {
          index: "1",
          A: "た行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "た",
          B: "タ",
          C: "ta",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "ち",
          B: "チ",
          C: "chi",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "つ",
          B: "ツ",
          C: "tsu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "て",
          B: "テ",
          C: "te",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "と",
          B: "ト",
          C: "to",
          D: true,
          E: false
        }
      ],
      topLeftTdArray5: [
      {
          index: "1",
          A: "な行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "な",
          B: "ナ",
          C: "na",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "に",
          B: "ニ",
          C: "ni",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "ぬ",
          B: "ヌ",
          C: "nu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "ね",
          B: "ネ",
          C: "ne",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "の",
          B: "ノ",
          C: "no",
          D: true,
          E: false
        }
      ],
      topLeftTdArray6: [
      {
          index: "1",
          A: "は行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "は",
          B: "ハ",
          C: "ha",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "ひ",
          B: "ヒ",
          C: "hi",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "ふ",
          B: "フ",
          C: "fu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "へ",
          B: "ヘ",
          C: "he",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "ほ",
          B: "ホ",
          C: "ho",
          D: true,
          E: false
        }
      ],
      topLeftTdArray7: [
      {
          index: "1",
          A: "ま行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "ま",
          B: "マ",
          C: "ma",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "み",
          B: "ミ",
          C: "mi",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "む",
          B: "ム",
          C: "mu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "め",
          B: "メ",
          C: "me",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "も",
          B: "モ",
          C: "mo",
          D: true,
          E: false
        }
      ],
      topLeftTdArray8: [
        {
          index: "1",
          A: "や行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "や",
          B: "ヤ",
          C: "ya",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "4",
          A: "ゆ",
          B: "ユ",
          C: "yu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "6",
          A: "よ",
          B: "ヨ",
          C: "yo",
          D: true,
          E: false
        }
      ],
      topLeftTdArray9: [
        {
          index: "1",
          A: "ら行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "ら",
          B: "ラ",
          C: "ra",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "り",
          B: "リ",
          C: "ri",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "る",
          B: "ル",
          C: "ru",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "れ",
          B: "レ",
          C: "re",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "ろ",
          B: "ロ",
          C: "ro",
          D: true,
          E: false
        }
      ],
      topLeftTdArray10: [
      {
          index: "1",
          A: "わ行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "わ",
          B: "ワ",
          C: "wa",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "4",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "5",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "6",
          A: "を",
          B: "ヲ",
          C: "o",
          D: true,
          E: false
        }
      ],
      topLeftTdArray11: [
      {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "2",
          A: "ん",
          B: "ン",
          C: "n",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "4",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "5",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "6",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        }
      ],
      DownLeftTdArray1: [
      {
          index: "1",
          A: "が行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "が",
          B: "ガ",
          C: "ga",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "ぎ",
          B: "ギ",
          C: "gi",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "ぐ",
          B: "グ",
          C: "gu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "げ",
          B: "ゲ",
          C: "ge",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "ご",
          B: "ゴ",
          C: "go",
          D: true,
          E: false
        }
      ],
      DownLeftTdArray2: [
      {
          index: "1",
          A: "ざ行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "ざ",
          B: "ザ",
          C: "za",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "じ",
          B: "ジ",
          C: "zi/ji",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "ず",
          B: "ズ",
          C: "zu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "ぜ",
          B: "ゼ",
          C: "ze",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "ぞ",
          B: "ゾ",
          C: "zo",
          D: true,
          E: false
        }
      ],
      DownLeftTdArray3: [
      {
          index: "1",
          A: "だ行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "だ",
          B: "ダ",
          C: "da",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "ぢ",
          B: "ヂ",
          C: "ji/di",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "づ",
          B: "ヅ",
          C: "zu/du",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "で",
          B: "デ",
          C: "de",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "ど",
          B: "ド",
          C: "do",
          D: true,
          E: false
        }
      ],
      DownLeftTdArray4: [
      {
          index: "1",
          A: "ば行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "ば",
          B: "バ",
          C: "ba",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "び",
          B: "ビ",
          C: "bi",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "ぶ",
          B: "ブ",
          C: "bu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "べ",
          B: "ベ",
          C: "be",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "ぼ",
          B: "ボ",
          C: "bo",
          D: true,
          E: false
        }
      ],
      DownLeftTdArray5: [
      {
          index: "1",
          A: "ぱ行",
          B: "",
          C: "",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "ぱ",
          B: "パ",
          C: "pa",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "ぴ",
          B: "ピ",
          C: "pi",
          D: true,
          E: false
        },
        {
          index: "4",
          A: "ぷ",
          B: "プ",
          C: "pu",
          D: true,
          E: false
        },
        {
          index: "5",
          A: "ぺ",
          B: "ペ",
          C: "pe",
          D: true,
          E: false
        },
        {
          index: "6",
          A: "ぽ",
          B: "ポ",
          C: "po",
          D: true,
          E: false
        }
      ],
      topRightTdArray1:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        }
      ],
      topRightTdArray2:[
        {
          index: "1",
          A: "きゃ",
          B: "キャ",
          C: "kya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "きゅ",
          B: "キュ",
          C: "kyu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "きょ",
          B: "キョ",
          C: "kyo",
          D: true,
          E: false
        }
      ],
      topRightTdArray3:[
        {
          index: "1",
          A: "しゃ",
          B: "シャ",
          C: "sya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "しゅ",
          B: "シュ",
          C: "syu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "しょ",
          B: "ショ",
          C: "syo",
          D: true,
          E: false
        }
      ],
      topRightTdArray4:[
        {
          index: "1",
          A: "ちゃ",
          B: "チャ",
          C: "cya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "ちゅ",
          B: "チュ",
          C: "cyu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "ちょ",
          B: "チョ",
          C: "cyo",
          D: true,
          E: false
        }
      ],
      topRightTdArray5:[
        {
          index: "1",
          A: "にゃ",
          B: "ニャ",
          C: "nya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "にゅ",
          B: "ニュ",
          C: "nyu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "にょ",
          B: "ニョ",
          C: "nyo",
          D: true,
          E: false
        }
      ],
      topRightTdArray6:[
        {
          index: "1",
          A: "ひゃ",
          B: "ヒャ",
          C: "hya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "ひゅ",
          B: "ヒュ",
          C: "hyu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "ひょ",
          B: "ヒョ",
          C: "hyo",
          D: true,
          E: false
        }
      ],
      topRightTdArray7:[
        {
          index: "1",
          A: "みゃ",
          B: "ミャ",
          C: "mya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "みゅ",
          B: "ミュ",
          C: "myu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "みょ",
          B: "ミョ",
          C: "myo",
          D: true,
          E: false
        }
      ],
      topRightTdArray8:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        }
      ],
      topRightTdArray9:[
        {
          index: "1",
          A: "りゃ",
          B: "リャ",
          C: "rya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "りゅ",
          B: "リュ",
          C: "ryu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "りょ",
          B: "リョ",
          C: "ryo",
          D: true,
          E: false
        }
      ],
      topRightTdArray10:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        }
      ],
      topRightTdArray11:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        }
      ],
      DownRightTdArray1:[
        {
          index: "1",
          A: "ぎゃ",
          B: "ギャ",
          C: "gya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "ぎゅ",
          B: "ギュ",
          C: "gyu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "ぎよ",
          B: "ギョ",
          C: "gyo",
          D: true,
          E: false
        }
      ],
      DownRightTdArray2:[
        {
          index: "1",
          A: "じゃ",
          B: "ジャ",
          C: "ja",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "じゅ",
          B: "ジュ",
          C: "ju",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "じょ",
          B: "ジョ",
          C: "jo",
          D: true,
          E: false
        }
      ],
      DownRightTdArray3:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false,
          E: false
        }
      ],
      DownRightTdArray4:[
        {
          index: "1",
          A: "びゃ",
          B: "ビャ",
          C: "bya",
          D: true,
          E: false
        },
        {
          index: "2",
          A: "びゅ",
          B: "ビュ",
          C: "byu",
          D: true,
          E: false
        },
        {
          index: "3",
          A: "びょ",
          B: "ビョ",
          C: "byo",
          D: true,
          E: false
        }
      ],
      DownRightTdArray5:[
        {
          index: "1",
          A: "ぴゃ",
          B: "ピャ",
          C: "pya",
          D: true
        },
        {
          index: "2",
          A: "ぴゅ",
          B: "ピュ",
          C: "pyu",
          D: true
        },
        {
          index: "3",
          A: "ぴょ",
          B: "ピョ",
          C: "pyo",
          D: true
        }
      ],
      inpitValue: null,
      allArray: [],
      errorMessage: null,
      isWord: "0",
      wordStr: null,
      Loma: null
    }
  },
  /*
    methods:向组件实例添加方法,它是一个包含所需方法的对象;
  */
  methods: {
    /*
      检索50音图中的平片假名
    */
    searchKana(){
      this.allArray = [];
      this.errorMessage = null;

      this.composeArray();
      console.log("allArray:",this.allArray)

      console.log("searchKana:",this.inpitValue)
      if(this.inpitValue == "" || 
        this.inpitValue == null ||
        this.inpitValue == undefined){
          this.errorMessage = "请输入检索内容";
          return
      }

      //清理拼接数据
      if("c" == this.inpitValue){
        this.wordStr = null
        this.Loma = null
        this.errorMessage = "连词内容已清理";
        return
      }
      
      /*
        for:
        forEach:
          1.forEach不能使用break和continue两个关键字；它不是普通的遍历，实现continue效果，可以直接使用return；
          2.forEach本身无法跳出循环，必须遍历所有数据才能结束
      */
      for(let i=0; i<this.allArray.length; i++){
        let array = this.allArray[i];
        array.E = false;
        if(array.A == this.inpitValue){
          console.log("平假名已经匹配")
          array.E = true;
          //是否连词
          if("1" == this.isWord){
            this.connectWord(array, 'A')
          }
          break;
        }else if(array.B == this.inpitValue){
          console.log("片假名已经匹配")
          array.E = true;
          //是否连词
          if("1" == this.isWord){
            this.connectWord(array, 'B')
          }
          break;
        }
        
        if(i == this.allArray.length - 1){
          this.errorMessage = "您输入的内容，无匹配项";
          return
        }
      }
    },
    /*
      将分散的平片假名，组合到一个集合中
    */
    composeArray(){
      this.topLeftTdArray1.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray2.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray3.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray4.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray5.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray6.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray7.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray8.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray9.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray10.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topLeftTdArray11.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });

      this.DownLeftTdArray1.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.DownLeftTdArray2.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.DownLeftTdArray3.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.DownLeftTdArray4.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.DownLeftTdArray5.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      
      this.topRightTdArray1.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray2.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray3.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray4.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray5.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray6.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray7.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray8.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray9.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray10.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.topRightTdArray11.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });

      this.DownRightTdArray1.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.DownRightTdArray2.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.DownRightTdArray3.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.DownRightTdArray4.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
      this.DownRightTdArray5.forEach(element => {
        if(element.D && element.B != "") this.allArray.push(element)
      });
    },
    /**
     * 连接输入内容
    */
    connectWord(arrayParam, typeStr){
      if("A" == typeStr){
        if(this.wordStr == null){
          this.wordStr = arrayParam.A
        }else{
          this.wordStr += arrayParam.A
        }
      }else if("B" == typeStr){
        if(this.wordStr == null){
          this.wordStr = arrayParam.B
        }else{
          this.wordStr += arrayParam.B
        }
      }

      if(this.Loma == null){
        this.Loma = arrayParam.C
      }else{
        this.Loma += arrayParam.C
      }
    }
  }
  /*
    一.
    计算属性：用于简单运算的
    计算属性计算的结果与定义一个函数，从最终的结果看，两者是完全相同的；
    而不同的是，计算属性将给予他的响应依赖关系缓存；
    就是说当你的原值没有发生改变之前，返回的结果还是之前计算出的结果，而不必多次执行函数；
    computed:{}

    二.
    侦听器：通用的方法来响应数据的变化
    当需要在数据变化时执行异步或开销较大的操作时使用；
    watch:{}
  */
}
</script>

<style scoped>
.kana-main .kana-table-position .table-top{
  display: flex;
}

.kana-main .kana-table-position .table-bottom{
  display: flex;
}

.kana-main .kana-table-position{
  /* border: 1px solid #405e8fbd; */
  width: 1260px;
  height: 570px;
  margin-left: 20px;
  margin-top: 20px;
}

.kana-main .kana-table-position .table-top{
  /* border: 1px solid #405e8fbd; */
  width: 100%;
  height: 350px;
}
.kana-main .kana-table-position .table-bottom{
  /* border: 1px solid #405e8fbd; */
  width: 100%;
  height: 190px;
  padding-top: 30px;
}

.kana-main .kana-table-position .table-top .table-right-top{
  padding-left: 30px;
}

.kana-main .kana-table-position .table-top .table-left-top-td{
  width: 100px;
  height: 28px;
}

.table-border{
  border: 1px solid #405e8fbd;
}

.div-font-center {
  padding-left: 25px;
}

.font-size{
  font-size: 6px;
}

.kana-main .kana-table-position .table-top .table-right-top-td{
  width: 140px;
  height: 28px;
}

.kana-main .kana-table-position .table-bottom .table-right-bottom{
  padding-left: 30px;
}

.kana-main .kana-table-position .table-bottom .table-left-bottom-td{
  width: 100px;
  height: 28px;
}

.kana-main .kana-table-position .table-bottom .table-right-bottom-td{
  width: 140px;
  height: 28px;
}

/**最右上输入域div区域*/
.kana-table-position .table-top .text-search{
  width: 200px;
}
.kana-table-position .table-top .text-search .text-input{
  width: 100px;
  height: 20px;
  display: inline;
}
.kana-table-position .table-top .text-search .button-search{
  border: 1px solid black;
  font-size: 14px;
  width: 60px;
  text-align: center;
  display: inline;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 8px;
  white-space: pre-wrap;
}

.font-color{
  font-size: 12px;
  color: red;
}

.select-font-color{
  font-weight: 700;
  color: darkred;
}
</style>
