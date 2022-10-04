<template>
    <div id="packageDeal">
        <a class="relative block justify-center align-center py-6 px-6 text-lg md:text-2x1 font-medium rounded-md text-white bg-blue-primary hover:bg-blue-primary-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-primary-light">
            <span class="position">{{info.packageName}}</span>
            <h1>{{info.price}}</h1>
            <div class="justify-center align-center px-6">
                
                <li v-for="item in info.perks" :key="item">
                    {{item}}
                </li>
            </div>
        </a>
        
    </div>
</template>

<script>
    export default {
        name: "PackageDeal",
        props: {
            info: {
                packageName: String,
                price: String,
                perks: [String],
            },
        },
        methods: {
            setInfo(newInfo) {
                alert(newInfo)
            }
        }

    
    }
    </script>