<template>
  <div class="">
    <main-layout>
      <main-header slot="header"></main-header>
      <div class="kana-main" slot="body-main">
        <div class="kana-table-position">
          <div class="table-top">
            <!-- 上左-->
            <div class="table-left-top">
              <table>
                <tbody>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray1" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center ">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray2" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray3" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray4" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray5" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray6" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray7" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray8" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray9" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray10" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topLeftTd of topLeftTdArray11" :key="topLeftTd.index" class="table-left-top-td" :class="{'table-border': topLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{topLeftTd.A}}</span>
                        <span>{{topLeftTd.B}}</span>
                        <span class="font-size">{{topLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 上右-->
            <div class="table-right-top">
              <table>
                <tbody>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray1" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray2" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray3" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray4" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray5" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray6" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray7" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray8" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray9" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray10" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="topRightTd of topRightTdArray11" :key="topRightTd.index" class="table-right-top-td" :class="{'table-border': topRightTd.D}">
                      <div class="div-font-center">
                        <span>{{topRightTd.A}}</span>
                        <span>{{topRightTd.B}}</span>
                        <span class="font-size">{{topRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div class="table-bottom">
            <!-- 下左-->
            <div class="table-left-bottom">
              <table>
                <tbody>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray1" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray2" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray3" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray4" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownLeftTd of DownLeftTdArray5" :key="DownLeftTd.index" class="table-left-bottom-td" :class="{'table-border': DownLeftTd.D}">
                      <div class="div-font-center">
                        <span>{{DownLeftTd.A}}</span>
                        <span>{{DownLeftTd.B}}</span>
                        <span class="font-size">{{DownLeftTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 下右-->
            <div class="table-right-bottom">
              <table>
                <tbody>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray1" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray2" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray3" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray4" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center">
                        <span>{{DownRightTd.A}}</span>
                        <span>{{DownRightTd.B}}</span>
                        <span class="font-size">{{DownRightTd.C}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td v-for="DownRightTd of DownRightTdArray5" :key="DownRightTd.index" class="table-right-bottom-td" :class="{'table-border': DownRightTd.D}">
                      <div class="div-font-center">
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
  data () {
    return {
      topLeftTdArray1: [
        {
          index: "1",
          A: "あ行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "あ",
          B: "ア",
          C: "a",
          D: true
        },
        {
          index: "3",
          A: "い",
          B: "イ",
          C: "i",
          D: true
        },
        {
          index: "4",
          A: "う",
          B: "ウ",
          C: "u",
          D: true
        },
        {
          index: "5",
          A: "え",
          B: "エ",
          C: "e",
          D: true
        },
        {
          index: "6",
          A: "お",
          B: "オ",
          C: "o",
          D: true
        }
      ],
      topLeftTdArray2: [
        {
          index: "1",
          A: "か行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "か",
          B: "カ",
          C: "ka",
          D: true
        },
        {
          index: "",
          A: "き",
          B: "キ",
          C: "ki",
          D: true
        },
        {
          index: "",
          A: "く",
          B: "ク",
          C: "ku",
          D: true
        },
        {
          index: "",
          A: "け",
          B: "ケ",
          C: "ke",
          D: true
        },
        {
          index: "",
          A: "こ",
          B: "コ",
          C: "ko",
          D: true
        }
      ],
      topLeftTdArray3: [
        {
          index: "1",
          A: "さ行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "さ",
          B: "サ",
          C: "sa",
          D: true
        },
        {
          index: "3",
          A: "し",
          B: "シ",
          C: "shi",
          D: true
        },
        {
          index: "4",
          A: "す",
          B: "ス",
          C: "su",
          D: true
        },
        {
          index: "5",
          A: "せ",
          B: "セ",
          C: "se",
          D: true
        },
        {
          index: "6",
          A: "そ",
          B: "ソ",
          C: "so",
          D: true
        }
      ],
      topLeftTdArray4: [
      {
          index: "1",
          A: "た行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "た",
          B: "タ",
          C: "ta",
          D: true
        },
        {
          index: "3",
          A: "ち",
          B: "チ",
          C: "chi",
          D: true
        },
        {
          index: "4",
          A: "つ",
          B: "ツ",
          C: "tsu",
          D: true
        },
        {
          index: "5",
          A: "て",
          B: "テ",
          C: "te",
          D: true
        },
        {
          index: "6",
          A: "と",
          B: "ト",
          C: "to",
          D: true
        }
      ],
      topLeftTdArray5: [
      {
          index: "1",
          A: "な行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "な",
          B: "ナ",
          C: "na",
          D: true
        },
        {
          index: "3",
          A: "に",
          B: "ニ",
          C: "ni",
          D: true
        },
        {
          index: "4",
          A: "ぬ",
          B: "ヌ",
          C: "nu",
          D: true
        },
        {
          index: "5",
          A: "ね",
          B: "ネ",
          C: "ne",
          D: true
        },
        {
          index: "6",
          A: "の",
          B: "ノ",
          C: "no",
          D: true
        }
      ],
      topLeftTdArray6: [
      {
          index: "1",
          A: "は行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "は",
          B: "ハ",
          C: "ha",
          D: true
        },
        {
          index: "3",
          A: "ひ",
          B: "ヒ",
          C: "hi",
          D: true
        },
        {
          index: "4",
          A: "ふ",
          B: "フ",
          C: "fu",
          D: true
        },
        {
          index: "5",
          A: "へ",
          B: "ヘ",
          C: "he",
          D: true
        },
        {
          index: "6",
          A: "ほ",
          B: "ホ",
          C: "ho",
          D: true
        }
      ],
      topLeftTdArray7: [
      {
          index: "1",
          A: "ま行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "ま",
          B: "マ",
          C: "ma",
          D: true
        },
        {
          index: "3",
          A: "み",
          B: "ミ",
          C: "mi",
          D: true
        },
        {
          index: "4",
          A: "む",
          B: "ム",
          C: "mu",
          D: true
        },
        {
          index: "5",
          A: "め",
          B: "メ",
          C: "me",
          D: true
        },
        {
          index: "6",
          A: "も",
          B: "モ",
          C: "mo",
          D: true
        }
      ],
      topLeftTdArray8: [
        {
          index: "1",
          A: "や行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "や",
          B: "ヤ",
          C: "ya",
          D: true
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "4",
          A: "ゆ",
          B: "ユ",
          C: "yu",
          D: true
        },
        {
          index: "5",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "6",
          A: "よ",
          B: "ヨ",
          C: "yo",
          D: true
        }
      ],
      topLeftTdArray9: [
        {
          index: "1",
          A: "ら行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "ら",
          B: "ラ",
          C: "ra",
          D: true
        },
        {
          index: "3",
          A: "り",
          B: "リ",
          C: "ri",
          D: true
        },
        {
          index: "4",
          A: "る",
          B: "ル",
          C: "ru",
          D: true
        },
        {
          index: "5",
          A: "れ",
          B: "レ",
          C: "re",
          D: true
        },
        {
          index: "6",
          A: "ろ",
          B: "ロ",
          C: "ro",
          D: true
        }
      ],
      topLeftTdArray10: [
      {
          index: "1",
          A: "わ行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "わ",
          B: "ワ",
          C: "wa",
          D: true
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "4",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "5",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "6",
          A: "を",
          B: "ヲ",
          C: "o",
          D: true
        }
      ],
      topLeftTdArray11: [
      {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "2",
          A: "ん",
          B: "ン",
          C: "n",
          D: true
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "4",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "5",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "6",
          A: "",
          B: "",
          C: "",
          D: false
        }
      ],
      DownLeftTdArray1: [
      {
          index: "1",
          A: "が行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "が",
          B: "ガ",
          C: "ga",
          D: true
        },
        {
          index: "3",
          A: "ぎ",
          B: "ギ",
          C: "gi",
          D: true
        },
        {
          index: "4",
          A: "ぐ",
          B: "グ",
          C: "gu",
          D: true
        },
        {
          index: "5",
          A: "げ",
          B: "ゲ",
          C: "ge",
          D: true
        },
        {
          index: "6",
          A: "ご",
          B: "ゴ",
          C: "go",
          D: true
        }
      ],
      DownLeftTdArray2: [
      {
          index: "1",
          A: "ざ行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "ざ",
          B: "ザ",
          C: "za",
          D: true
        },
        {
          index: "3",
          A: "じ",
          B: "ジ",
          C: "zi/ji",
          D: true
        },
        {
          index: "4",
          A: "ず",
          B: "ズ",
          C: "zu",
          D: true
        },
        {
          index: "5",
          A: "ぜ",
          B: "ゼ",
          C: "ze",
          D: true
        },
        {
          index: "6",
          A: "ぞ",
          B: "ゾ",
          C: "zo",
          D: true
        }
      ],
      DownLeftTdArray3: [
      {
          index: "1",
          A: "だ行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "だ",
          B: "ダ",
          C: "da",
          D: true
        },
        {
          index: "3",
          A: "ぢ",
          B: "ヂ",
          C: "ji/di",
          D: true
        },
        {
          index: "4",
          A: "づ",
          B: "ヅ",
          C: "zu/du",
          D: true
        },
        {
          index: "5",
          A: "で",
          B: "デ",
          C: "de",
          D: true
        },
        {
          index: "6",
          A: "ど",
          B: "ド",
          C: "do",
          D: true
        }
      ],
      DownLeftTdArray4: [
      {
          index: "1",
          A: "ば行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "ば",
          B: "バ",
          C: "ba",
          D: true
        },
        {
          index: "3",
          A: "び",
          B: "ビ",
          C: "bi",
          D: true
        },
        {
          index: "4",
          A: "ぶ",
          B: "ブ",
          C: "bu",
          D: true
        },
        {
          index: "5",
          A: "べ",
          B: "ベ",
          C: "be",
          D: true
        },
        {
          index: "6",
          A: "ぼ",
          B: "ボ",
          C: "bo",
          D: true
        }
      ],
      DownLeftTdArray5: [
      {
          index: "1",
          A: "ぱ行",
          B: "",
          C: "",
          D: true
        },
        {
          index: "2",
          A: "ぱ",
          B: "パ",
          C: "pa",
          D: true
        },
        {
          index: "3",
          A: "ぴ",
          B: "ピ",
          C: "pi",
          D: true
        },
        {
          index: "4",
          A: "ぷ",
          B: "プ",
          C: "pu",
          D: true
        },
        {
          index: "5",
          A: "ぺ",
          B: "ペ",
          C: "pe",
          D: true
        },
        {
          index: "6",
          A: "ぽ",
          B: "ポ",
          C: "po",
          D: true
        }
      ],
      topRightTdArray1:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false
        }
      ],
      topRightTdArray2:[
        {
          index: "1",
          A: "きゃ",
          B: "キャ",
          C: "kya",
          D: true
        },
        {
          index: "2",
          A: "きゅ",
          B: "キュ",
          C: "kyu",
          D: true
        },
        {
          index: "3",
          A: "きょ",
          B: "キョ",
          C: "kyo",
          D: true
        }
      ],
      topRightTdArray3:[
        {
          index: "1",
          A: "しゃ",
          B: "シャ",
          C: "sya",
          D: true
        },
        {
          index: "2",
          A: "しゅ",
          B: "シュ",
          C: "syu",
          D: true
        },
        {
          index: "3",
          A: "しょ",
          B: "ショ",
          C: "syo",
          D: true
        }
      ],
      topRightTdArray4:[
        {
          index: "1",
          A: "ちゃ",
          B: "チャ",
          C: "cya",
          D: true
        },
        {
          index: "2",
          A: "ちゅ",
          B: "チュ",
          C: "cyu",
          D: true
        },
        {
          index: "3",
          A: "ちょ",
          B: "チョ",
          C: "cyo",
          D: true
        }
      ],
      topRightTdArray5:[
        {
          index: "1",
          A: "にゃ",
          B: "ニャ",
          C: "nya",
          D: true
        },
        {
          index: "2",
          A: "にゅ",
          B: "ニュ",
          C: "nyu",
          D: true
        },
        {
          index: "3",
          A: "にょ",
          B: "ニョ",
          C: "nyo",
          D: true
        }
      ],
      topRightTdArray6:[
        {
          index: "1",
          A: "ひゃ",
          B: "ヒャ",
          C: "hya",
          D: true
        },
        {
          index: "2",
          A: "ひゅ",
          B: "ヒュ",
          C: "hyu",
          D: true
        },
        {
          index: "3",
          A: "ひょ",
          B: "ヒョ",
          C: "hyo",
          D: true
        }
      ],
      topRightTdArray7:[
        {
          index: "1",
          A: "みゃ",
          B: "ミャ",
          C: "mya",
          D: true
        },
        {
          index: "2",
          A: "みゅ",
          B: "ミュ",
          C: "myu",
          D: true
        },
        {
          index: "3",
          A: "みょ",
          B: "ミョ",
          C: "myo",
          D: true
        }
      ],
      topRightTdArray8:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false
        }
      ],
      topRightTdArray9:[
        {
          index: "1",
          A: "りゃ",
          B: "リャ",
          C: "rya",
          D: true
        },
        {
          index: "2",
          A: "りゅ",
          B: "リュ",
          C: "ryu",
          D: true
        },
        {
          index: "3",
          A: "りょ",
          B: "リョ",
          C: "ryo",
          D: true
        }
      ],
      topRightTdArray10:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false
        }
      ],
      topRightTdArray11:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false
        }
      ],
      DownRightTdArray1:[
        {
          index: "1",
          A: "ぎゃ",
          B: "ギャ",
          C: "gya",
          D: true
        },
        {
          index: "2",
          A: "ぎゅ",
          B: "ギュ",
          C: "gyu",
          D: true
        },
        {
          index: "3",
          A: "ぎよ",
          B: "ギョ",
          C: "gyo",
          D: true
        }
      ],
      DownRightTdArray2:[
        {
          index: "1",
          A: "じゃ",
          B: "ジャ",
          C: "ja",
          D: true
        },
        {
          index: "2",
          A: "じゅ",
          B: "ジュ",
          C: "ju",
          D: true
        },
        {
          index: "3",
          A: "じょ",
          B: "ジョ",
          C: "jo",
          D: true
        }
      ],
      DownRightTdArray3:[
        {
          index: "1",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "2",
          A: "",
          B: "",
          C: "",
          D: false
        },
        {
          index: "3",
          A: "",
          B: "",
          C: "",
          D: false
        }
      ],
      DownRightTdArray4:[
        {
          index: "1",
          A: "びゃ",
          B: "ビャ",
          C: "bya",
          D: true
        },
        {
          index: "2",
          A: "びゅ",
          B: "ビュ",
          C: "byu",
          D: true
        },
        {
          index: "3",
          A: "びょ",
          B: "ビョ",
          C: "byo",
          D: true
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
      ]
    }
  },
  methods: {
    handleBefore(){
      console.log("handleBefore:",this.isTop)
      if(!this.isTop){
        this.isTop = true
      }
    },
    handleAfter(){
      console.log("handleAfter:",this.isTop)
      if(this.isTop){
        this.isTop = false
      }
    }
  }
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
</style>
