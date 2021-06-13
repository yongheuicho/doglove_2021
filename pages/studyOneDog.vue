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
		<section class="message is-warning is-light">
			<div class="message-header">{{ dogName }}의 아품종</div>
			<div class="message-body">
				<div v-if="subbreeds.length > 0" class="tile is-ancestor">
					<div class="tile box is-vertical">
						<div class="tile">
							<div
								class="tile is-parent"
								v-for="pos in subbreeds.length"
								:key="pos"
							>
								<div class="tile is-child message">
									<div class="message-header">
										{{ subbreeds[pos - 1].toLowerCase() }}
									</div>
									<div class="message-body">
										<figure class="image">
											<img :src="subbreedImg[pos - 1]" alt="" />
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-else class="content">
					<p class="subtitle">아품종 정보가 없습니다.</p>
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
			const subbreeds = await axios.get(
				'https://dog.ceo/api/breed/' + dogName.toLowerCase() + '/list'
			);
			const dogImgArray = dogImages.data.message;
			const dogImgSize = dogImgArray.length;
			const subbreedArray = subbreeds.data.message;
			let subbreedImg = [];
			for (let breed of subbreedArray) {
				const img = await axios.get(
					'https://dog.ceo/api/breed/' +
						dogName.toLowerCase() +
						'/' +
						breed.toLowerCase() +
						'/images/random'
				);
				const imgUrl = img.data.message;
				subbreedImg.push(imgUrl);
			}
			return {
				dogName: dogName.toUpperCase(),
				dogImages: dogImgArray,
				subbreeds: subbreedArray,
				subbreedImg: subbreedImg,
			};
		},
	};
</script>
