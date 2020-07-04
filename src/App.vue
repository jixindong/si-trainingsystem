<template>
	<div id="app"><router-view /></div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			isCompleted: false
		};
	},
	computed: {
		// 企业信息
		entInfo() {
			return this.$store.state.entInfo;
		}
	},
	watch: {
		isCompleted() {
			this.sendMessage('answer', { answer: this.entInfo });
		}
	},
	methods: {
		// 发送消息
		sendMessage(cmd, params) {
			window.parent.postMessage({ cmd, params }, '*');
		},
		// 处理消息
		handleMessage(msg) {
			let { data } = msg;

			if (data.cmd) {
				if (data.cmd == 'completed') {
					this.isCompleted = data.params.isCompleted;
				}
			}
		}
	},
	mounted() {
		// 创建处理消息侦听器
		this.$nextTick(() => {
			window.addEventListener('message', this.handleMessage);
		});
	},
	destroyed() {
		// 销毁处理消息侦听器
		window.removeEventListener('message', this.handleMessage);
	}
};
</script>
