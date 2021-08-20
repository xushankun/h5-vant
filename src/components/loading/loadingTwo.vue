<template>
<div class="loading-wrap">
  <div class="item-tag flash">一闪一闪</div>
  <div class="item-tag heartbeat">心跳</div>
</div>
</template>

<script>
export default {
  name: "loadingOne"
}
</script>

<style lang="less" scoped>
.loading-wrap {
  position: relative;
  margin:0 auto;
  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }
  @keyframes heartbeat {
    from {
      transform: scale(1)
    }
    15% {
      transform: scale(1.3)
    }
    30% {
      transform: scale(1)
    }
    45% {
      transform: scale(1.3)
    }
    70% {
      transform: scale(1)
    }
  }
  .item-tag {
    width: 80px;
    height: 40px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-left: 80px;

  }
  .flash {
    animation: flash 1s infinite;
  }
  .heartbeat {
    animation: heartbeat 1s infinite;
  }
}
</style>
