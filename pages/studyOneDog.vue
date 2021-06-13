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
		<section class="message">
			<div class="message-header">{{ dogName }}의 여러 사진들</div>
			<div class="message-body">
				<div class="tile is-ancestor">
					<div class="tile box is-vertical">
						<div class="tile">
							<div class="tile is-parent" v-for="pos in 6" :key="pos">
								<div class="tile is-child notification">
									<figure class="image">
										<img :src="dogImages[pos - 1]" alt="" />
									</figure>
								</div>
							</div>
						</div>
						<div class="tile">
							<div class="tile is-parent" v-for="pos in 6" :key="pos">
								<div class="tile is-child notification">
									<figure class="image">
										<img :src="dogImages[pos - 1 + 6]" alt="" />
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		async asyncData(context) {
			const dogName = context.route.query.dogName;
			const dogImages = await axios.get(
				'https://dog.ceo/api/breed/' + dogName.toLowerCase() + '/images'
			);
			const dogImgArray = dogImages.data.message;
			const dogImgSize = dogImgArray.length;
			return {
				dogName: dogName.toUpperCase(),
				dogImages: dogImgArray,
			};
		},
	};
</script>
