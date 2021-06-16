<template>
	<div>
		<section class="hero is-success">
			<div class="hero-body">
				<p class="title">
					<i class="fas fa-dog"></i> 강아지와
					<i class="fas fa-cat"></i> 고양이의 통계
				</p>
				<p class="subtile">
					강아지와 고양이의 상황을 알려주는 통계를 시각적으로 보여줍니다.
				</p>
			</div>
		</section>
		<hr />
		<section class="columns">
			<div class="column">
				<div id="lineChart"></div>
			</div>
			<div class="column"></div>
		</section>
	</div>
</template>
<script>
	import toastuiChart from '~/plugins/toastuiChart';
	let showChart = false;
	export default {
		mounted() {
			if (!showChart && process.client) {
				if (!toastuiChart('lineChart')) return;
				showChart = true;
			}
		},
		destroyed() {
			showChart = false;
		},
	};
</script>
