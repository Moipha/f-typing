<template>
  <div class="items-center column">
    <!-- 生成词数选择 -->
    <div class="q-ma-lg num-chooser">
      <span v-for="(num, index) in availableNum" :key="index">
        <span v-if="index != 0" class="num-chooser-split">/</span>
        <span @click="chooseNum(num)" :class="curNum == num ? 'correct' : ''" class="num-chooser-num">{{ num }}</span>
      </span>
    </div>
    <div v-show="!showResult" class="items-center column">
      <div ref="blocksContainer" @focus="startTyping" @blur="endTyping" @keydown="typing" @keydown.space.prevent
        @click="handleTyping" tabindex="0" class="row words-container">
        <div ref="caret" class="caret"></div>
        <div :ref="(el) => setBlockRef(el as HTMLElement, index)" v-for="(word, index) in words" :key="index"
          class="column items-center word-block">
          <div class="cn-word">{{ word.cn }}</div>
          <div class="en-word">
            <code v-for="(code, cIndex) in word.en" :key="cIndex">{{ code }}</code>
          </div>
        </div>
      </div>
      <q-btn @keydown.space.prevent="restart" @click="restart(curNum)" class="re-btn" padding="xl" icon="refresh"
        size="lg" unelevated />
    </div>
    <Transition name="result">
      <div v-show="showResult" class="result items-center column">
        <div class="row justify-around result-item-container">
          <div class="result-item">
            <div class="result-key">WPM</div>
            <div class="result-value correct">{{ typingResult.wpm }}</div>
          </div>
          <div class="result-item">
            <div class="result-key">正确率</div>
            <div class="result-value correct">{{ typingResult.correctness }}</div>
          </div>
          <div class="result-item">
            <div class="result-key">用时</div>
            <div class="result-value correct">{{ typingResult.during }}</div>
          </div>
        </div>
        <q-btn @keydown.space.prevent="restart" @click="restart(curNum)" class="re-btn" padding="xl" icon="refresh"
          size="lg" unelevated />
      </div>
    </Transition>
  </div>

</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch, nextTick } from 'vue'
import useCaret from '@/hooks/useCaret'
import useTyping from '@/hooks/useTyping'
import useProcess from '@/hooks/useProcess'
import { useTypingStore } from '@/stores/useTypingStore'
import type { TypingResult } from '@/types'
import { storeToRefs } from 'pinia'


/* store中的数据 */
const { words, caret, blocksContainer } = storeToRefs(useTypingStore())
const { setBlockRef, settings } = useTypingStore()


/* 数据 */
const showResult = ref(false)   // 结果是否显示
const typingResult = ref<TypingResult>({ wpm: '', correctness: '', during: '' })  // 结果显示数据
const curIndex = ref<[number, number]>([0, 0])  // 当前caret索引，格式为 [block索引, code索引]
const curNum = ref(settings.generateWordsNum)   // 当前生成词数
const availableNum = ref([20, 30, 40, 50])      // 可生成词数

/* 自定义hook */
const { handleTyping } = useCaret(curIndex)   // 根据索引定位caret
const { handleEnd, restart } = useProcess(typingResult, curIndex, showResult)   // 处理开始和结束流程操作
const { startTyping, endTyping, typing } = useTyping(curIndex, handleEnd)   // 根据键盘输入修改索引与样式

/* 方法 */

// 选择词数
function chooseNum(num: number) {
  curNum.value = num
  // 重新生成
  restart(curNum.value)
}


/* 生命周期 */

nextTick(() => {
  // 手动聚焦
  if (blocksContainer.value) {
    blocksContainer.value.focus()
  }
})

onMounted(() => {
  // 监听屏幕改动，实时调整浮标位置
  window.addEventListener('resize', handleTyping)

  // 监听索引变化，变化后定位浮标
  watch(curIndex, () => {
    handleTyping()
  }, { deep: true, immediate: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleTyping)
})

</script>

<style lang="scss" scoped>
// 选择词数
.num-chooser {
  align-self: flex-start;
  font-size: 1rem;
  user-select: none;

  .num-chooser-num {
    cursor: pointer;
    padding: 5px;
    opacity: .5;
    transition: 0.5s;
  }

  .num-chooser-split {
    font-weight: bolder;
    opacity: .5;

  }
}

// 词组容器
.words-container {
  width: 900px;
  gap: 15px;
  user-select: none;

  // 浮标
  .caret {
    display: block;
    position: absolute;
    width: 3px;
    height: 28px;
    background-color: $active-color;
    border-radius: 10px;
    transition: .2s ease-out;
  }

  // 词组
  .word-block {

    // 下方拼音
    .en-word {
      margin-top: -3px;

      // 单个字母
      code {
        transition: 0.2s;
        font-family: 'Consolas';
        margin: 0 0.5px;
        font-size: 23px;
        opacity: .5;
      }
    }

    // 上方汉字
    .cn-word {
      transition: 0.1s;
      font-size: medium;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
    }
  }

  // 容器聚焦样式
  &:focus {
    outline: none;
  }

}

// 重启按钮
.re-btn {
  margin-top: 80px;
  opacity: .5 !important;
}

// 结果显示
.result {

  position: absolute;
  top: 30%;

  .result-item-container {
    .result-item {
      margin: 0 80px;

      .result-key {
        font-size: 20px;
        font-weight: 500;
        opacity: .5;
      }

      .result-value {
        font-size: 44px;
      }
    }
  }
}

.result-enter-active {
  transition: opacity 0.4s ease;
}

.result-enter-from {
  opacity: 0;
}
</style>