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
				<div class="field">
					<label class="checkbox">
						<input type="checkbox" v-model="dogSort" @change="sortDogNames" />
						강아지 이름을
						<strong>정렬하기</strong>
					</label>
				</div>
				<table class="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>번호</th>
							<th>강아지 한글 이름</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="pos in dogNamesSort.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ dogNamesSort[pos - 1] }}</td>
							</tr>
						</template>
					</tbody>
				</table>
				<section class="box">
					<form @submit.prevent="submitDogName">
						<div class="field">
							<label class="label">새로운 강아지 이름</label>
							<div class="control">
								<input type="text" v-model="newDogName" />
								<button class="button is-link" type="submit">추천하기</button>
							</div>
							<p class="help is-success">
								강아지 Firebase에 소개할 이름을 입력하세요.
							</p>
						</div>
					</form>
				</section>
				<section class="notification is-info is-light">
					<p class="tag is-danger">출처</p>
					<a
						href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=vetnow&logNo=221246618767"
						>대한동물병원</a
					>
				</section>
			</div>
			<div class="column">
				<div class="field">
					<label class="checkbox">
						<input type="checkbox" v-model="catSort" @change="sortCatNames" />
						고양이 이름을
						<strong>정렬하기</strong>
					</label>
				</div>
				<table class="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>번호</th>
							<th>고양이 한글 이름</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="pos in catNamesSort.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ catNamesSort[pos - 1] }}</td>
							</tr>
						</template>
					</tbody>
				</table>
				<section class="box">
					<form @submit.prevent="submitCatName">
						<div class="field">
							<label class="label">새로운 고양이 이름</label>
							<div class="control">
								<input type="text" v-model="newCatName" />
								<button class="button is-link" type="submit">추천하기</button>
							</div>
							<p class="help is-success">
								고양이 Firebase에 소개할 이름을 입력하세요.
							</p>
						</div>
					</form>
				</section>
				<section class="notification is-info is-light">
					<p class="tag is-danger">출처</p>
					<a href="https://m.blog.naver.com/wilddog33/221800502572">해피누리</a>
				</section>
			</div>
		</section>
	</div>
</template>
<script>
	import fbDb from '~/plugins/firebaseDb';
	export default {
		data() {
			return {
				dogNames: [],
				dogNamesSort: [],
				dogSort: false,
				newDogName: '',
				catNames: [],
				catNamesSort: [],
				catSort: false,
				newCatName: '',
			};
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
							if (refName === 'cats') {
								this.catNames = snapshot.val();
								this.sortCatNames();
							} else if (refName === 'dogs') {
								this.dogNames = snapshot.val();
								this.sortDogNames();
							}
						}
					});
			},
			onFbDbNames(refName) {
				fbDb
					.ref(refName)
					.child('names')
					.on('value', (snapshot) => {
						if (snapshot.exists()) {
							if (refName === 'cats') {
								this.catNames = snapshot.val();
								this.sortCatNames();
							} else if (refName === 'dogs') {
								this.dogNames = snapshot.val();
								this.sortDogNames();
							}
						}
					});
			},
			sortDogNames() {
				this.dogNamesSort = this.dogNames.slice(); // copy
				if (this.dogSort) this.dogNamesSort.sort();
			},
			sortCatNames() {
				this.catNamesSort = this.catNames.slice(); // copy
				if (this.catSort) this.catNamesSort.sort();
			},
			submitDogName() {
				let newDogNames = this.dogNames.slice(); // copy
				newDogNames.push(this.newDogName);
				fbDb
					.ref('dogs')
					.child('names')
					.set(newDogNames); // overwrite
				fbDb
					.ref('dogs')
					.child('size')
					.set(newDogNames.length);
			},
			submitCatName() {
				let newCatNames = this.catNames.slice(); // copy
				newCatNames.push(this.newCatName);
				fbDb
					.ref('cats')
					.child('names')
					.set(newCatNames); // overwrite
				fbDb
					.ref('cats')
					.child('size')
					.set(newCatNames.length);
			},
		},
	};
</script>
