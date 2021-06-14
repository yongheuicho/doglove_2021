<template>
	<div>
		<section class="hero is-light">
			<div class="hero-body">
				<p class="title">
					<i class="fas fa-dog"></i> 강아지와
					<i class="fas fa-cat"></i> 고양이를 위한 Firebase
				</p>
				<p class="subtile">
					외부 서비스인 Firebase가 강냥이와 함께 합니다.
				</p>
			</div>
		</section>
		<hr />
		<section class="columns">
			<div class="column">
				<table class="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>번호</th>
							<th>강아지 이름</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="pos in dogNames.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ dogNames[pos - 1] }}</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
			<div class="column">
				<table class="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>번호</th>
							<th>고양이 이름</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="pos in catNames.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ catNames[pos - 1] }}</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</section>
	</div>
</template>
<script>
	import fbDb from '~/plugins/firebaseDb';
	export default {
		data() {
			return { dogNames: [], catNames: [] };
		},
		mounted() {
			// this.getFbDbNames('cats');
			// this.getFbDbNames('dogs');
			this.onFbDbNames('cats');
			this.onFbDbNames('dogs');
		},
		methods: {
			getFbDbNames(refName) {
				fbDb
					.ref(refName)
					.child('names')
					.get()
					.then((snapshot) => {
						if (snapshot.exists()) {
							if (refName === 'cats') this.catNames = snapshot.val();
							else if (refName === 'dogs') this.dogNames = snapshot.val();
						}
					});
			},
			onFbDbNames(refName) {
				fbDb
					.ref(refName)
					.child('names')
					.on('value', (snapshot) => {
						if (snapshot.exists()) {
							if (refName === 'cats') this.catNames = snapshot.val();
							else if (refName === 'dogs') this.dogNames = snapshot.val();
						}
					});
			},
		},
	};
</script>
