<template>
	<div>
		<section class="hero is-danger">
			<div class="hero-body">
				<p class="title">
					<i class="fas fa-dog"></i> {{ dogName }} 자세히 공부
				</p>
				<p class="subtile">
					강아지 품종 {{ dogName }}에 대해 다양한 정보를 소개합니다.
				</p>
			</div>
		</section>
		<hr />
	</div>
</template>
<script>
	export default {
		asyncData(context) {
			let dogName = context.route.query.dogName;
			return {
				dogName: dogName.toUpperCase(),
			};
		},
	};
</script>
