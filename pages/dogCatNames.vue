<template>
	<div>
		<section class="hero is-link">
			<div class="hero-body">
				<p class="title">
					<i class="fas fa-dog"></i> 강아지와
					<i class="fas fa-cat"></i> 고양이의 다양한 이름
				</p>
				<p class="subtile">
					여러분의 강아지와 고양이에게 색다른 이름을 붙여주세요.
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
							<th>수컷 강아지 이름</th>
							<th>암컷 강아지 이름</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="pos in tableDogMaleNames.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ tableDogMaleNames[pos - 1] }}</td>
								<td>{{ tableDogFemaleNames[pos - 1] }}</td>
							</tr>
						</template>
					</tbody>
				</table>
				<div class="content">
					<p class="content">
						<span class="tag is-danger">출처</span>
						<a href="https://github.com/sindresorhus/dog-names"
							>sindresorhus/dog-names</a
						>
					</p>
					<p class="content">
						<a class="button is-primary is-small" href="/dogMaleNames.json"
							>JSON - 수컷 강아지 이름</a
						>
					</p>
					<p class="content">
						<a class="button is-primary is-small" href="/dogFemaleNames.json"
							>JSON - 암컷 강아지 이름</a
						>
					</p>
				</div>
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
						<template v-for="pos in tableCatNames.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ tableCatNames[pos - 1] }}</td>
							</tr>
						</template>
					</tbody>
				</table>
				<div class="content">
					<p class="tag is-danger">출처</p>
					<a href="https://github.com/sindresorhus/cat-names">
						sindresorhus/cat-names</a
					><br />
					<a class="button is-primary is-small" href="/catNames.json"
						>JSON - 고양이 이름</a
					><br />
				</div>
			</div>
		</section>
	</div>
</template>
<script>
	import dogMaleNames from '~/static/dogMaleNames.json';
	import dogFemaleNames from '~/static/dogFemaleNames.json';
	import catNames from '~/static/catNames.json';
	export default {
		data() {
			return {
				tableDogMaleNames: dogMaleNames.names,
				tableDogFemaleNames: dogFemaleNames.names,
				tableCatNames: catNames.names,
			};
		},
	};
</script>
