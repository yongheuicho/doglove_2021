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
				<article class="message">
					<div class="message-header">
						월평균 애완동물 양육비
					</div>
					<div class="message-body">
						<div
							id="lineChart"
							:style="`width:100%;height:${chartHeight}px`"
						></div>
						<div class="content">
							<p class="tag is-danger">출처</p>
							<a href="http://www.koreadognews.co.kr/news/view.php?no=1366">
								한국애견신문</a
							>
						</div>
					</div>
				</article>
			</div>
			<div class="column">
				<article class="message">
					<div class="message-header">
						개 양육 시작연도
					</div>
					<div class="message-body">
						<div id="pieChart" style="width:100%;height:400px"></div>
						<div class="content">
							<p class="tag is-danger">출처</p>
							<a href="http://www.koreadognews.co.kr/news/view.php?no=1366">
								한국애견신문</a
							>
						</div>
					</div>
				</article>
			</div>
		</section>
	</div>
</template>
<script>
	import toastuiChart from '~/plugins/toastuiChart';
	let showChart = false;
	const dogCaringMoney = {
		categories: [
			'5만원 미만',
			'5~10만원',
			'10~15만원',
			'15만원 초과',
			'무응답',
		], // y-axis
		series: [
			// x-axis
			{
				name: '전체(%)',
				data: [20.2, 24.4, 19.7, 22.0, 13.6],
			},
			{
				name: '남자(%)',
				data: [19.7, 23.4, 17.7, 23.6, 15.6],
			},
			{
				name: '여자(%)',
				data: [20.7, 25.3, 21.5, 20.7, 11.9],
			},
		],
	};
	const dogStartYear = {
		categories: ['시작연도'],
		series: [
			{
				name: '2000년 이전',
				data: 11.3,
			},
			{
				name: '2000~2004년',
				data: 12.2,
			},
			{
				name: '2005~2009년',
				data: 12.9,
			},
			{
				name: '2010~2014년',
				data: 28.3,
			},
			{
				name: '2015년 이후',
				data: 28.3,
			},
			{
				name: '무응답',
				data: 7.0,
			},
		],
	};
	export default {
		data() {
			return { chartHeight: 400 };
		},
		mounted() {
			if (!showChart && process.client) {
				if (!toastuiChart('bar', 'lineChart', dogCaringMoney)) return;
				if (!toastuiChart('pie', 'pieChart', dogStartYear)) return;
				showChart = true;
			}
		},
		destroyed() {
			showChart = false;
		},
	};
</script>
