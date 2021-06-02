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
          <span class="tag is-danger">출처</span>
          <a href="https://github.com/sindresorhus/dog-names"
            >sindresorhus/dog-names</a
          ><br />
          <span class="tag is-warning">JSON</span
          ><a href="/dogMaleNames.json">수컷 강아지 이름</a><br />
          <span class="tag is-warning">JSON</span
          ><a href="/dogFemaleNames.json">암컷 강아지 이름</a><br />
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
          <span class="tag is-danger">출처</span>
          <a href="https://github.com/sindresorhus/cat-names"
            >sindresorhus/cat-names</a
          ><br />
          <span class="tag is-warning">JSON</span
          ><a href="/catNames.json">고양이 이름</a><br />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import dogMaleNames from "~/static/dogMaleNames.json";
import dogFemaleNames from "~/static/dogFemaleNames.json";
import catNames from "~/static/catNames.json";
export default {
  data() {
    return {
      tableDogMaleNames: dogMaleNames.names,
      tableDogFemaleNames: dogFemaleNames.names,
      tableCatNames: catNames.names
    };
  }
};
</script>
