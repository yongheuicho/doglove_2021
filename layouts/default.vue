<template>
	<div>
		<nav class="breadcrumb">
			<ul>
				<li>
					<nuxt-link to="/"><i class="fas fa-home"></i>&nbsp;홈으로</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/dogCatNames"
						><i class="fas fa-file-signature"></i>&nbsp;강냥이 이름</nuxt-link
					>
				</li>
				<li>
					<nuxt-link to="/dogCatFirebase"
						><i class="fas fa-database"></i>&nbsp;강냥이 Firebase</nuxt-link
					>
				</li>
				<li>
					<nuxt-link to="/dogCatChart"
						><i class="fas fa-chart-bar"></i>&nbsp;강냥이 통계</nuxt-link
					>
				</li>
				<li>
					<nuxt-link to="/dogBreeds"
						><i class="fas fa-seedling"></i>&nbsp;강아지 품종</nuxt-link
					>
				</li>
				<li>
					<nuxt-link to="/dogStudy"
						><i class="fas fa-school"></i>&nbsp;강아지 공부</nuxt-link
					>
				</li>
			</ul>
		</nav>
		<nuxt />
		<footer class="footer">
			<div class="content has-text-centered">
				<i class="fas fa-copyright"></i> 2020-2021, 모든 저작권은
				<strong>강냥이의 동행</strong>에 있습니다.
			</div>
		</footer>
	</div>
</template>
