<template>
    <div id="topNav">
        <img src="../assets/img/EYE.png" alt="" width="50">
        <ul>
            <li v-for="item in navItems">
                <a :href="item.link">{{ item.name }}</a>
            </li>

        </ul>
        <el-input type="text" placeholder="搜索..." id="searchInput"  />
        <a style="margin-left: auto;" href="SecondFolder/About.html">关于</a>

        
        <!-- <span>{{counter}}</span> -->
        <!-- 传参时还想获取事件对象，需要使用$event -->
        <!-- <button @click="func01(2,$event)"></button>
        <button @click="func02"></button>
        <button @click="inc"></button> -->
    </div>
</template>
<!--  -->
<script setup>
import{userCounter} from '@/js/firstJs'
import { ref } from 'vue';
const navItems = [
    { name: '主页', link: 'Main.html' },
    { name: '前端开发', link: 'SecondFolder/SeverDeveloper.html' },
    { name: '后端开发', link: 'SecondFolder/SeverDeveloper.html' },
    { name: 'Unity3D', link: 'SecondFolder/Unity3D.html' },
    { name: 'WPF', link: 'SecondFolder/test.html' },
    { name: '图形学', link: 'SecondFolder/test.html' },
];

const value = ref(0)
const { counter, inc } = userCounter(10)

function func01(value,event) {
    counter.value-= value;
    console.log(event.target);
}
//类似于lambda表达式
const func02 = (e) => {
    console.log(e.target);
    e.target.innerText = '点击了我';
    counter.value++
}



</script>
<style>
#topNav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
}

ul {
    display: flex;
    list-style: none;
    padding-inline-start: 1rem;
}
</style>