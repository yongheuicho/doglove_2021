<template>
	<div>
		<section class="hero is-danger">
			<div class="hero-body">
				<p class="title"><i class="fas fa-dog"></i> 강아지 공부</p>
				<p class="subtile">
					한 번에 한 품종씩 자세하게 공부합시다.
				</p>
			</div>
		</section>
		<hr />
		<section class="box">
			<form @submit.prevent="submitDogName">
				<div class="field">
					<label class="label">강아지 이름</label>
					<div class="control">
						<input type="text" v-model="dogName" />
						<button class="button is-link" type="submit">공부하기</button>
					</div>
					<p class="help is-success">
						자세히 공부하고 싶은 강아지 이름을 입력하세요.
					</p>
				</div>
			</form>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				dogNameField: 'dogName',
				dogName: null,
			};
		},
		methods: {
			submitDogName() {
				this.$router.push(
					'/studyOneDog?' + this.dogNameField + '=' + this.dogName
				);
			},
		},
	};
</script>
