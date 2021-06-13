<template>
	<div>
		<section class="hero is-warning">
			<div class="hero-body">
				<p class="title"><i class="fas fa-dog"></i> 강아지 품종</p>
				<p class="subtile">
					다양한 강아지 품종을 함께 공부합시다.
				</p>
			</div>
		</section>
		<hr />
		<section class="columns">
			<div class="column">
				<table class="table">
					<thead>
						<th>번호</th>
						<th>강아지 품종</th>
						<th>강아지 아품종</th>
					</thead>
					<tbody>
						<template v-for="pos in tableDogKeys.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>
									<button
										:class="`button ${colors[(pos - 1) % colorSize]} is-light`"
										@click="submitDogName(tableDogKeys[pos - 1])"
									>
										{{ tableDogKeys[pos - 1].toUpperCase() }}
									</button>
								</td>
								<td>
									<span
										class="tag is-black"
										v-if="
											((ar = tableDogBreeds[tableDogKeys[pos - 1]]),
											ar.length == 0)
										"
										>없음</span
									>
									<span v-else
										><template v-for="subbreed in ar"
											><span class="tag is-success" :key="subbreed">{{
												subbreed.toLowerCase()
											}}</span
											>&nbsp;</template
										>
									</span>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
				<div class="content">
					<p class="tag is-danger">출처</p>
					<a href="https://dog.ceo/dog-api/documentation/">Dog CEO</a><br />
					<a
						class="button is-primary is-small"
						href="https://dog.ceo/api/breeds/list/all"
						>List all breeds</a
					>
				</div>
			</div>
			<div class="column">
				<article class="message is-primary">
					<div class="message-header">오늘의 강아지</div>
					<div class="message-body">
						<div class="content">
							지금 나오는 강아지를 알아보세요.
							<button class="button is-warning" @click="showDogName">
								강아지 품종?
							</button>
						</div>
						<figure class="image container">
							<img :src="dogImageUrl" alt="" />
						</figure>
					</div>
				</article>
			</div>
		</section>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		data() {
			const colors = [
				'is-white',
				'is-primary',
				'is-link',
				'is-info',
				'is-success',
				'is-warning',
				'is-danger',
			];
			return {
				dogNameField: 'dogName',
				colors: colors,
				colorSize: colors.length,
			};
		},
		async asyncData() {
			const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all');
			const randomImg = await axios.get(
				'https://dog.ceo/api/breeds/image/random'
			);
			//alert(Object.keys(dogBreeds));
			return {
				tableDogBreeds: dogBreeds.data.message,
				tableDogKeys: Object.keys(dogBreeds.data.message),
				dogImageUrl: randomImg.data.message,
			};
		},
		methods: {
			showDogName() {
				let urlArray = this.dogImageUrl.split('/');
				let dogName = urlArray[urlArray.length - 2].toUpperCase();
				alert('저는 ' + dogName + '입니다.');
			},
			submitDogName(dogName) {
				this.$router.push(
					'/studyOneDog?' + this.dogNameField + '=' + dogName.toLowerCase()
				);
			},
		},
	};
</script>
