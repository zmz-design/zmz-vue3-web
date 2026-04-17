<template>
  <span class="zmz-amount">
    <slot :amount="currentValue">{{ currentValue }} </slot>
  </span>
</template>
<script>
  import { computed } from 'vue';
  export default {
    name: 'ZmzAmount',
    props: {
      /**
       * 数据源
       */
      amount: {
        type: [String, Number],
        default: ""
      },
      /**
       * 整数
       */
      intUnit: {
        type: Array,
        default: () => {
          return ["", "万", "亿", "兆"]
        }
      },
      /**
       * 整数基数
       */
      intRadiceUnit: {
        type: Array,
        default: () => {
          return ["", "拾", "佰", "仟"]
        }
      },
      /**
       * 整数最后单位
       */
      intLastUnit: {
        type: String,
        default: "元"
      },
      /**
       * 整数最后补齐
       */
      intLastEger: {
        type: String,
        default: "整"
      },
      /**
       * 小数
       */
      decUnit: {
        type: Array,
        default: () => {
          return ['角', '分', '毫', '厘']
        }
      },
      /**
       * 大写数字
       */
      uppercaseNum: {
        type: Array,
        default: () => {
          return ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
        }
      }
    },
    setup(props) {
      const currentValue = computed(() => {
        let params = ''
        let integerPart = Math.floor(props.amount);
        let fractionPart = Math.round((props.amount - integerPart) * 100);
        // 处理整数部分
        let integerStr = String(integerPart);
        if (integerStr) {
          let integerLength = integerStr.length;
          let zeroCount = 0
          for (let i = 0; i < integerLength; i++) {
            let n = integerStr.substring(i, i + 1);
            let current = integerLength - i - 1;
            let m = current % 4
            let q = current / 4
            if (n === '0') {
              zeroCount++
            } else {
              if (zeroCount > 0) {
                params += props.uppercaseNum[0]
              }
              zeroCount = 0
              params += props.uppercaseNum[parseInt(n)] + props.intRadiceUnit[m]
            }
            if (m === 0 && zeroCount < 4) {
              params += props.intUnit[q]
            }
          }
          params += props.intLastUnit
        }
        // 处理小数部分
        let fractionStr = String(fractionPart);
        if (fractionStr) {
          let fractionLength = fractionStr.length;
          for (var i = 0; i < fractionLength; i++) {
            var n = fractionStr.substring(i, i + 1);
            if (n != '0') {
              params += props.uppercaseNum[Number(n)] + props.decUnit[i];
            }
          }

          if (params == '') {
            params += props.uppercaseNum[0] + props.intLastUnit + props.intLastEger;
          } else if (!fractionLength.length) {
            params += props.intLastEger;
          }
        }

        return params
      })

      return {
        currentValue
      };
    }
  };
</script>
