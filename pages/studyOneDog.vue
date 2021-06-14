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
		<div class="content">
			<a href="/dogBreeds" class="button is-primary"
				>더 많은 강아지 품종 알아보기</a
			>
		</div>
		<section class="message">
			<div class="message-header">{{ dogName }}의 여러 사진들</div>
			<div class="message-body">
				<div class="tile is-ancestor">
					<div class="tile box is-vertical">
						<div class="tile" v-for="row in getRowImgSize()" :key="row">
							<div class="tile is-parent" v-for="pos in colImgSize" :key="pos">
								<div
									class="tile is-child notification"
									v-if="(img = dogImages[pos - 1 + (row - 1) * colImgSize])"
								>
									<figure class="image">
										<img :src="img" alt="" />
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
						<div class="tile" v-for="row in getRowSubimgSize()" :key="row">
							<div
								class="tile is-parent"
								v-for="pos in getColSubimgSize()"
								:key="pos"
							>
								<div
									class="tile is-child message"
									v-if="
										((totPos = pos - 1 + (row - 1) * getColSubimgSize()),
										(img = subbreedImg[totPos]))
									"
								>
									<div class="message-header">
										{{ subbreeds[totPos].toLowerCase() }}
									</div>
									<div class="message-body">
										<figure class="image">
											<img :src="img" alt="" />
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
	const rowImgSize = 3;
	const colImgSize = 6;
	const totImgSize = rowImgSize * colImgSize;
	function getRandomInt(max) {
		return Math.floor(Math.random() * max); // 0~totImgSize-1
	}
	function getDiffRandomArray(arraySize) {
		let set = new Set();
		while (set.size < arraySize) set.add(getRandomInt(arraySize));
		return set;
	}
	function getRandomImg(ar) {
		if (ar.length <= totImgSize) return ar;
		else {
			let outAr = [];
			let imgSet = getDiffRandomArray(totImgSize);
			for (let pos of imgSet) outAr.push(ar[pos]);
			return outAr;
		}
	}
	export default {
		data() {
			return {
				rowImgSize: rowImgSize,
				colImgSize: colImgSize,
			};
		},
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
				dogImages: getRandomImg(dogImgArray), // max: totImgSize
				subbreeds: subbreedArray,
				subbreedImg: subbreedImg,
			};
		},
		methods: {
			getRowImgSize() {
				const rowImgSize = Math.ceil(this.dogImages.length / this.colImgSize);
				// alert(rowImgSize);
				return rowImgSize;
			},
			getRowSubimgSize() {
				const rowImgSize = Math.ceil(this.subbreeds.length / this.colImgSize);
				return rowImgSize;
			},
			getColSubimgSize() {
				const colImgSize = Math.min(this.subbreeds.length, this.colImgSize);
				return colImgSize;
			},
		},
	};
</script>
